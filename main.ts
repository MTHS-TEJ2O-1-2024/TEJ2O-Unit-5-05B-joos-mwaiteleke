/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joos
 * Created on: Oct 2024
 * This program USes neostrips to make a traffic light
*/

let neopixelStrip: neopixel.Strip = null
basic.showIcon(IconNames.Happy)
input.onButtonPressed(Button.A, function() {

//turns neopixel green
input.buttonIsPressed(Button.A)
neopixelStrip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(2,neopixel.colors(NeoPixelColors.Green))
neopixelStrip.show()
basic.pause(2000)

//turns neopixel yellow
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    basic.pause(2000)

//turns neopixel red
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    basic.pause(2000)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
})
