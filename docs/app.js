// app.js (多言語対応版)

// HTMLドキュメントの読み込みが完了したときに、中の処理を実行する
window.addEventListener('DOMContentLoaded', () => {

    // 1. ユーザーのブラウザの言語設定を取得 (例: 'ja-JP', 'en-US', 'zh-CN'など)
    //    小文字に統一して判定しやすくします
    const userLanguage = (navigator.language || navigator.userLanguage).toLowerCase();

    // (参考) 端末情報
    const userAgent = navigator.userAgent;

    // (参考) 開発者ツールで確認できるように、取得した情報をコンソールに出力
    console.log('ブラウザ言語:', userLanguage);
    console.log('端末情報:', userAgent);

    // 3. HTML側でメッセージを表示させたい場所（要素）を取得
    const messageElement = document.getElementById('warning-message');

    // 4. 言語情報に基づいて表示するメッセージを決定
    let message = '';

    if (userLanguage.startsWith('ja')) {
        // 日本語 (ja, ja-JP など)
        message = '不審なQRコードを読み込むのはやめましょう';

    } else if (userLanguage.startsWith('zh')) {
        // 中国語 (zh, zh-CN, zh-TW など)
        message = '请勿扫描可疑的QR码'; // 簡体字

    } else if (userLanguage.startsWith('ko')) {
        // 韓国語 (ko, ko-KR など)
        message = '의심스러운 QR 코드를 스캔하지 마십시오';

    } else if (userLanguage.startsWith('es')) {
        // スペイン語 (es, es-ES, es-MX など)
        message = 'No escanee códigos QR sospechosos';

    } else if (userLanguage.startsWith('fr')) {
        // フランス語 (fr, fr-FR, fr-CA など)
        message = 'Ne scannez pas de codes QR suspects';

    } else {
        // 上記以外（デフォルト: 英語）
        // (en, en-US, en-GB などもここに含まれます)
        message = 'Do not scan suspicious QR codes.';
    }

    // 5. 取得したHTML要素（h1タグ）の中に、決定したメッセージをテキストとして挿入
    messageElement.textContent = message;
});