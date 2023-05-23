var about = document.getElementById('sobre');
var btn = document.getElementById('about')

function sobre() {
    if (about.style.marginLeft == '77%') {
        btn.style.backgroundColor = ''
        btn.style.borderRadius = '20%'

        about.style.marginLeft = '100%';
        setTimeout (() => {
            about.style.display = 'none';
        },1000)
    } else {
        btn.style.backgroundColor = '#0b472d'
        btn.style.borderRadius = '20% 20% 0 0'
        about.style.display = 'flex';
        setTimeout (() => {
            about.style.marginLeft = '77%';
        },1)

    }

}

// Aviso caso a tela seja muito pequena

var tela = window.screen.width;
var fundo = document.getElementById('celular');
var texto1 = document.getElementById('celular1');
var texto2 = document.getElementById('celular2');
console.log(tela);

if (tela < 1350) {
    texto1.style.display = 'block';
    texto2.style.display = 'block';
    fundo.style.display = 'flex';
    console.log("tela menor" + tela);

    window.alert("⚠️O site ainda nao funciona bem em telas pequenas, talvez sua experiencia seja afetada, nos desculpe estamos trabalhando pra melhorar isso.⚠️ para ter uma melhor experiencia acesse por um computador.")

} else {
    console.log("Tela maior");
}
