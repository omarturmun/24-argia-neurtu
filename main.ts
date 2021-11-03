basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (input.lightLevel() > 90) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (input.lightLevel() > 80) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (input.lightLevel() > 70) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
