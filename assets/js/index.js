function insert(num)  {
   const numer = document.getElementById('result').innerHTML;
   document.getElementById('result').innerHTML = numer + num;
    
}
function clean() {
    document.getElementById('result').innerHTML ="";
}
function back() {
    const result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}
document.getElementById('btnr').addEventListener('click', ()=> {
    const result = document.getElementById('result').innerHTML.replace('x', '*');
    if (result){
        document.getElementById('result').innerHTML = eval(result);
    }
})
