<?php
// 例として静的なユーザー情報を返すコード（実際にはデータベースから取得する）
$userInfo = array(
    'userId' => 'user1',
    'name' => '赤道洸太',
    'email' => 'akamichi@gmail.com'
);

header('Content-Type: application/json');
echo json_encode($userInfo);
