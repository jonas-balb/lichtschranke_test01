pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.showIcon(IconNames.Square)
//  Fahrbahnampel grün
Environment.ledBrightness(AnalogPin.P16, false)
Environment.ledBrightness(AnalogPin.P3, false)
Environment.ledBrightness(AnalogPin.P4, false)
//  Fußgängerampel rot
Environment.ledBrightness(AnalogPin.P10, true)
Environment.ledBrightness(AnalogPin.P15, true)
basic.forever(function on_forever() {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Heart)
    }
    
})
