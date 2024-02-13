let hora= document.getElementById('hora')
let minuto= document.getElementById('minuto')
let segundo = document.getElementById('segundo')
let valorRelogio
function clock(){
    let data = new Date()
    let horaValor  = data.getHours()
    let minutoValor = data.getMinutes()
    let segundoValor = data.getSeconds()
    hora.textContent =`${formateDate(horaValor)}` 
    minuto.textContent = `${formateDate(minutoValor)}`
    segundo.textContent = `${formateDate(segundoValor)}`

    function formateDate(time){
        return time = time<'10'? '0'+time : time
    }
}

function iniciar(){
   valorRelogio = setInterval(clock, 1000);
}
function resetar(){
    hora.textContent = '00'
    minuto.textContent = '00'
    segundo.textContent = '00'
    clearInterval(valorRelogio)
}
function pausar(){
    clearInterval(valorRelogio)
}