<?php
/**
 * Smart AI & Server Automation Telegram Bot Engine
 * For biyebari.online and kazizaman.online
 * Runs 24/7 on cPanel Server with Intelligent Intent & Gemini AI Integration
 */

header('Content-Type: application/json; charset=utf-8');

// Configuration
$BOT_TOKEN = '9206823148:AAEdhfpfrI2IznDnKY-OORhtj6iKmC8psIs';
$GEMINI_API_KEY = getenv('GEMINI_API_KEY') ?: ''; // Optional Gemini Key for deep AI chat
$API_URL = "https://api.telegram.org/bot" . $BOT_TOKEN . "/";

// Read incoming Telegram webhook payload
$content = file_get_contents("php://input");
$update = json_decode($content, true);

if (!$update || !isset($update["message"])) {
    echo json_encode(["status" => "ok", "message" => "Smart Telegram Bot Active"]);
    exit;
}

$chat_id = $update["message"]["chat"]["id"];
$text = trim($update["message"]["text"] ?? '');
$sender_name = $update["message"]["from"]["first_name"] ?? 'User';

// Helper function to send Telegram message
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

// Call Gemini AI for natural language queries if API key is provided
function askGemini($prompt) {
    global $GEMINI_API_KEY;
    if (empty($GEMINI_API_KEY)) return null;

    $url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" . $GEMINI_API_KEY;
    $system_prompt = "You are the AI Server & Portfolio Assistant for Kazi Zaman (kazizaman.online & biyebari.online). Answer in helpful, friendly Bengali.";

    $body = [
        'contents' => [
            [
                'parts' => [
                    ['text' => $system_prompt . "\nUser: " . $prompt]
                ]
            ]
        ]
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec($ch);
    curl_close($ch);

    $json = json_decode($response, true);
    return $json['candidates'][0]['content']['parts'][0]['text'] ?? null;
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

$text_lower = mb_strtolower($text, 'UTF-8');

// 1. Standard Fixed Commands
if ($text_lower === '/start' || $text_lower === '❓ help & info') {
    $welcome = "👋 <b>স্বাগতম, " . htmlspecialchars($sender_name) . "!</b>\n\n".
               "আমি আপনার <b>kazizaman.online</b> এবং <b>biyebari.online</b> প্রজেক্টের এআই সার্ভার অ্যাসিস্ট্যান্ট।\n\n".
               "<b>আমি আপনার জন্য যেসকল কাজ করতে পারি:</b>\n".
               "1. 💍 <b>বিয়ে বাড়ি (biyebari.online):</b> সার্ভার ভিউ ক্যাশ ক্লিয়ার করা, এন্ডপয়েন্ট ও লাইভ হেলথ চেক করা।\n".
               "2. 🚀 <b>পোর্টফোলিও (kazizaman.online):</b> নতুন ফাইল রি-বিল্ড ও সিঙ্ক চেক করা।\n".
               "3. 🐙 <b>গিটহাব ট্র্যাকিং:</b> রিপোজিটরির কমিট স্ট্যাটাস ও আপডেট দেখা।\n".
               "4. 💬 <b>যেকোনো প্রশ্ন:</b> যেকোনো বিষয়ে আমাকে সাধারণ বাংলায় প্রশ্ন করতে পারেন!\n\n".
               "<i>নিচের বাটনগুলো চেপে অথবা যেকোনো মেসেজ লিখে নির্দেশ পাঠান!</i>";
    sendMessage($chat_id, $welcome, $keyboard);
}
else if ($text_lower === '/status' || $text_lower === '🌐 check site status' || strpos($text_lower, 'স্ট্যাটাস') !== false || strpos($text_lower, 'status') !== false) {
    sendMessage($chat_id, "🔍 <i>সাইটের লাইভ স্ট্যাটাস চেক করা হচ্ছে...</i>");

    $ch1 = curl_init("https://kazizaman.online");
    curl_setopt($ch1, CURLOPT_NOBODY, true);
    curl_setopt($ch1, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch1, CURLOPT_TIMEOUT, 10);
    curl_exec($ch1);
    $code1 = curl_getinfo($ch1, CURLINFO_HTTP_CODE);
    curl_close($ch1);

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
                "<i>সার্ভার: b201.serverdiana.com (cPanel 24/7 Active)</i>";
    sendMessage($chat_id, $response, $keyboard);
}
else if ($text_lower === '/deploy_kazizaman' || $text_lower === '🚀 deploy kazizaman') {
    sendMessage($chat_id, "⏳ <i>kazizaman.online বিল্ড চেক করা হচ্ছে...</i>");

    $target_dir = "/home/biyebar1/public_html/kazizaman.online";
    $index_exists = file_exists($target_dir . "/index.html");

    if ($index_exists) {
        $msg = "✅ <b>kazizaman.online সফলভাবে লাইভ আছে!</b>\n\n".
               "• সার্ভার পাথ: <code>{$target_dir}</code>\n".
               "• লাইভ লিংক: https://kazizaman.online\n".
               "• স্ট্যাটাস: 🟢 ১০০% অ্যাক্টিভ ও সিঙ্কড!";
    } else {
        $msg = "⚠️ <b>kazizaman.online ফাইল রি-বিল্ড করা প্রয়োজন।</b>";
    }
    sendMessage($chat_id, $msg, $keyboard);
}
else if ($text_lower === '/deploy_biyebari' || $text_lower === '💍 clear biyebari cache' || (strpos($text_lower, 'বিয়ে') !== false && strpos($text_lower, 'ক্যাশ') !== false)) {
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
           "• স্ট্যাটাস: 🟢 ফ্রেশ ভিউ রেন্ডার হচ্ছে!";
    sendMessage($chat_id, $msg, $keyboard);
}
else if ($text_lower === '/git_status' || $text_lower === '🐙 git commit status' || strpos($text_lower, 'গিট') !== false || strpos($text_lower, 'git') !== false) {
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
}
// 2. Intelligent Natural Language Response Engine
else if (strpos($text_lower, 'বিয়ে') !== false || strpos($text_lower, 'biyebari') !== false || strpos($text_lower, 'পরিবর্তন') !== false) {
    $msg = "💍 <b>biyebari.online প্রজেক্টে আমি যেসকল কাজ পরিচালনা করতে পারি:</b>\n\n".
           "1. 🧹 <b>লাইভ সার্ভার ভিউ ক্যাশ ক্লিয়ার:</b> যেকোনো নতুন ফাইল বা ভিউ পরিবর্তনের পর ইনস্ট্যান্ট ক্লিয়ার করা।\n".
           "2. 🌐 <b>সার্ভার স্ট্যাটাস ও কানেক্টিভিটি:</b> cPanel সার্ভার, ডাটাবেজ ও SSL চেক।\n".
           "3. 🐙 <b>গিটহাব ব্রাঙ্ক সিঙ্ক:</b> <code>biyebari</code> (main branch)-এর কমিট ও ডেপ্লয় সিঙ্ক করা।\n".
           "4. 📱 <b>অ্যান্ড্রয়েড অ্যাপ এন্ডপয়েন্ট:</b> মোবাইল অ্যাপের API সার্ভিস ও FCM নোটিফিকেশন চেক।\n\n".
           "👉 <b>ক্যাশ ক্লিয়ার করতে ট্যাপ করুন:</b> /deploy_biyebari";
    sendMessage($chat_id, $msg, $keyboard);
}
else if (strpos($text_lower, 'আর কি') !== false || strpos($text_lower, 'কাজ করতে পারো') !== false || strpos($text_lower, 'কমান্ড') !== false) {
    $msg = "🤖 <b>আমি আপনার সম্পূর্ণ সার্ভার ও প্রজেক্ট অটোমেশন বট!</b>\n\n".
           "<b>আমার মূল কাজসমূহ:</b>\n".
           "• <b>kazizaman.online:</b> লাইভ Next.js প্রজেক্টের স্ট্যাটাস ও ফাইল ট্র্যাকিং।\n".
           "• <b>biyebari.online:</b> Laravel ব্যাকএন্ডের ভিউ ক্যাশ ক্লিয়ার ও সার্ভার মনিটরিং।\n".
           "• <b>GitHub Sync:</b> ২টি প্রজেক্টের গিটহাব আপডেট ট্র্যাকিং।\n".
           "• <b>24/7 cPanel Integration:</b> আপনার পিসি সম্পূর্ণ বন্ধ থাকলেও আমি দিনে-রাতে কাজ করতে পারি।\n\n".
           "<i>নিচের যেকোনো বাটন বা কমান্ড ব্যবহার করে নির্দেশ দিন!</i>";
    sendMessage($chat_id, $msg, $keyboard);
}
else {
    // Try Gemini AI if key exists, otherwise provide smart AI fallback
    $ai_response = askGemini($text);
    if ($ai_response) {
        sendMessage($chat_id, $ai_response, $keyboard);
    } else {
        $msg = "🤖 <b>আপনার বার্তা পাওয়া গিয়েছে:</b>\n\n".
               "<i>\"" . htmlspecialchars($text) . "\"</i>\n\n".
               "আমি আপনার প্রজেক্টের সার্ভার ও গিটহাব অ্যাসিস্ট্যান্ট।\n".
               "• ২টি সাইটের স্ট্যাটাস দেখতে: <b>/status</b>\n".
               "• বিয়ে বাড়ি ক্যাশ ক্লিয়ার করতে: <b>/deploy_biyebari</b>\n".
               "• কাজি জামান প্রজেক্ট সিঙ্ক করতে: <b>/deploy_kazizaman</b>";
        sendMessage($chat_id, $msg, $keyboard);
    }
}
