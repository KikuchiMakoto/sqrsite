// app.js (多言語対応＋画像＋煽りメッセージ版)

window.addEventListener('DOMContentLoaded', () => {
    const userLanguage = (navigator.language || navigator.userLanguage).toLowerCase();

    console.log('ブラウザ言語:', userLanguage);
    console.log('端末情報:', navigator.userAgent); // ユーザーエージェントも表示

    const mainMessageElement = document.getElementById('main-warning-message');
    const subMessageElement = document.getElementById('sub-warning-message');

    let mainMessage = '';
    let subMessage = '';

    if (userLanguage.startsWith('ja')) {
        // 日本語
        mainMessage = '不審なQRコードを読み込むのはやめましょう';
        subMessage = 'これが危険なサイトだったとしたら、、、と考えてみてください。';

    } else if (userLanguage.startsWith('zh')) {
        // 中国語 (簡体字)
        mainMessage = '请勿扫描可疑的QR码';
        subMessage = '请思考一下，如果这是一个危险的网站，会发生什么？';

    } else if (userLanguage.startsWith('ko')) {
        // 韓国語
        mainMessage = '의심스러운 QR 코드를 스캔하지 마십시오';
        subMessage = '만약 이 사이트가 위험한 사이트였다면 어떻게 되었을지 생각해 보세요.';

    } else if (userLanguage.startsWith('es')) {
        // スペイン語
        mainMessage = 'No escanee códigos QR sospechosos';
        subMessage = 'Piense qué pasaría si este fuera un sitio peligroso.';

    } else if (userLanguage.startsWith('fr')) {
        // フランス語
        mainMessage = 'Ne scannez pas de codes QR suspects';
        subMessage = 'Imaginez ce qui se passerait si c\'était un site dangereux.';

    } else {
        // デフォルト: 英語
        mainMessage = 'Do not scan suspicious QR codes.';
        subMessage = 'Consider what would happen if this were a dangerous site.';
    }

    mainMessageElement.textContent = mainMessage;
    subMessageElement.textContent = subMessage;
});
