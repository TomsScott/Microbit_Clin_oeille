basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(1000)
basic.forever(function () {
    basic.pause(2000)
    for (let index = 0; index < 2; index++) {
        led.unplot(1, 1)
        basic.pause(200)
        led.plot(1, 1)
        basic.pause(200)
    }
})
