// ページが完全に読み込まれた後に実行する処理を書きます
document.addEventListener('DOMContentLoaded', () => {
    // アニメーションの対象となる要素を探します
    const fadeTarget = document.querySelector('.fade-target');
    
    // もし要素が見つかったら、少しだけ時間を置いてからアニメーションを開始します
    if (fadeTarget) {
        // 100ミリ秒（0.1秒）後に 'show' というクラスを追加して、ふわっと表示させます
        setTimeout(() => {
            fadeTarget.classList.add('show');
        }, 100);
    }
});
