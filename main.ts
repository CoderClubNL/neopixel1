function zetPixel (x: number, y: number, hue: number, saturation: number, luminosity: number) {
    nummer = Y % 2
    if (Y % 2 == 0) {
        nummer = X + Y * 16
    } else {
        nummer = Y * 16 - X + 15
    }
    strip.clear()
    strip.setPixelColor(nummer, neopixel.hsl(hue, saturation, luminosity))
    strip.show()
    X += 1
}
let kleur = 0
let X = 0
let Y = 0
let nummer = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 256, NeoPixelMode.RGB_RGB)
basic.forever(function () {
    kleur = 0
    Y = 0
    X = 0
    for (let index = 0; index < 16; index++) {
        for (let index = 0; index < 16; index++) {
            zetPixel(X, Y, kleur, 222, 11)
            kleur += 1
            basic.pause(200)
        }
        Y += 1
        X = 0
    }
})
basic.forever(function () {
	
})
