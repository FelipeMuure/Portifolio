console.log(windows.location.pathname);

function Carregar() {
    var data = new Date()
    var dia = data.getDay()
    var segunda = document.getElementById('segunda')
    var terca = document.getElementById('terca')
    var quarta = document.getElementById('quarta')
    var quinta = document.getElementById('quinta')
    var sexta = document.getElementById('sexta')
    var sabado = document.getElementById('sabado')
    var link = window.location.pathname;
    var bar = document.getElementById('bar')
    
    /*
        Movimentação da barra abaixo do menu
        Referido ao pathname disponivel.
    */

    if (link == "/Portifolio/Trabalhos/Gym/Segunda.html") {
        bar.style.left = "1.8%";
    } else if (link == "/Portifolio/Trabalhos/Gym/Terca.html") {    
        bar.style.left = "18%";
    } else if (link == "/Portifolio/Trabalhos/Gym/Quarta.html") {
        bar.style.left = "34.4%";
    } else if (link == "/Portifolio/Trabalhos/Gym/Quinta.html") {
        bar.style.left = "50.6%";
    } else if (link == "/Portifolio/Trabalhos/Gym/Sexta.html") {
        bar.style.left = "66.9%";
    } else if (link == "/Portifolio/Trabalhos/Gym/Sabado.html") {
        bar.style.left = "83.2%";
    } else {
    }

    /* 
        Verifica o dia da semana e o destaca de #A2C640(verde)
    */

    if (dia == 1) {
        segunda.style.fontSize = "15pt";
        segunda.style.fontWeight = "bold";
        segunda.style.color = "#A2C640";
    } else if (dia == 2) {
        terca.style.fontSize = "15pt";
        terca.style.fontWeight = "bold";
        terca.style.color = "#A2C640";
    } else if (dia == 3) {
        quarta.style.fontSize = "15pt";
        quarta.style.fontWeight = "bold";
        quarta.style.color = "#A2C640";
        
    } else if (dia == 4) {
        quinta.style.fontSize = "15pt";
        quinta.style.fontWeight = "bold";
        quinta.style.color = "#A2C640";
    } else if (dia == 5) {
        sexta.style.fontSize = "15pt";
        sexta.style.fontWeight = "bold";
        sexta.style.color = "#A2C640";

    } else if (dia == 6) {
        sabado.style.fontSize = "15pt";
        sabado.style.fontWeight = "bold";
        sabado.style.color = "#A2C640";       
    } else if (dia == 0) {
    }
}

/* Esconde os exercicios já feitos com click*/

function Hide0() {
    var click = document.getElementById('Zoom0')
    if(click.style.display == "block") {
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}

function Hide1() {
    var click = document.getElementById('Zoom1')
    if(click.style.display == "block") {
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}

function Hide2() {
    var click = document.getElementById('Zoom2')
    if(click.style.display == "block") {
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}

function Hide3() {
    var click = document.getElementById('Zoom3')
    if(click.style.display == "block") {
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}

function Hide4() {
    var click = document.getElementById('Zoom4')
    if(click.style.display == "block") {
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}

function Hide5() {
    var click = document.getElementById('Zoom5')
    if(click.style.display == "block") {
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}

function Hide6() {
    var click = document.getElementById('Zoom6')
    if(click.style.display == "block") {
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}

function Hide7() {
    var click = document.getElementById('Zoom7')
    if(click.style.display == "block") {
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}

function Hide8() {
    var click = document.getElementById('Zoom8')
    if(click.style.display == "block") {
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}

function Hide9() {
    var click = document.getElementById('Zoom9')
    if(click.style.display == "block") {
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}

function Hide10() {
    var click = document.getElementById('Zoom10')
    if(click.style.display == "block") {
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}

function Hide11() {
    var click = document.getElementById('Zoom11')
    if(click.style.display == "block") {
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}

/*
    Click para ampliar e voltar ao normal os exercicios do 0 ao 20.
*/

function Zoom0() {
    var click = document.getElementById('Zoom0')
    var img = document.getElementById('imgZoom0')
    var aside = document.getElementById('asideZoom0')
    var esteira = document.getElementById('esteira')
    var hide = document.getElementById('hide0')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
        esteira.innerHTML = 'Bike ou Esteira 20 min';
        
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
        esteira.innerHTML = "<ul>Andar ou correr na Esteira/Bicicleta serve:<br><br></ul><li>Tonifica os músculos</li><li>Ajuda a diminuir a pressão arterial</li><li>Melhora a circulação sanguínea</li><li>Amplia a capacidade pulmonar</li>";
    }

}


function Zoom1() {
    var click = document.getElementById('Zoom1')
    var img = document.getElementById('imgZoom1')
    var aside = document.getElementById('asideZoom1')
    var hide = document.getElementById('hide1')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom2() {
    var click = document.getElementById('Zoom2')
    var img = document.getElementById('imgZoom2')
    var aside = document.getElementById('asideZoom2')
    var hide = document.getElementById('hide2')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom3() {
    var click = document.getElementById('Zoom3')
    var img = document.getElementById('imgZoom3')
    var aside = document.getElementById('asideZoom3')
    var hide = document.getElementById('hide3')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom4() {
    var click = document.getElementById('Zoom4')
    var img = document.getElementById('imgZoom4')
    var aside = document.getElementById('asideZoom4')
    var hide = document.getElementById('hide4')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom5() {
    var click = document.getElementById('Zoom5')
    var img = document.getElementById('imgZoom5')
    var aside = document.getElementById('asideZoom5')
    var hide = document.getElementById('hide5')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom6() {
    var click = document.getElementById('Zoom6')
    var img = document.getElementById('imgZoom6')
    var aside = document.getElementById('asideZoom6')
    var hide = document.getElementById('hide6')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom7() {
    var click = document.getElementById('Zoom7')
    var img = document.getElementById('imgZoom7')
    var aside = document.getElementById('asideZoom7')
    var hide = document.getElementById('hide7')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom8() {
    var click = document.getElementById('Zoom8')
    var img = document.getElementById('imgZoom8')
    var aside = document.getElementById('asideZoom8')
    var hide = document.getElementById('hide8')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom9() {
    var click = document.getElementById('Zoom9')
    var img = document.getElementById('imgZoom9')
    var aside = document.getElementById('asideZoom9')
    var hide = document.getElementById('hide9')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom10() {
    var click = document.getElementById('Zoom10')
    var img = document.getElementById('imgZoom10')
    var aside = document.getElementById('asideZoom10')
    var hide = document.getElementById('hide10')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom11() {
    var click = document.getElementById('Zoom11')
    var img = document.getElementById('imgZoom11')
    var aside = document.getElementById('asideZoom11')
    var hide = document.getElementById('hide11')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom12() {
    var click = document.getElementById('Zoom12')
    var img = document.getElementById('imgZoom12')
    var aside = document.getElementById('asideZoom12')
    var hide = document.getElementById('hide12')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom13() {
    var click = document.getElementById('Zoom13')
    var img = document.getElementById('imgZoom13')
    var aside = document.getElementById('asideZoom13')
    var hide = document.getElementById('hide13')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom14() {
    var click = document.getElementById('Zoom14')
    var img = document.getElementById('imgZoom14')
    var aside = document.getElementById('asideZoom14')
    var hide = document.getElementById('hide14')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom15() {
    var click = document.getElementById('Zoom15')
    var img = document.getElementById('imgZoom15')
    var aside = document.getElementById('asideZoom15')
    var hide = document.getElementById('hide15')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom16() {
    var click = document.getElementById('Zoom16')
    var img = document.getElementById('imgZoom16')
    var aside = document.getElementById('asideZoom16')
    var hide = document.getElementById('hide16')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom17() {
    var click = document.getElementById('Zoom17')
    var img = document.getElementById('imgZoom17')
    var aside = document.getElementById('asideZoom17')
    var hide = document.getElementById('hide17')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom18() {
    var click = document.getElementById('Zoom18')
    var img = document.getElementById('imgZoom18')
    var aside = document.getElementById('asideZoom18')
    var hide = document.getElementById('hide18')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom19() {
    var click = document.getElementById('Zoom19')
    var img = document.getElementById('imgZoom19')
    var aside = document.getElementById('asideZoom19')
    var hide = document.getElementById('hide19')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}

function Zoom20() {
    var click = document.getElementById('Zoom20')
    var img = document.getElementById('imgZoom20')
    var aside = document.getElementById('asideZoom20')
    var hide = document.getElementById('hide20')

    if(click.style.height === "635px") {
        click.style.height = "130px"
        click.setAttribute('class', 'Zoom2')
        img.setAttribute('class', 'imgZoom2')
        aside.setAttribute('class', 'asideZoom2')
        hide.style.marginLeft = '-265px';
    } else {
        click.style.height = "635px"
        click.setAttribute('class', 'Zoom')
        img.setAttribute('class', 'imgZoom')
        aside.setAttribute('class', 'asideZoom')
        hide.style.marginLeft = '0px';
    }

}


