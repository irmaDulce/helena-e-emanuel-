let Horas = 0
let Minutos = 0
input.onButtonPressed(Button.A, function () {
    Horas += Horas + 1
})
input.onButtonPressed(Button.B, function () {
    Minutos = Minutos + 1
})
basic.forever(function () {
    basic.showString("" + (Horas))
})
