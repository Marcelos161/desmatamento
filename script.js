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
