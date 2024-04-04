window.onload = function() {
    fetch('getUserInfo.php') // ユーザー情報を取得するためのPHPスクリプト
    .then(response => response.json())
    .then(userInfo => {
        // Channel Talkスクリプトをページに動的に追加
        (function() {
            var w = window;
            if (w.ChannelIO) {
                return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
            }
            var ch = function() { ch.c(arguments); };
            ch.q = [];
            ch.c = function(args) { ch.q.push(args); };
            w.ChannelIO = ch;

            function l() {
                if (w.ChannelIOInitialized) {
                    return;
                }
                w.ChannelIOInitialized = true;
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
                s.charset = 'UTF-8';
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
            }
            if (document.readyState === 'complete') { l(); }
            else if (window.attachEvent) { window.attachEvent('onload', l); }
            else { window.addEventListener('DOMContentLoaded', l, false); window.addEventListener('load', l, false); }
        })();
        
        // ユーザー情報を使ってChannel Talkウィジェットを初期化
        ChannelIO('boot', {
            "pluginKey": "748abef7-08de-4b43-a36d-6784199afd77", // Channel Talkで提供されるプラグインキー
            "memberId": userInfo.userId, // ユニークなユーザーID
            "profile": {
                "name": userInfo.name, // ユーザー名
                "email": userInfo.email // メールアドレス
            }
        });
    })
    .catch(error => console.error('Error loading the user info:', error));
};
