document.addEventListener('DOMContentLoaded', function() {
    const text = '如果从长远考虑，我们是自己命运的创造者，那么，从短期着眼，我们就是我们所创造的观念的俘虏。我们只有及时认识到这种危险，才能指望去避免它。';
    const textContainer = document.getElementById('text-container');

    function revealNextCharacter(text, index) {
        if (index >= text.length) return;

        let charNode = document.createTextNode(text.charAt(index));
        textContainer.appendChild(charNode);

        setTimeout(() => revealNextCharacter(text, ++index), 100); // 每个字符显示间隔为100毫秒
    }

    revealNextCharacter(text, 0);
});
