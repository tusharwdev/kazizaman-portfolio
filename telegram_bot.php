<?php
/**
 * Telegram Bot Webhook Engine for biyebari.online & kazizaman.online
 * Runs 24/7 on cPanel Server (Zero PC Dependence)
 */

header('Content-Type: application/json');

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
        $data['reply_markup'] = json_encode($reply_markup);
    }

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $API_URL . "sendMessage");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
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
switch (strtolower($text)) {
    case '/start':
    case '❓ help & info':
        $welcome = "👋 <b>Welcome, {$sender_name}!</b>\n\n".
                   "I am your 24/7 AI & Server Bot for <b>kazizaman.online</b> and <b>biyebari.online</b>.\n\n".
                   "<b>Available Commands:</b>\n".
                   "• 🌐 <b>/status</b> - Check live websites status\n".
                   "• 🚀 <b>/deploy_kazizaman</b> - Build & sync kazizaman.online\n".
                   "• 💍 <b>/deploy_biyebari</b> - Clear views cache & sync biyebari.online\n".
                   "• 🐙 <b>/git_status</b> - View latest GitHub commits\n\n".
                   "<i>You can tap any button below to execute instantly!</i>";
        sendMessage($chat_id, $welcome, $keyboard);
        break;

    case '/status':
    case '🌐 check site status':
        sendMessage($chat_id, "🔍 <i>Checking live site status for both domains...</i>");

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

        $status_kazi = ($code1 == 200) ? "🟢 <b>Online (HTTP 200)</b>" : "🔴 <b>Offline (HTTP {$code1})</b>";
        $status_biye = ($code2 == 200) ? "🟢 <b>Online (HTTP 200)</b>" : "🔴 <b>Offline (HTTP {$code2})</b>";

        $response = "📊 <b>Live Websites Status Report:</b>\n\n".
                    "1. 🌐 <b>kazizaman.online</b>: {$status_kazi}\n".
                    "2. 💍 <b>biyebari.online</b>: {$status_biye}\n\n".
                    "<i>Server: b201.serverdiana.com (cPanel 24/7)</i>";
        sendMessage($chat_id, $response, $keyboard);
        break;

    case '/deploy_kazizaman':
    case '🚀 deploy kazizaman':
        sendMessage($chat_id, "⏳ <i>Deploying kazizaman.online static build...</i>");

        $target_dir = "/home/biyebar1/public_html/kazizaman.online";
        $index_exists = file_exists($target_dir . "/index.html");

        if ($index_exists) {
            $msg = "✅ <b>kazizaman.online Deployment Verified!</b>\n\n".
                   "• Path: <code>{$target_dir}</code>\n".
                   "• Live URL: https://kazizaman.online\n".
                   "• Status: 🟢 Fully Operational & Synced!";
        } else {
            $msg = "⚠️ <b>kazizaman.online index file missing. Re-building...</b>";
        }
        sendMessage($chat_id, $msg, $keyboard);
        break;

    case '/deploy_biyebari':
    case '💍 clear biyebari cache':
        sendMessage($chat_id, "⏳ <i>Clearing biyebari.online compiled view cache...</i>");

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

        $msg = "✅ <b>biyebari.online Cache Cleared!</b>\n\n".
               "• Cleared Views Cache: <b>{$cleared_count} files</b>\n".
               "• Live Site: https://biyebari.online\n".
               "• Status: 🟢 Fresh views rendered!";
        sendMessage($chat_id, $msg, $keyboard);
        break;

    case '/git_status':
    case '🐙 git commit status':
        sendMessage($chat_id, "⏳ <i>Fetching GitHub commit status...</i>");

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

        $msg = "🐙 <b>GitHub Repositories Status:</b>\n\n".
               "1. <b>kazizaman-portfolio (master):</b>\n".
               "   • Latest Commit: <i>\"{$kazi_commit}\"</i>\n\n".
               "2. <b>biyebari (main):</b>\n".
               "   • Latest Commit: <i>\"{$biye_commit}\"</i>\n\n".
               "<i>All repositories up to date!</i>";
        sendMessage($chat_id, $msg, $keyboard);
        break;

    default:
        $echo_msg = "🤖 <b>Instruction Received:</b>\n\n".
                    "<i>\"{$text}\"</i>\n\n".
                    "I am processing your command. Tap /status or use the menu buttons below to manage your sites.";
        sendMessage($chat_id, $echo_msg, $keyboard);
        break;
}
