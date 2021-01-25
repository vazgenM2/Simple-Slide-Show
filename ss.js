let arr = ['red','blue','green','black','white']
let x = 0;
    
function start() {
    let but = document.getElementById('but')
    but.style.animation = 'button 2s 1 0.8s forwards, button2 0.4s 0s forwards'
    let num = document.getElementById('num')
    num.style.display = 'inline'
    num.style.animation = 'numanim 3s infinite forwards'
    num.style.animationDelay = '0.5s'
    setInterval(function() {
        let div = document.getElementById('p')
        div.style.backgroundColor = arr[x]
        if(x < 4) x++
        else x =0 
        },3000)
}
