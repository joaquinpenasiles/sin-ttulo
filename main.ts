basic.forever(function () {
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showIcon(IconNames.Happy)
    basic.showString("Hello!")
    music.playMelody("C5 B A B - A D C ", 120)
})
