const getNum = (val) => {
    let result = document.getElementById('result')
    result.value += val
}
const clearAll = () => {
    let result = document.getElementById('result')
    result.value = ''
}

function res() {
    var result = document.getElementById("result");  
    result.value = eval(result.value)
}  