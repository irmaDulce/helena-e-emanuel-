input.onButtonPressed(Button.A, function () {
    if (Horas < 23) {
        Horas += 1
    } else {
        Horas = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (Minutos < 59) {
        Minutos += 1
    } else {
        Minutos = 0
    }
})
let Horas = 0
let Minutos = 0
loops.everyInterval(60000, function () {
    if (Minutos < 59) {
        Minutos += 1
    } else {
        Minutos = 0
        if (Horas < 23) {
            Horas += 1
        } else {
            Horas = 0
        }
    }
})
basic.forever(function () {
    let horasFormatadas = Horas < 10 ? "0" + Horas : "" + Horas
let minutosFormatados = Minutos < 10 ? "0" + Minutos : "" + Minutos
basic.showString("" + horasFormatadas + ":" + minutosFormatados)
})
