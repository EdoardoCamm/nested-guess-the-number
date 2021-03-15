let Number2 = 0
// Changes the number by 1
input.onButtonPressed(Button.A, function () {
    Number2 += 1
    basic.showNumber(Number2)
})
// Chooses a random number and executes the code.
input.onButtonPressed(Button.AB, function () {
    let Rando = 0
    if (Number2 == Rando) {
        if (true) {
            basic.showString("Right number")
        }
    } else if (Number2 < Rando) {
        basic.showString("Number is too high")
    } else {
        basic.showString("Number is too low")
    }
})
// Changes the number by -1
input.onButtonPressed(Button.B, function () {
    Number2 += -1
    basic.showNumber(Number2)
})
