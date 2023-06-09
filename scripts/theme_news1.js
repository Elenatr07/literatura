
function imagefun() {
    var logo = document.getElementById('logo');
    if (logo.src.match("img/logo_light.svg")) {
        logo.src = "img/logo_dark.svg";
    }
    else {
        logo.src = "img/logo_light.svg"
    }

    var logo = document.getElementById('footer_logo');
    if (logo.src.match("img/logo_dark.svg")) {
        logo.src = "img/logo_light.svg";
    }
    else {
        logo.src = "img/logo_dark.svg"
    }
    var Image_Id = document.getElementById('news1_1');
    if (Image_Id.src.match("img/Group_40073.svg")) {
        Image_Id.src = "img/Group_40072.svg";
    }
    else {
        Image_Id.src = "img/Group_40073.svg";
    }

     

    var Image_Id2 = document.getElementById('lightiing');
    if(Image_Id2.src.match("img/lighting.svg")) {
        Image_Id2.src = "img/moon.svg";
    }
    else {
        Image_Id2.src = "img/lighting.svg"
    }

  
    
 }

