var typed = new Typed('.auto-type', {
    strings: ['Software Developer', 'Web Designer','Full Stack Web Developer'],
    typeSpeed: 120,
    backSpeed: 120,
    looped: true
    });


    var item1 = document.getElementById("item1");
    var item2 = document.getElementById("item2");
    var item3 = document.getElementById("item3");
    function change1(){
         item1.style= "display:flex";
         item2.style= "display:none";
         item3.style= "display:none";
    }
    function change2(){
        item2.style= "display:flex";
         item1.style= "display:none";
         item3.style= "display:none";
    }
    function change3(){
        item3.style= "display:flex";
         item2.style= "display:none";
         item1.style= "display:none";
    }