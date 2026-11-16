<?php
$key = base64_decode("QVEuQWI4Uk42SWF6LXB6aDZjZk1XOWc1X3ROOEEzcHh2WFZvWmQtbk43NFpvNWdBeV9KM0E=");
$url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=" . $key;
$body = [
    "contents" => [
        [
            "parts" => [
                ["text" => "Hello! Respond in Bengali: 'আমি সার্ভিস ওকে বলছি'"]
            ]
        ]
    ]
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json; charset=utf-8"]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body, JSON_UNESCAPED_UNICODE));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_TIMEOUT, 8);
$res = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err = curl_error($ch);
curl_close($ch);

echo json_encode(["code" => $code, "res" => json_decode($res, true), "err" => $err], JSON_UNESCAPED_UNICODE);
