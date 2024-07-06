$(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('header').addClass('scrolled');
            } else {
                $('header').removeClass('scrolled');
            }
        });

        $('#email-form').submit(function(e) {
            e.preventDefault();
            alert('This is a demo. Form submission is prevented.');
        });
        
        document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const isOpening = !button.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.querySelector('.faq-question').classList.remove('active');
                item.querySelector('.faq-answer').style.display = 'none';
            }
        });
        
        button.classList.toggle('active');
        answer.style.display = isOpening ? 'block' : 'none';
    });
});