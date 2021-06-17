let number = prompt('Введите Ваше число');
let degree = prompt('Введите степень этого числа');


function result (number, degree = 1) {
    
    if (isNaN(number)){

        alert('Type only numbers please')

        return ;

    }
    if (isNaN(degree)){

        alert('Type only numbers please')

        return ;

    }



    return number ** degree;

}


let res = result(number,degree);

alert(res);