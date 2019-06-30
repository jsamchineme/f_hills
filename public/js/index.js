const navbarBtn = document.querySelector('.navbar__btn');
const navBarLinks = document.querySelector('.navbar__links');


navbarBtn.addEventListener('click', ()=> {
    let value = navBarLinks.classList.contains('navbar__collapse');
    
    if (value) {
        navBarLinks.classList.remove('navbar__collapse');
        // navbarBtn.classList.remove('change');
        
    }else{
        navBarLinks.classList.add('navbar__collapse');
        // navbarBtn.classList.add('change');
    }
})

const handleType = () => {
    // console.log('new input');
    const fname = document.querySelector('.contact__fname').value;
    const sname = document.querySelector('.contact__sname').value;
    const phone = document.querySelector('.contact__number').value;
    const text = document.querySelector('.contact__textarea').value;

    if (fname === '' || sname === '' || phone === '' || text === '') {
        button.disabled = true;
        button.style.pointerEvents = 'none';
        button.style.backgroundColor = '#656565';
    } else {
        button.disabled = false;
        button.style.pointerEvents = 'auto';
        button.style.backgroundColor = '#000000';
    }
}

const fname = document.querySelector('.contact__fname');
const sname = document.querySelector('.contact__sname');
const phone = document.querySelector('.contact__number');
const text = document.querySelector('.contact__textarea');
const button = document.querySelector('.contact__btn');

fname.addEventListener('input', handleType);
sname.addEventListener('input', handleType);
phone.addEventListener('input', handleType);
text.addEventListener('input', handleType);
button.addEventListener('input', handleType);

