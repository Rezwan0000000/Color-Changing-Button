document.getElementById('button').addEventListener('click',function(){
    const r = generateRandomNumber(255);
    const g = generateRandomNumber(255);
    const b = generateRandomNumber(255);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
function generateRandomNumber(n){
    return Math.floor(Math.random()*n);
}