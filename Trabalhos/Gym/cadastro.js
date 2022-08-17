/*Barra que esconde os exercicios já feitos com click*/
function EsteiraHide() {
    var click = document.getElementById('EsteiraHide')
    if(click.style.display == "block") { /*Função baseada em ocultar o display*/
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}

/*Click para ampliar e voltar ao normal*/
function EsteiraZoom() { 
    var tamanho = document.getElementById('EsteiraHide')
    var img = document.getElementById('EsteiraImg')
    var aside = document.getElementById('EsteiraAside')
    var ConteudoEsteira = document.getElementById('EsteiraConteudo')

    if(tamanho.style.height === "600px") { /* Função baseada em tamanho da 'li'*/
        tamanho.style.height = "130px"
        tamanho.setAttribute('class', 'ZoomOff')
        img.setAttribute('class', 'imgZoomOff')
        aside.setAttribute('class', 'asideZoomOff')
        img.style.marginLeft = '-265px';
        tamanho.style.transition = '.6s';
        img.style.transition = '.6s';
        aside.style.transition = '.6s';
        ConteudoEsteira.innerHTML = 'Bike ou Esteira 20 min';
        
    } else {
        tamanho.style.height = "600px"
        tamanho.setAttribute('class', 'ZoomOn')
        img.setAttribute('class', 'imgZoomOn')
        aside.setAttribute('class', 'asideZoomOn')
        img.style.marginLeft = '0px';
        ConteudoEsteira.innerHTML = "<ul><p>Benefícios da Esteira:</p><br><li>Tonifica os músculos</li><li>Ajuda a diminuir a pressão arterial</li><li>Melhora a circulação sanguínea</li><li>Amplia a capacidade pulmonar</li></ul>";
    }

}

/*Barra que esconde os exercicios já feitos com click*/
function AgachamentoLivreHide() {
    var click = document.getElementById('AgachamentoLivreHide')
    if(click.style.display == "block") { /*Função baseada em ocultar o display*/
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}

/*Click para ampliar e voltar ao normal*/
function AgachamentoLivreZoom() { 
    var tamanho = document.getElementById('AgachamentoLivreHide')
    var img = document.getElementById('AgachamentoLivreImg')
    var aside = document.getElementById('AgachamentoLivreAside')
    var Conteudo = document.getElementById('AgachamentoLivreConteudo')

    if(tamanho.style.height === "600px") { /* Função baseada em tamanho da 'li'*/
        tamanho.style.height = "130px"
        tamanho.setAttribute('class', 'ZoomOff')
        img.setAttribute('class', 'imgZoomOff')
        aside.setAttribute('class', 'asideZoomOff')
        img.style.marginLeft = '-265px';
        tamanho.style.transition = '.6s';
        img.style.transition = '.6s';
        aside.style.transition = '.6s';
        Conteudo.innerHTML = '3 séries	com 8 à 12 repetições';
        
    } else {
        tamanho.style.height = "600px"
        tamanho.setAttribute('class', 'ZoomOn')
        img.setAttribute('class', 'imgZoomOn')
        aside.setAttribute('class', 'asideZoomOn')
        img.style.marginLeft = '0px';
        Conteudo.innerHTML = 
        "<p>Benefícios do agachamento:</p><br> <ul>                         <li>Fortalece os membros inferiores, das costas e do abdômen</li>      <li>Favorece a hipertrofia muscular das coxas e glúteos</li>          <li>Acelera o metabolismo e favorece a perda de peso</li>        <li>Aperfeiçoa os movimentos e articulações, evitando lesões e fortalecendo os joelhos</li></ul>";
    }

}

/*Barra que esconde os exercicios já feitos com click*/
function ElevacaoPelvicaHide() {
    var click = document.getElementById('ElevacaoPelvicaHide')
    if(click.style.display == "block") { /*Função baseada em ocultar o display*/
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}


/*Click para ampliar e voltar ao normal*/
function ElevacaoPelvicaZoom() { 
    var tamanho = document.getElementById('ElevacaoPelvicaHide')
    var img = document.getElementById('ElevacaoPelvicaImg')
    var aside = document.getElementById('ElevacaoPelvicaAside')
    var Conteudo = document.getElementById('ElevacaoPelvicaConteudo')

    if(tamanho.style.height === "600px") { /* Função baseada em tamanho da 'li'*/
        tamanho.style.height = "130px"
        tamanho.setAttribute('class', 'ZoomOff')
        img.setAttribute('class', 'imgZoomOff')
        aside.setAttribute('class', 'asideZoomOff')
        img.style.marginLeft = '-265px';
        tamanho.style.transition = '.6s';
        img.style.transition = '.6s';
        aside.style.transition = '.6s';
        Conteudo.innerHTML = '3 séries	com 8 à 12 repetições';
        
    } else {
        tamanho.style.height = "600px"
        tamanho.setAttribute('class', 'ZoomOn')
        img.setAttribute('class', 'imgZoomOn')
        aside.setAttribute('class', 'asideZoomOn')
        img.style.marginLeft = '0px';
        Conteudo.innerHTML = "/*Endereço Padrão*/";
    }

}



/*Barra que esconde os exercicios já feitos com click*/
function SupinoComHalteresHide() {
    var click = document.getElementById('SupinoComHalteresHide')
    if(click.style.display == "block") { /*Função baseada em ocultar o display*/
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}


/*Click para ampliar e voltar ao normal*/
function SupinoComHalteresZoom() { 
    var tamanho = document.getElementById('SupinoComHalteresHide')
    var img = document.getElementById('SupinoComHalteresImg')
    var aside = document.getElementById('SupinoComHalteresAside')
    var Conteudo = document.getElementById('SupinoComHalteresConteudo')

    if(tamanho.style.height === "600px") { /* Função baseada em tamanho da 'li'*/
        tamanho.style.height = "130px"
        tamanho.setAttribute('class', 'ZoomOff')
        img.setAttribute('class', 'imgZoomOff')
        aside.setAttribute('class', 'asideZoomOff')
        img.style.marginLeft = '-265px';
        tamanho.style.transition = '.6s';
        img.style.transition = '.6s';
        aside.style.transition = '.6s';
        Conteudo.innerHTML = '/*Endereço Padrão*/';
        
    } else {
        tamanho.style.height = "600px"
        tamanho.setAttribute('class', 'ZoomOn')
        img.setAttribute('class', 'imgZoomOn')
        aside.setAttribute('class', 'asideZoomOn')
        img.style.marginLeft = '0px';
        Conteudo.innerHTML = "/*Endereço Padrão*/";
    }

}

/*Barra que esconde os exercicios já feitos com click*/
function SupinoInclinadoComHalteresHide() {
    var click = document.getElementById('SupinoInclinadoComHalteresHide')
    if(click.style.display == "block") { /*Função baseada em ocultar o display*/
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}


/*Click para ampliar e voltar ao normal*/
function SupinoInclinadoComHalteresZoom() { 
    var tamanho = document.getElementById('SupinoInclinadoComHalteresHide')
    var img = document.getElementById('SupinoInclinadoComHalteresImg')
    var aside = document.getElementById('SupinoInclinadoComHalteresAside')
    var Conteudo = document.getElementById('SupinoInclinadoComHalteresConteudo')

    if(tamanho.style.height === "600px") { /* Função baseada em tamanho da 'li'*/
        tamanho.style.height = "130px"
        tamanho.setAttribute('class', 'ZoomOff')
        img.setAttribute('class', 'imgZoomOff')
        aside.setAttribute('class', 'asideZoomOff')
        img.style.marginLeft = '-265px';
        tamanho.style.transition = '.6s';
        img.style.transition = '.6s';
        aside.style.transition = '.6s';
        Conteudo.innerHTML = '/*Endereço Padrão*/';
        
    } else {
        tamanho.style.height = "600px"
        tamanho.setAttribute('class', 'ZoomOn')
        img.setAttribute('class', 'imgZoomOn')
        aside.setAttribute('class', 'asideZoomOn')
        img.style.marginLeft = '0px';
        Conteudo.innerHTML = "/*Endereço Padrão*/";
    }

}

/*Barra que esconde os exercicios já feitos com click*/
function SupinoDeclinadoComHalteresHide() {
    var click = document.getElementById('SupinoDeclinadoComHalteresHide')
    if(click.style.display == "block") { /*Função baseada em ocultar o display*/
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}


/*Click para ampliar e voltar ao normal*/
function SupinoDeclinadoComHalteresZoom() { 
    var tamanho = document.getElementById('SupinoDeclinadoComHalteresHide')
    var img = document.getElementById('SupinoDeclinadoComHalteresImg')
    var aside = document.getElementById('SupinoDeclinadoComHalteresAside')
    var Conteudo = document.getElementById('SupinoDeclinadoComHalteresConteudo')

    if(tamanho.style.height === "600px") { /* Função baseada em tamanho da 'li'*/
        tamanho.style.height = "130px"
        tamanho.setAttribute('class', 'ZoomOff')
        img.setAttribute('class', 'imgZoomOff')
        aside.setAttribute('class', 'asideZoomOff')
        img.style.marginLeft = '-265px';
        tamanho.style.transition = '.6s';
        img.style.transition = '.6s';
        aside.style.transition = '.6s';
        Conteudo.innerHTML = '/*Endereço Padrão*/';
        
    } else {
        tamanho.style.height = "600px"
        tamanho.setAttribute('class', 'ZoomOn')
        img.setAttribute('class', 'imgZoomOn')
        aside.setAttribute('class', 'asideZoomOn')
        img.style.marginLeft = '0px';
        Conteudo.innerHTML = "/*Endereço Padrão*/";
    }

}


/*Barra que esconde os exercicios já feitos com click*/
function SupinoComHalteresComPegadaInversaHide() {
    var click = document.getElementById('SupinoComHalteresComPegadaInversaHide')
    if(click.style.display == "block") { /*Função baseada em ocultar o display*/
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}


/*Click para ampliar e voltar ao normal*/
function SupinoComHalteresComPegadaInversaZoom() { 
    var tamanho = document.getElementById('SupinoComHalteresComPegadaInversaHide')
    var img = document.getElementById('SupinoComHalteresComPegadaInversaImg')
    var aside = document.getElementById('SupinoComHalteresComPegadaInversaAside')
    var Conteudo = document.getElementById('SupinoComHalteresComPegadaInversaConteudo')

    if(tamanho.style.height === "600px") { /* Função baseada em tamanho da 'li'*/
        tamanho.style.height = "130px"
        tamanho.setAttribute('class', 'ZoomOff')
        img.setAttribute('class', 'imgZoomOff')
        aside.setAttribute('class', 'asideZoomOff')
        img.style.marginLeft = '-265px';
        tamanho.style.transition = '.6s';
        img.style.transition = '.6s';
        aside.style.transition = '.6s';
        Conteudo.innerHTML = '/*Endereço Padrão*/';
        
    } else {
        tamanho.style.height = "600px"
        tamanho.setAttribute('class', 'ZoomOn')
        img.setAttribute('class', 'imgZoomOn')
        aside.setAttribute('class', 'asideZoomOn')
        img.style.marginLeft = '0px';
        Conteudo.innerHTML = "/*Endereço Padrão*/";
    }

}

/*Barra que esconde os exercicios já feitos com click*/
function PulloverHide() {
    var click = document.getElementById('PulloverHide')
    if(click.style.display == "block") { /*Função baseada em ocultar o display*/
        click.style.display = "none";
        click.style.transition = '1s';
    } else {
        click.style.display = "block";
        click.style.transition = '1s';
    }
}


/*Click para ampliar e voltar ao normal*/
function PulloverZoom() { 
    var tamanho = document.getElementById('PulloverHide')
    var img = document.getElementById('PulloverImg')
    var aside = document.getElementById('PulloverAside')
    var Conteudo = document.getElementById('PulloverConteudo')

    if(tamanho.style.height === "600px") { /* Função baseada em tamanho da 'li'*/
        tamanho.style.height = "130px"
        tamanho.setAttribute('class', 'ZoomOff')
        img.setAttribute('class', 'imgZoomOff')
        aside.setAttribute('class', 'asideZoomOff')
        img.style.marginLeft = '-265px';
        tamanho.style.transition = '.6s';
        img.style.transition = '.6s';
        aside.style.transition = '.6s';
        Conteudo.innerHTML = '/*Endereço Padrão*/';
        
    } else {
        tamanho.style.height = "600px"
        tamanho.setAttribute('class', 'ZoomOn')
        img.setAttribute('class', 'imgZoomOn')
        aside.setAttribute('class', 'asideZoomOn')
        img.style.marginLeft = '0px';
        Conteudo.innerHTML = "/*Endereço Padrão*/";
    }

}
