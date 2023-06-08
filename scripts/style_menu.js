//var input = document.querySelector('#side-menu')
//input.addEventListener('click', f)
//function f() {
//    document.body.classList.toggle('nav_shadow')
//}

var elem = document.querySelector('#nav_shadow');
var input = document.querySelector('#side-menu')
input.addEventListener('click', function() {
    elem.classList.toggle("nav_shadow");
})


function imagefun() {
    var Image_Id = document.getElementById('news1');
    if (Image_Id.src.match("img/Group_40065.svg")) {
        Image_Id.src = "img/Group_40080.svg";
    }
    else {
        Image_Id.src = "img/Group_40065.svg";
    }

    var Image_Id1 = document.getElementById('news2');
    if(Image_Id1.src.match("img/Group_40063.svg")) {
        Image_Id1.src = "img/Group_40078.svg";
    }
    else {
        Image_Id1.src = "img/Group_40063.svg"
    }

    var Image_Id2 = document.getElementById('lightiing');
    if(Image_Id2.src.match("img/lighting.svg")) {
        Image_Id2.src = "img/moon.svg";
    }
    else {
        Image_Id2.src = "img/lighting.svg"
    }
 }