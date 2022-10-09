//navbar
var open = document.querySelector('.open');
var close = document.querySelector('.close');
var nav_li = document.querySelector('.nav-li');

open.addEventListener('click', () => {
    open.style.display = 'none';
    close.style.display = 'block';
    nav_li.style.transition = 'all ease-in-out .5s';
    nav_li.style.marginTop = '0px';
});
close.addEventListener('click', () => {
    close.style.display = 'none';
    open.style.display = 'block';
    nav_li.style.transition = 'all ease-in-out .5s';
    nav_li.style.marginTop = '-400px';
})

//icon hover
// var icons = document.querySelector('.icons');
// var icon = document.getElementsByClassName('icon');

// for (var i = 0; i < 8; i++) {
//     console.log(icon[i]);

//     icons.addEventListener('click', () => {
//         icon[i].style.backgroundColor = 'gray';
//     });
// }

$(document).ready(function () {
    $(".icons").mouseenter(function () {
        $(".icon").css("background-color", "gray");
    });
});