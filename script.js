const message = `Dear Someone
I am very grateful for the numerous financial contributions you have made in support of my education. Without your help, I may never have been able to complete my studies. Your generosity and help have been an inspiration to me.
Again, thank you for your encouragement and financial support.
 

John Paul
Sincerely,`;

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