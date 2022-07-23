function Carregar() {
    var data = new Date()
    var dia = data.getDay()
    var hora = data.getHours()
    var res = document.getElementById('res')
    var segunda = document.getElementById('segunda')
    var terça = document.getElementById('terça')
    var quarta = document.getElementById('quarta')
    var quinta = document.getElementById('quinta')
    var sexta = document.getElementById('sexta')
    var sabado = document.getElementById('sabado')
    /*Mensagem topo do Header*/
    if (hora < 6 || hora > 22) {
        res.innerHTML = 'A acadêmia ainda não abriu, meu querido!'
    } else if (hora < 12) {
        res.innerHTML = 'Bom dia!!! Hoje você me parece bem animado!'
    } else if (hora < 19) {
        res.innerHTML = 'Boa Tarde! É sempre bom cuidar da saúde!'
    } else {
        res.innerHTML = 'Boa Noite!!! Academia lotadinha!!!"'
    }

    /*Verifica o dia da semana e o destaca*/
    if (dia == 1) {
        segunda.style.padding = "5px 0px";
        segunda.style.borderRadius = "5px";
        segunda.style.border = "2px solid black";
        segunda.style.backgroundColor = "rgba(255, 51, 51, 0.9)";
    } else if (dia == 2) {
        terça.style.padding = "5px 0px";
        terça.style.borderRadius = "5px";
        terça.style.border = "2px solid black";
        terça.style.backgroundColor = "rgba(255, 51, 51, 0.9)";
    } else if (dia == 3) {
        quarta.style.padding = "5px 0px";
        quarta.style.borderRadius = "5px";
        quarta.style.border = "2px solid black";
        quarta.style.backgroundColor = "rgba(255, 51, 51, 0.9)";
    } else if (dia == 4) {
        quinta.style.padding = "5px 0px";
        quinta.style.borderRadius = "5px";
        quinta.style.border = "2px solid black";
        quinta.style.backgroundColor = "rgba(255, 51, 51, 0.9)";
    } else if (dia == 5) {
        sexta.style.padding = "5px 0px";
        sexta.style.borderRadius = "5px";
        sexta.style.border = "2px solid black";
        sexta.style.backgroundColor = "rgba(255, 51, 51, 0.9)";
    } else if (dia == 6) {
        sabado.style.padding = "5px 0px";
        sabado.style.borderRadius = "5px";
        sabado.style.border = "2px solid black";
        sabado.style.backgroundColor = "rgba(255, 51, 51, 0.9)";
    } else if (dia == 0) {
        res.innerHTML = `Hoje é Domingo. Vai descançar, meu querido!`
    }
}

