document.addEventListener('DOMContentLoaded', function() {
    const navbarLayout = document.getElementById('navLayout');
    const body = document.body;
    const btnHome = document.getElementById('btn-home');
    const btnOverview = document.getElementById('btn-overview');
    const btnContact = document.getElementById('btn-contact');

    const overviewLayout = document.getElementById('overviewLayout');
    const contactLayout = document.getElementById('contactLayout');

    const btnPopup1 = document.getElementById('btn-pop1');
    const btnPopup2 = document.getElementById('btn-pop2');
    const btnPopup3 = document.getElementById('btn-pop3');

    const btnClose1 = document.getElementById('close1');
    const btnClose2 = document.getElementById('close2');
    const btnClose3 = document.getElementById('close3');

    const popup1 = document.getElementById('popup1');
    const popup2 = document.getElementById('popup2');
    const popup3 = document.getElementById('popup3');

    const form1 = document.getElementById('form1');

    form1.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('exampleInput1').value = '';
        document.getElementById('exampleInput2').value = '';
        document.getElementById('exampleFormControlTextarea1').value = '';

        alert('Pesan berhasil dikirim!')
    });

    btnClose1.addEventListener('click', function() {
        popup1.classList.add('visually-hidden');
        body.style.overflow = 'scroll';
    });

    btnClose2.addEventListener('click', function() {
        popup2.classList.add('visually-hidden');
        body.style.overflow = 'scroll';
    });

    btnClose3.addEventListener('click', function() {
        popup3.classList.add('visually-hidden');
        body.style.overflow = 'scroll';
    });

    btnPopup1.addEventListener('click', function() {
        popup1.classList.remove('visually-hidden');
        body.style.overflow = 'hidden';
    });

    btnPopup2.addEventListener('click', function() {
        popup2.classList.remove('visually-hidden');
        body.style.overflow = 'hidden';
    });

    btnPopup3.addEventListener('click', function() {
        popup3.classList.remove('visually-hidden');
        body.style.overflow = 'hidden';
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY >= 30) {
            navbarLayout.style.background = 'linear-gradient(-30deg, #331B9E, #9C1BFF)';
            navbarLayout.style.backdropFilter = "blur(120px)"
            navbarLayout.style.boxShadow = '#FFFFFF 0px 0px 1px';
        } else {
            navbarLayout.style.background = '#FF000000';
            navbarLayout.style.boxShadow = '#FF000000 0px 0px 0px';
        }
    });

    btnHome.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    btnOverview.addEventListener('click', function() {
        window.scrollTo({
            top: overviewLayout.offsetTop,
            behavior: 'smooth'
        });
    });

    btnContact.addEventListener('click', function() {
        window.scrollTo({
            top: contactLayout.offsetTop,
            behavior: 'smooth'
        });
    });
});