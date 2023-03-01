const questions = document.querySelectorAll('.faqs');
questions.forEach(function(question) {
    const btn = question.querySelector('.arrow');
    btn.addEventListener('click', function() {
        questions.forEach(function(item) {
            if( item!== question)  {
                item.classList.remove('show');
            }
          
        });
        question.classList.toggle('show');
    });
});