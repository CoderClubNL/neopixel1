def zetPixel(x: number, y: number, hue: number, saturation: number, luminosity: number):
    global nummer, X
    nummer = Y % 2
    if Y % 2 == 0:
        nummer = X + Y * 16
    else:
        nummer = Y * 16 - X + 15
    strip.clear()
    strip.set_pixel_color(nummer, neopixel.hsl(hue, saturation, luminosity))
    strip.show()
    X += 1
kleur = 0
X = 0
Y = 0
nummer = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P16, 256, NeoPixelMode.RGB)

def on_forever():
    global kleur, Y, X
    kleur = 0
    Y = 0
    X = 0
    for index in range(16):
        for index2 in range(16):
            zetPixel(X, Y, kleur, 222, 11)
            kleur += 1
        basic.pause(200)
        Y += 1
        X = 0
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)
