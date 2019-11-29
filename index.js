var Calculate = function(a, b, functionName) {
    if (functionName === 'add') {
        return a + b;
    } 
    if (functionName === 'subtract') {
        return a - b;
    } 
    if (functionName === 'multiply') {
        return a * b;
    } 
    return a + b;
}

module.exports = Calculate;
