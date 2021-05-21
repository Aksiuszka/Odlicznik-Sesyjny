/*Przypisuję wartości zmiennym potrzebnym do stworzenia licznika*/
const timeLeft = document.getElementById('time-left')
const koniecSesji = new Date ('06/20/2021')
const sekundy = 1000
const minuty = sekundy*60
const godziny = minuty*60
const dni = godziny*24
let timerdID


function zliczamCzas (){
    const dzisiaj = new Date()
    const czasuZostalo = koniecSesji - dzisiaj
    console.log(czasuZostalo)

    if(czasuZostalo<=0) {
        timeLeft.innerHTML="I.... po sesji <3 Pora na wakacje!"
        clearInterval(timerID)
        return
    }
        const dzien=Math.floor(czasuZostalo/dni)
        const godzina=Math.floor((czasuZostalo%dni)/godziny)
        const minuta=Math.floor((czasuZostalo%godziny)/minuty)
        const sekunda=Math.floor((czasuZostalo%minuty)/sekundy)
        timeLeft.innerHTML= dzien + ' dni ' + godzina + ' godzin ' + minuta + ' minut ' + sekunda + ' sekund.'
    
}

timerID=setInterval(zliczamCzas,sekundy)