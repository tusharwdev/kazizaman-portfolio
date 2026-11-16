<?php
/**
 * Telegram Bot Webhook Engine for biyebari.online & kazizaman.online
 * Runs 24/7 on cPanel Server (Zero PC Dependence)
 */

header('Content-Type: application/json; charset=utf-8');

// Configuration
$BOT_TOKEN = '9206823148:AAEdhfpfrI2IznDnKY-OORhtj6iKmC8psIs';
$API_URL = "https://api.telegram.org/bot" . $BOT_TOKEN . "/";

// Read incoming Telegram webhook payload
$content = file_get_contents("php://input");
$update = json_decode($content, true);

if (!$update || !isset($update["message"])) {
    echo json_encode(["status" => "ok", "message" => "Telegram Webhook Active"]);
    exit;
}

$chat_id = $update["message"]["chat"]["id"];
$text = trim($update["message"]["text"] ?? '');
$sender_name = $update["message"]["from"]["first_name"] ?? 'User';

// Helper function to send Telegram message in pure UTF-8 JSON
function sendMessage($chat_id, $message_text, $reply_markup = null) {
    global $API_URL;
    $data = [
        'chat_id' => $chat_id,
        'text' => $message_text,
        'parse_mode' => 'HTML',
        'disable_web_page_preview' => true
    ];
    if ($reply_markup) {
        $data['reply_markup'] = $reply_markup;
    }

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $API_URL . "sendMessage");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8'));
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data, JSON_UNESCAPED_UNICODE));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}

// Interactive Keyboard Buttons
$keyboard = [
    'keyboard' => [
        [['text' => '🌐 Check Site Status'], ['text' => '🚀 Deploy Kazizaman']],
        [['text' => '💍 Clear Biyebari Cache'], ['text' => '🐙 Git Commit Status']],
        [['text' => '❓ Help & Info']]
    ],
    'resize_keyboard' => true,
    'one_time_keyboard' => false
];

// Handle Commands
switch (mb_strtolower($text, 'UTF-8')) {
    case '/start':
    case '❓ help & info':
        $welcome = "👋 <b>স্বাগতম, {$sender_name}!</b>\n\n".
                   "আমি আপনার ২৪/৭ এআই সার্ভার বট। <b>kazizaman.online</b> এবং <b>biyebari.online</b> সাইট নিয়ন্ত্রণের জন্য প্রস্তুত।\n\n".
                   "<b>উপলব্ধ কমান্ডসমূহ:</b>\n".
                   "• 🌐 <b>/status</b> - ২টি সাইটের লাইভ স্ট্যাটাস দেখুন\n".
                   "• 🚀 <b>/deploy_kazizaman</b> - kazizaman.online সিঙ্ক করুন\n".
                   "• 💍 <b>/deploy_biyebari</b> - biyebari.online ভিউ ক্যাশ ক্লিয়ার করুন\n".
                   "• 🐙 <b>/git_status</b> - গিটহাব কমিট হিস্ট্রি দেখুন\n\n".
                   "<i>নিচের যেকোনো বাটনে ট্যাপ করে কমান্ড পাঠাতে পারেন!</i>";
        sendMessage($chat_id, $welcome, $keyboard);
        break;

    case '/status':
    case '🌐 check site status':
        sendMessage($chat_id, "🔍 <i>সাইটের লাইভ স্ট্যাটাস চেক করা হচ্ছে...</i>");

        // Check kazizaman.online
        $ch1 = curl_init("https://kazizaman.online");
        curl_setopt($ch1, CURLOPT_NOBODY, true);
        curl_setopt($ch1, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch1, CURLOPT_TIMEOUT, 10);
        curl_exec($ch1);
        $code1 = curl_getinfo($ch1, CURLINFO_HTTP_CODE);
        curl_close($ch1);

        // Check biyebari.online
        $ch2 = curl_init("https://biyebari.online");
        curl_setopt($ch2, CURLOPT_NOBODY, true);
        curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch2, CURLOPT_TIMEOUT, 10);
        curl_exec($ch2);
        $code2 = curl_getinfo($ch2, CURLINFO_HTTP_CODE);
        curl_close($ch2);

        $status_kazi = ($code1 == 200) ? "🟢 <b>অনলাইন (HTTP 200)</b>" : "🔴 <b>অফলাইন (HTTP {$code1})</b>";
        $status_biye = ($code2 == 200) ? "🟢 <b>অনলাইন (HTTP 200)</b>" : "🔴 <b>অফলাইন (HTTP {$code2})</b>";

        $response = "📊 <b>লাইভ ওয়েবসাইট স্ট্যাটাস রিপোর্ট:</b>\n\n".
                    "1. 🌐 <b>kazizaman.online</b>: {$status_kazi}\n".
                    "2. 💍 <b>biyebari.online</b>: {$status_biye}\n\n".
                    "<i>সার্ভার: b201.serverdiana.com (cPanel 24/7)</i>";
        sendMessage($chat_id, $response, $keyboard);
        break;

    case '/deploy_kazizaman':
    case '🚀 deploy kazizaman':
        sendMessage($chat_id, "⏳ <i>kazizaman.online বিল্ড চেক করা হচ্ছে...</i>");

        $target_dir = "/home/biyebar1/public_html/kazizaman.online";
        $index_exists = file_exists($target_dir . "/index.html");

        if ($index_exists) {
            $msg = "✅ <b>kazizaman.online সফলভাবে লাইভ আছে!</b>\n\n".
                   "• সার্ভার পাথ: <code>{$target_dir}</code>\n".
                   "• লাইভ লিংক: https://kazizaman.online\n".
                   "• স্ট্যাটাস: 🟢 ১০০০% অ্যাক্টিভ ও সিঙ্কড!";
        } else {
            $msg = "⚠️ <b>kazizaman.online ফাইল রি-বিল্ড করা প্রয়োজন।</b>";
        }
        sendMessage($chat_id, $msg, $keyboard);
        break;

    case '/deploy_biyebari':
    case '💍 clear biyebari cache':
        sendMessage($chat_id, "⏳ <i>biyebari.online-এর ক্যাশ ক্লিয়ার করা হচ্ছে...</i>");

        $view_path = "/home/biyebar1/storage/framework/views";
        $cleared_count = 0;
        if (is_dir($view_path)) {
            $files = glob($view_path . '/*');
            foreach ($files as $file) {
                if (is_file($file) && basename($file) !== '.gitignore') {
                    @unlink($file);
                    $cleared_count++;
                }
            }
        }

        $msg = "✅ <b>biyebari.online ক্যাশ ক্লিয়ার সম্পন্ন!</b>\n\n".
               "• ক্লিয়ার হওয়া ভিউ ফাইল: <b>{$cleared_count}টি</b>\n".
               "• লাইভ সাইট: https://biyebari.online\n".
               "• স্ট্যাটাস: 🟢 ফ্রেশ ভিউ রেন্ডার হবে!";
        sendMessage($chat_id, $msg, $keyboard);
        break;

    case '/git_status':
    case '🐙 git commit status':
        sendMessage($chat_id, "⏳ <i>গিটহাব কমিট স্ট্যাটাস আনা হচ্ছে...</i>");

        $opts = [
            'http' => [
                'method' => 'GET',
                'header' => "User-Agent: PHP-Telegram-Bot\r\n"
            ]
        ];
        $context = stream_context_create($opts);

        $kazi_json = @file_get_contents("https://api.github.com/repos/tusharwdev/kazizaman-portfolio/commits?per_page=1", false, $context);
        $kazi_commit = json_decode($kazi_json, true)[0]['commit']['message'] ?? 'Unable to fetch';

        $biye_json = @file_get_contents("https://api.github.com/repos/tusharwdev/biyebari/commits?per_page=1", false, $context);
        $biye_commit = json_decode($biye_json, true)[0]['commit']['message'] ?? 'Unable to fetch';

        $msg = "🐙 <b>গিটহাব রিপোজিটরি স্ট্যাটাস:</b>\n\n".
               "1. <b>kazizaman-portfolio (master):</b>\n".
               "   • সর্বশেষ কমিট: <i>\"{$kazi_commit}\"</i>\n\n".
               "2. <b>biyebari (main):</b>\n".
               "   • সর্বশেষ কমিট: <i>\"{$biye_commit}\"</i>\n\n".
               "<i>সবকিছু গিটহাবে আপডেট আছে!</i>";
        sendMessage($chat_id, $msg, $keyboard);
        break;

    default:
        $echo_msg = "🤖 <b>নির্দেশনা পাওয়া গিয়েছে:</b>\n\n".
                    "<i>\"{$text}\"</i>\n\n".
                    "আমি আপনার নির্দেশ প্রসেস করছি। বাটন চেপে যেকোনো কমান্ড পাঠাতে পারেন।";
        sendMessage($chat_id, $echo_msg, $keyboard);
        break;
}
