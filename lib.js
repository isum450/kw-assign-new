function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}
function prime(num) {
    if(num%1 !== 0)
        return true;
    else
        return false;
    
}
function factorial(num) {
    if(num>15)
        console.log("15까지의 정수 중 입력하세요");
    let result = 1;

    for(let i = 1; i<=num; i++)
        result *= i;
    return result;
}
module.exports = {
    avg,
    prime,
    factorial
}