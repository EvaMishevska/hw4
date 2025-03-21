/* let n = +prompt ('Введите степень двойки')

  function cheekEvenNumber (n) {
    if (n < 1) {
        return "NO";
    } else if (n === 1) {
        return "YES";
    } else if (n % 2 !== 0) {
        return "NO";
    } else {
    return cheekEvenNumber (n / 2);
    }
} 

alert (cheekEvenNumber (n)); */

let n = +prompt ('Введите степень двойки')

function cheekEvenNumber (n) {
    if (n < 1) {
        return "NO";
    } 
while (n > 1) {
    if ( n % 2 !== 0) {
        return "NO";
    }
    n = n / 2 
        return "YES" 
        
    }
   
}

alert (cheekEvenNumber (n));


let x = +prompt ("Введите первое число")
let znak = prompt ("Введите знак")
let y = +prompt ("Введите второе число")

function doMath ( x, znak, y) {
    switch (znak) {
        case '+' : 
            return  x + y;
        break;
        case '-' :
            return  x - y;
        break;
        case '*' :
            return  x * y;
        break;
        case '/' :
            return x / y;
        break;
        case '%' :
            return x % y;
        break;

        return alert ( 'Неверный знак')      
        }
}

alert ('Результат ' + (doMath(x, znak, y)));