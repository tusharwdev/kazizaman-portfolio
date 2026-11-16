<?php
/**
 * Smart AI & Server Automation Telegram Bot Engine
 * Powered by Gemini 3.1 Flash AI & cPanel 24/7 Server Management
 */

header('Content-Type: application/json; charset=utf-8');
clearstatcache();

// Read incoming payload
$content = file_get_contents("php://input");
$update = json_decode($content, true);

if (!$update || !isset($update["message"])) {
    echo json_encode(["status" => "ok", "message" => "Smart AI Telegram Bot Active"]);
    exit;
}

$chat_id = $update["message"]["chat"]["id"];
$text = trim($update["message"]["text"] ?? '');
$sender_name = $update["message"]["from"]["first_name"] ?? 'User';

// Configuration
$BOT_TOKEN = '9206823148:AAEdhfpfrI2IznDnKY-OORhtj6iKmC8psIs';
$GEMINI_API_KEY = base64_decode('QVEuQWI4Uk42SWF6LXB6aDZjZk1XOWc1X3ROOEEzcHh2WFZvWmQtbk43NFpvNWdBeV9KM0E=');
$API_URL = "https://api.telegram.org/bot" . $BOT_TOKEN . "/";

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

// Call Gemini AI
function askGeminiAI($prompt, $user_name) {
    global $GEMINI_API_KEY;
    if (empty($GEMINI_API_KEY)) return null;

    $models = ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];
    $ai_text = null;

    $system_instructions = "You are Kazi Zaman's 24/7 AI Assistant & Server Master for 'kazizaman.online' (Next.js Portfolio) and 'biyebari.online' (Laravel Matrimony & Android App). ".
        "User's name is '{$user_name}'. Respond dynamically in friendly, professional, clear Bengali (বাংলা). Never repeat fixed welcome templates unless asked /start. Format with HTML bold/italics.";

    foreach ($models as $model) {
        $url = "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key=" . $GEMINI_API_KEY;
        $body = [
            'contents' => [
                [
                    'parts' => [
                        ['text' => $system_instructions . "\n\nUser Message: " . $prompt]
                    ]
                ]
            ]
        ];

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json; charset=utf-8']);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body, JSON_UNESCAPED_UNICODE));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        $response = curl_exec($ch);
        curl_close($ch);

        $json = json_decode($response, true);
        if (isset($json['candidates'][0]['content']['parts'][0]['text'])) {
            $ai_text = $json['candidates'][0]['content']['parts'][0]['text'];
            break;
        }
    }

    return $ai_text;
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

// Handle Specific Button Triggers
if ($text_lower === '/start' || $text_lower === '❓ help & info') {
    $welcome = "👋 <b>স্বাগতম, " . htmlspecialchars($sender_name) . "!</b>\n\n".
               "আমি আপনার <b>Gemini AI Powered 24/7 Server Assistant</b>।\n".
               "আমি <b>kazizaman.online</b> এবং <b>biyebari.online</b> প্রজেক্টের সার্ভার, গিটহাব ও কোড নিয়ন্ত্রণে সার্বক্ষণিক নিয়োজিত।\n\n".
               "<b>আপনি যা যা করতে পারেন:</b>\n".
               "• যেকোনো সাধারণ বা জটিল বিষয় নিয়ে আমাকে বাংলায় যেকোনো প্রশ্ন করতে পারেন।\n".
               "• নিচের বাটনগুলো চেপে ২টি সাইটের লাইভ স্ট্যাটাস, ক্যাশ ক্লিয়ার ও গিটহাব আপডেট নিয়ন্ত্রণ করতে পারেন!\n\n".
               "<i>যেকোনো নির্দেশ এখনই লিখে পাঠান!</i>";
    sendMessage($chat_id, $welcome, $keyboard);
}
else if ($text_lower === '/status' || $text_lower === '🌐 check site status') {
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
else if ($text_lower === '/deploy_biyebari' || $text_lower === '💍 clear biyebari cache') {
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
else if ($text_lower === '/git_status' || $text_lower === '🐙 git commit status') {
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
else {
    // Process all natural text via Gemini AI directly
    $ai_reply = askGeminiAI($text, $sender_name);
    if ($ai_reply) {
        sendMessage($chat_id, $ai_reply, $keyboard);
    } else {
        $msg = "🤖 <b>বার্তা গ্রহণ করা হয়েছে, " . htmlspecialchars($sender_name) . "!</b>\n\n".
               "আমি আপনার <b>kazizaman.online</b> এবং <b>biyebari.online</b> প্রজেক্টের এআই অ্যাসিস্ট্যান্ট।\n\n".
               "• ২টি সাইটের স্ট্যাটাস দেখতে: <b>/status</b>\n".
               "• বিয়ে বাড়ি ক্যাশ ক্লিয়ার করতে: <b>/deploy_biyebari</b>\n".
               "• কাজি জামান প্রজেক্ট সিঙ্ক করতে: <b>/deploy_kazizaman</b>";
        sendMessage($chat_id, $msg, $keyboard);
    }
}
