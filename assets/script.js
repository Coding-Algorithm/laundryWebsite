let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav ul');
let value = false;

openMenu = () => {
    // console.log(value)
    console.log(value)
    open = value;
    console.log(open)
    if(open == true){
        console.log('Yes');
        nav.style.visibility = 'visible';
        value = !value;
    }else if(open == false) {
        nav.style.visibility = 'hidden';
        value = !value;
    }
}

hamburger.addEventListener('click', openMenu);