
let operation = {};

operation.compute = function(option, value1, value2) {
    if (option == "sub"){
        return parseFloat(value1) - parseFloat(value2);
    }
    else if (option == "add"){
        return parseFloat(value1) + parseFloat(value2);
    }
    else if (option == "mult"){
        return parseFloat(value1) * parseFloat(value2);
    }
    else if (option == "div"){
        return parseFloat(value1) / parseFloat(value2);
    }
}

module.exports = operation;