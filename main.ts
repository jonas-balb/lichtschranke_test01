pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.showIcon(IconNames.Heart)
// Fahrbahnampel grün
Environment.ledBrightness(AnalogPin.P16, true)
Environment.ledBrightness(AnalogPin.P3, true)
Environment.ledBrightness(AnalogPin.P4, true)
// Fußgängerampel rot
Environment.ledBrightness(AnalogPin.P10, true)
Environment.ledBrightness(AnalogPin.P15, true)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
