const message = `Hi I Hope you okay `;

function showLetter() {
    document.getElementById('introText').style.display = 0;
    document.querySelector('.btn').style.display = 'none';

    setTimeout(() => {
        const letterBox = document.getElementById('letterBox');
        const typedText = document.getElementById('typedText');
        letterBox.style.display = 'block';
        let i = 0;

        function typeWriter() {
            if (i < message.length) {
                typedText.innerHTML += message.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        }

        typeWriter();
    }, 600)
}