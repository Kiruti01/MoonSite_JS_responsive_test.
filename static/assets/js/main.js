let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat6')
let mountains7 = document.getElementById('mountains7');
let mazing = document.querySelector('.mazing');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 1.5 + 'px';
    mountains4.style.top = value * 1.0 + 'px';
    river.style.top = value  + 'px';
    boat6.style.top = value  + 'px';
    boat6.style.left = value * 3 + 'px';
    mazing.style.bottom = value  + 'px';
    mazing.style.fontSize = value  + 'px';
    if(scrollY >= 80) {
        mazing.style.fontSize = 300  + 'px';
        mazing.style.position = 'relative';
        if(scrollY >= 120){
            document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';
        }
    }
}


