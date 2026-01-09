function convertToNummer (x: number, y: number) {
    if (Y % 2 == 0) {
        return X + Y * 16
    } else {
        return Y * 16 - X + 15
    }
}
let kleur = 0
let X = 0
let Y = 0
let strip = neopixel.create(DigitalPin.P16, 256, NeoPixelMode.RGB_RGB)
basic.forever(function () {
    kleur = 0
    Y = 0
    for (let index = 0; index < 16; index++) {
        X = 0
        for (let index = 0; index < 16; index++) {
            strip.setPixelColor(convertToNummer(X, Y), neopixel.hsl(kleur, 127, 25))
            strip.show()
            X += 1
            kleur += 1
            basic.pause(100)
        }
        Y += 1
    }
    strip.clear()
})
