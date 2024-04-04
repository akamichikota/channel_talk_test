<?php
$apiKey = 'a7981f14fe51e2b6e0d3d0368087e47a'; // Channel TalkのAPIキー

// ユーザー情報
$userInfo = array(
    'userId' => 'user1', // ユニークなユーザーID
    'name' => '赤道洸太', // ユーザー名
    'email' => 'akamichi@gmail.com' // メールアドレス
);

$url = 'https://api.channel.io/open/v3/users/upsert'; // ユーザー情報更新APIエンドポイント

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'X-Access-Token: ' . $apiKey
));
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($userInfo));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
if (!$response) {
    die('Error: "' . curl_error($ch) . '" - Code: ' . curl_errno($ch));
}

echo "Response: " . $response;
curl_close($ch);
