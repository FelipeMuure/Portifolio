function Carregar() {
    var data = new Date()
    var dia = data.getDay()
    var hora = data.getHours()
    var res = document.getElementById('res')
    var url = window.location.href;
    var segunda = document.getElementById('segunda')
    var terca = document.getElementById('terça')
    var quarta = document.getElementById('quarta')
    var quinta = document.getElementById('quinta')
    var sexta = document.getElementById('sexta')
    var sabado = document.getElementById('sabado')
    var fundo = document.getElementById('fundo')
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
    res.innerHTML = url

    /*Verifica o dia da semana e o destaca*/
    if (dia == 1) {
        fundo.style.backgroundImage = "url('https://media.istockphoto.com/photos/fitness-gym-equipment-accessories-on-blue-background-picture-id926065524?k=20&m=926065524&s=170667a&w=0&h=WVFr7qcslrJO7g89sLgCMlqHKfQ5jo0H_TYgKzF9GHQ=')";
        fundo.style.backgroundSize = "100%";
        res.innerHTML = `Que bela Segunda-Feira.<br> Desejamos uma ótima semana para você!!!` 
    } else if (dia == 2) {
        fundo.style.backgroundImage = "url('https://media.istockphoto.com/photos/fitness-gym-gym-equipment-background-valentines-day-concept-picture-id1202692363?k=20&m=1202692363&s=170667a&w=0&h=HeKtLq3q16Tk14xYEjW9wwvwKweCx6_egy6uaEkEKuQ=')";
        fundo.style.backgroundSize = "100%";
        res.innerHTML = 'Terça-Feira.<br> Bem vindo ao nosso app!!! Bom treino!'
    } else if (dia == 3) {
        fundo.style.backgroundImage = "url('https://media.istockphoto.com/photos/fitness-or-bodybuilding-background-dumbbells-on-gym-floor-top-view-picture-id908224814?k=20&m=908224814&s=170667a&w=0&h=0eBoO783ox1x5qOt_4wGPcnj2ugvhwtzNDKcO3tGbBo=')";
        fundo.style.backgroundSize = "100%";
        res.innerHTML = 'Quarta-Feira da alegria.<br>  Parece que o treino ta indo. Continue assim!'
    } else if (dia == 4) {
        fundo.style.backgroundImage = "url('https://media.istockphoto.com/photos/gym-background-with-fitness-equipment-concept-workout-from-home-stay-picture-id1221818374?k=20&m=1221818374&s=170667a&w=0&h=OVURTGo6Vea6uqVSWk5VNIylBD4ctRpK9NJrG1Jr_SA=')";
        fundo.style.backgroundPositionY = "100%";
        fundo.style.backgroundSize = "100%";
        res.innerHTML = 'Quintou?! <br> Hoje é dia de postar aquele TBT, na Academia?!'
    } else if (dia == 5) {
        fundo.style.backgroundImage = "url('https://media.istockphoto.com/photos/set-of-fitness-gym-equipment-workout-on-light-purple-background-with-picture-id926065476?k=20&m=926065476&s=170667a&w=0&h=NrEc78gu_IEB9g1lj37aBXwLuhnUBOySL06_ACvh4cc=')";
        fundo.style.backgroundSize = "100%";
        res.innerHTML = 'Sextou no treinoooo!!<br>  Isso é o que chamamos de disciplina!!!'
    } else if (dia == 6) {
        fundo.style.backgroundImage = "url('https://media.istockphoto.com/photos/healthy-fitness-lifestyle-gym-background-picture-id906006366?k=20&m=906006366&s=170667a&w=0&h=h745FX1YEyx467jRUeY-pRMVgraIoU5-sDK28MEEcBo=')";
        fundo.style.backgroundSize = "100%";
        fundo.style.backgroundPositionY = "90%";
        res.innerHTML = 'Quintou?! <br> Hoje é dia de postar aquele TBT, na Academia?!'
        res.innerHTML = 'Treinar dia de sábado<br>  é treinar com sangue nos olhos!!'       
    } else if (dia == 0) {
        fundo.style.backgroundImage = "url('https://www.vumiglobal.com/wp-content/uploads/2021/09/exercise-post-covid-600x300.jpg')";
        fundo.style.backgroundPosition = "center";
        fundo.style.backgroundSize = "100%";
        res.innerHTML = `Hoje é Domingo.<br>  Vai descançar, meu querido!`
    }
}

