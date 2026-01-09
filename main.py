def convertToNummer(x: number, y: number):
    if Y % 2 == 0:
        return X + Y * 16
    else:
        return Y * 16 - X + 15
kleur = 0
X = 0
Y = 0
strip = neopixel.create(DigitalPin.P16, 256, NeoPixelMode.RGB_RGB)

def on_forever():
    global kleur, Y, X
    kleur = 0
    Y = 0
    for index in range(16):
        X = 0
        for index2 in range(16):
            strip.set_pixel_color(convertToNummer(X, Y), neopixel.hsl(kleur, 254, 25))
            strip.show()
            X += 1
            kleur += 1
            basic.pause(100)
        Y += 1
    strip.clear()
basic.forever(on_forever)
