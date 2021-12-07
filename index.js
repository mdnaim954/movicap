var btn=document.querySelector('#menubtn')
var contact=document.querySelector('#contactbars')
var sosial=document.querySelector('#sosialbars')
var btnClick=document.querySelector('#clickbutton')

var btnClickOn=document.querySelector('#menubtnj')

btn.addEventListener('click', function(){
    contact.style.display='block'
    sosial.style.display='block'
    btnClick.style.display='block'
    btn.style.display='none'
});


btnClickOn.addEventListener('click', function(){
    contact.style.display='none'
    sosial.style.display='none'
    btnClick.style.display='none'
    btn.style.display='block'
    location.reload()
});

// REPONSIVE MENU BARS CODDING STARTING THIS LINE
var nButton=document.querySelector('#menubarsbutton')
var mButton=document.querySelector('#menubarsbutton1')
var toggleMenu=document.querySelector('#togglemenu')

nButton.addEventListener('click' , function(){
    nButton.style.display='none'
    const newLocal = 'inline-block'
    mButton.style.display=newLocal
    toggleMenu.style.height='100%'
    toggleMenu.style.transition='.5s'
});

mButton.addEventListener('click', function(){
    nButton.style.display='inline-block'
    mButton.style.display='none'
    location.reload()
    location.replace()
});

var mWindow=document.querySelector('#moreproducte').addEventListener('click', function(){
    document.querySelector('#moreproducte');
})

var scolly=document.querySelector('#scrolly');
var hedar=document.querySelector('#menu');


window.onscroll = function (){
    if(window.pageYOffset >= hedar.offsetTop){
        scolly.classList.add('sticky')
    }else{
        scolly.classList.remove('sticky')
    }
}


