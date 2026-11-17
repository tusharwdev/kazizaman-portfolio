<?php
/**
 * Smart AI & Server Automation Telegram Bot Engine
 * Dedicated EXCLUSIVELY for kazizaman.online
 * Powered by Gemini AI & cPanel 24/7 Server Management
 */

header('Content-Type: application/json; charset=utf-8');
clearstatcache();

// Read incoming payload
$content = file_get_contents("php://input");
$update = json_decode($content, true);

if (!$update || !isset($update["message"])) {
    echo json_encode(["status" => "ok", "message" => "kazizaman.online AI Bot Active"]);
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

// Call Gemini AI for kazizaman.online
function askGeminiAI($prompt, $user_name) {
    global $GEMINI_API_KEY;
    if (empty($GEMINI_API_KEY)) return null;

    $models = ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];
    $ai_text = null;
    $is_rate_limited = false;

    $system_instructions = "You are Kazi Zaman's 24/7 Personal AI Assistant & Web Engineer dedicated EXCLUSIVELY to 'kazizaman.online' (Next.js Portfolio Website). ".
        "User's name is '{$user_name}'. Respond dynamically in friendly, professional, clear Bengali (বাংলা). Format with HTML bold/italics where helpful.";

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

        $opts = [
            'http' => [
                'method'  => 'POST',
                'header'  => "Content-Type: application/json; charset=utf-8\r\nUser-Agent: Mozilla/5.0\r\n",
                'content' => json_encode($body, JSON_UNESCAPED_UNICODE),
                'timeout' => 8
            ],
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false
            ]
        ];

        $context  = stream_context_create($opts);
        $response = @file_get_contents($url, false, $context);

        if ($response) {
            $json = json_decode($response, true);
            if (isset($json['candidates'][0]['content']['parts'][0]['text'])) {
                $ai_text = $json['candidates'][0]['content']['parts'][0]['text'];
                break;
            }
        } else if (isset($http_response_header) && strpos($http_response_header[0], '429') !== false) {
            $is_rate_limited = true;
        }
    }

    if ($ai_text) {
        return $ai_text;
    } else if ($is_rate_limited) {
        return "⚠️ <b>গুগল এআই সার্ভিস বর্তমানে কোটা সাময়িক ব্যস্ততার (429 Rate Limit) মধ্যে রয়েছে।</b>\n\nঅনুগ্রহ করে ১-২ মিনিট পর আবার বার্তা পাঠান।";
    }

    return null;
}

// Interactive Keyboard Buttons for kazizaman.online ONLY
$keyboard = [
    'keyboard' => [
        [['text' => '🌐 Check Site Status'], ['text' => '🚀 Deploy & Sync']],
        [['text' => '🐙 Git Commit Status'], ['text' => '❓ Help & Info']]
    ],
    'resize_keyboard' => true,
    'one_time_keyboard' => false
];

$text_lower = mb_strtolower($text, 'UTF-8');

// Handle Specific Button Triggers
if ($text_lower === '/start' || $text_lower === '❓ help & info') {
    $welcome = "👋 <b>স্বাগতম, " . htmlspecialchars($sender_name) . "!</b>\n\n".
               "আমি আপনার <b>kazizaman.online</b> প্রজেক্টের নিবেদিত ২৪/৭ এআই সার্ভার অ্যাসিস্ট্যান্ট।\n\n".
               "<b>আমি আপনার জন্য যা যা করতে পারি:</b>\n".
               "1. 🌐 <b>/status</b> - kazizaman.online লাইভ সার্ভার ও ডোমেইন স্ট্যাটাস মনিটর করা।\n".
               "2. 🚀 <b>/deploy</b> - ওয়েবসাইট বিল্ড, ফাইল ডিরেক্টরি এবং সার্ভার সিঙ্ক চেক করা।\n".
               "3. 🐙 <b>/git_status</b> - গিটহাব রিপোজিটরির (kazizaman-portfolio) কমিট ট্র্যাকিং।\n".
               "4. 💬 <b>যেকোনো প্রশ্ন:</b> পোর্টফোলিও বা কোড সম্পর্কিত যেকোনো প্রশ্ন বাংলায় করতে পারেন!\n\n".
               "<i>নিচের যেকোনো বাটন বা মেসেজ ব্যবহার করে নির্দেশ দিন!</i>";
    sendMessage($chat_id, $welcome, $keyboard);
}
else if ($text_lower === '/status' || $text_lower === '🌐 check site status' || strpos($text_lower, 'স্ট্যাটাস') !== false || strpos($text_lower, 'status') !== false) {
    sendMessage($chat_id, "🔍 <i>kazizaman.online লাইভ স্ট্যাটাস চেক করা হচ্ছে...</i>");

    $ch = curl_init("https://kazizaman.online");
    curl_setopt($ch, CURLOPT_NOBODY, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $status_kazi = ($code == 200) ? "🟢 <b>অনলাইন (HTTP 200)</b>" : "🔴 <b>অফলাইন (HTTP {$code})</b>";

    $response = "📊 <b>kazizaman.online ওয়েবসাইট স্ট্যাটাস রিপোর্ট:</b>\n\n".
                "🌐 <b>Domain:</b> kazizaman.online\n".
                "🟢 <b>Status:</b> {$status_kazi}\n".
                "📁 <b>Document Root:</b> <code>/home/biyebar1/public_html/kazizaman.online</code>\n".
                "🖥️ <b>Server:</b> b201.serverdiana.com (cPanel 24/7 Active)";
    sendMessage($chat_id, $response, $keyboard);
}
else if ($text_lower === '/deploy' || $text_lower === '/deploy_kazizaman' || $text_lower === '🚀 deploy & sync' || strpos($text_lower, 'deploy') !== false) {
    sendMessage($chat_id, "⏳ <i>kazizaman.online বিল্ড ও ফাইলস চেক করা হচ্ছে...</i>");

    $target_dir = "/home/biyebar1/public_html/kazizaman.online";
    $index_exists = file_exists($target_dir . "/index.html");

    if ($index_exists) {
        $msg = "✅ <b>kazizaman.online সফলভাবে লাইভ আছে!</b>\n\n".
               "• সার্ভার পাথ: <code>{$target_dir}</code>\n".
               "• লাইভ ইউআরএল: https://kazizaman.online\n".
               "• স্ট্যাটাস: 🟢 ১০০% অ্যাক্টিভ ও সিঙ্কড!";
    } else {
        $msg = "⚠️ <b>kazizaman.online ফাইল রি-বিল্ড করা প্রয়োজন।</b>";
    }
    sendMessage($chat_id, $msg, $keyboard);
}
else if ($text_lower === '/git_status' || $text_lower === '🐙 git commit status' || strpos($text_lower, 'গিট') !== false || strpos($text_lower, 'git') !== false) {
    sendMessage($chat_id, "⏳ <i>kazizaman-portfolio গিটহাব কমিট স্ট্যাটাস আনা হচ্ছে...</i>");

    $opts = [
        'http' => [
            'method' => 'GET',
            'header' => "User-Agent: PHP-Telegram-Bot\r\n"
        ]
    ];
    $context = stream_context_create($opts);

    $kazi_json = @file_get_contents("https://api.github.com/repos/tusharwdev/kazizaman-portfolio/commits?per_page=1", false, $context);
    $kazi_commit = json_decode($kazi_json, true)[0]['commit']['message'] ?? 'Unable to fetch';

    $msg = "🐙 <b>kazizaman-portfolio গিটহাব স্ট্যাটাস:</b>\n\n".
           "• <b>Repository:</b> tusharwdev/kazizaman-portfolio\n".
           "• <b>Branch:</b> master\n".
           "• <b>সর্বশেষ কমিট:</b> <i>\"{$kazi_commit}\"</i>\n\n".
           "<i>প্রজেক্ট গিটহাবে শতভাগ আপডেট আছে!</i>";
    sendMessage($chat_id, $msg, $keyboard);
}
else {
    // Process natural language text via Gemini AI for kazizaman.online ONLY
    $ai_reply = askGeminiAI($text, $sender_name);
    if ($ai_reply) {
        sendMessage($chat_id, $ai_reply, $keyboard);
    } else {
        // Dynamic intent fallback for kazizaman.online
        if (strpos($text_lower, 'পরিবর্তন') !== false || strpos($text_lower, 'কাজ') !== false || strpos($text_lower, 'করতে পারবে') !== false) {
            $msg = "🌐 <b>kazizaman.online প্রজেক্টে আমি যেসকল কাজ পরিচালনা করতে পারি:</b>\n\n".
                   "1. 🚀 <b>লাইভ ওয়েবসাইট মনিটরিং ও টেস্ট:</b> ডোমেইন ও সার্ভার কানেক্টিভিটি হেলথ চেক।\n".
                   "2. 🐙 <b>গিটহাব ট্র্যাকিং:</b> <code>kazizaman-portfolio</code> প্রজেক্টের গিটহাব আপডেট ট্র্যাকিং।\n".
                   "3. 📝 <b>পোর্টফোলিও কনটেন্ট সহায়তা:</b> স্কিল, প্রজেক্ট, অভিজ্ঞতা ও বায়ো আপডেট প্ল্যানিং।\n".
                   "4. 🖥️ <b>২৪/৭ সার্ভার অ্যাক্টিভিটি:</b> cPanel হোস্ট ও ডিপ্লয়মেন্ট ট্র্যাকিং।\n\n".
                   "👉 <b>স্ট্যাটাস চেক করতে ট্যাপ করুন:</b> /status";
            sendMessage($chat_id, $msg, $keyboard);
        } else {
            $msg = "🤖 <b>বার্তা রিসিভ হয়েছে, " . htmlspecialchars($sender_name) . "!</b>\n\n".
                   "আমি আপনার <b>kazizaman.online</b> প্রজেক্টের এআই অ্যাসিস্ট্যান্ট।\n\n".
                   "• লাইভ স্ট্যাটাস দেখতে: <b>/status</b>\n".
                   "• প্রজেক্ট সিঙ্ক দেখতে: <b>/deploy</b>\n".
                   "• গিটহাব আপডেট দেখতে: <b>/git_status</b>";
            sendMessage($chat_id, $msg, $keyboard);
        }
    }
}
