const linkinterno = document.querySelector('[data-scrool="suave"] a[href^="#"]');

function scrolltop(event){
    event.preventDefault();

    const href = event. currentTarget.getAttribute('href');
    const ancora = document.querySelector(href);

    ancora.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

linkinterno.addEventListener('click',scrolltop);
















