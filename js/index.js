//Калькурятор

document.querySelectorAll('.number')
    .forEach(el => el.addEventListener('click', clickNumber) );
document.querySelectorAll('.operation')
    .forEach(el => el.addEventListener('click', operation) );
document.querySelector('.calc').addEventListener('click', calc);
const display = document.querySelector('.display');
document.querySelector('.clear').addEventListener('click', clearDisplay);

function clickNumber(event) {
    display.value += event.target.innerText;
}

function operation(event){
    display.value += event.target.innerText;
}

function calc () {
    display.value = eval(display.value);
}
function clearDisplay() {
        display.value = '';
}

//Калькурятор


// Квадратне рівняння
const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));

if (a == 0) {
   alert('Значення "А" не може =0');
}
else {
    let result = mSquare(a, b, c);
    alert(result);
    
}

function mSquare(a, b, c) {
const dis = ((Math.pow(b , 2))-4*a*c);
    let result;

    if (dis < 0) {
        result = 'Рівняння коренів немає';
    }
    else if (dis == 0) {
        result = 'x1,2 = ' (-b / (2 * a));
    }
    else if (dis > 0) {
        result = 'x1 = ' + (-b - Math.sqrt(dis)) / (2 * a);
        result += ';  x2 = ' + (-b + Math.sqrt(dis)) / (2 * a);
    }
    return result;
}

// Квадратне рівняння

// Фібоначчі
let n = parseFloat(prompt('Choose your number'));
function fib(n) {

let fibPrev = 1,
     fibPrePrev = 1;
let fibNext;
for(let i = 2; i <=n; i++) {
     let fibNext = fibPrev + fibPrePrev;
                 fibPrePrev = fibPrev;
                 fibPrev = fibNext;
                  
   }
                  return fibPrev;
}
alert( fib(2) );
alert( fib(4) );
alert( fib(8) ); 

// Фібоначчі