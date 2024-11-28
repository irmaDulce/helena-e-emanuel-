input.onButtonPressed(Button.A, function () {
    Horas += 1
})
input.onButtonPressed(Button.B, function () {
    Minutos += 1
})
let Horas = 0
let Minutos = 0
loops.everyInterval(60000, function () {
    Minutos += 1
})
basic.forever(function () {
    basic.showString("" + Horas + ":" + Minutos)
})
loops.everyInterval(3600000, function () {
    Horas += 1
})
