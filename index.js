const screen = document.querySelector('.screen');
const equal = document.querySelector('.equal');

function insert(valor) {
    screen.innerHTML += valor
};


function clean() {
    screen.innerHTML = ' ';
};


function backSpace(){
    if (screen.textContent) {
        let res = document.getElementById('screen').innerHTML;
        return screen.innerHTML = res.substring(0, res.length - 1);
    }
};


function confirmation() {
    if(screen.textContent != 'Erro') {
        document.getElementById('screen').innerHTML = eval(screen.innerHTML);
    }
}