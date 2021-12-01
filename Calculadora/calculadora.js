function add(operands){
    let result = operands.shift();
    operands.forEach(function(item,index){
        result += item
    })
    return result
};

function subtract(operands){
    let result = operands.shift();
    operands.forEach(function(item,index){
        result -= item
    })
    return result
};

function multiply(operands){
    let result = operands.shift();
    operands.forEach(function(item,index){
        result *= item
    })
    return result
};

function division(operands){
    let result = operands.shift();
    operands.forEach(function(item,index){
        if(item == 0){
            alert("Impossible to divide by 0")
            result = undefined
        }
        else{
            result /= item
        }
    })
    return result
};

function operation(e){
    e.preventDefault()
    let operation = e.currentTarget.innerHTML
    operands = getOperandsValue();
    let result = 0
    switch(operation){
        case "+":
            result = add(operands);
            break;
        case "-":
            result = subtract(operands);
            break;
        case "*":
            result = multiply(operands);
            break;
        case "/":
            result = division(operands);
            break;
        default:
            alert("Error")
            break;
    }
    resultInput = document.getElementsByClassName("result-input")[0]
    resultInput.value = result
}

function getOperandsValue(){
    let operands = document.getElementsByClassName("operand-input")
    list = [];
    for(let i = 0;i<operands.length;i++){
        let value = parseFloat(operands[i].value)
        list.push(value);
    }
    return list
}