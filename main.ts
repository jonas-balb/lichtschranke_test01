pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.showIcon(IconNames.Heart)
// Fahrbahnampel grün
Environment.ledBrightness(AnalogPin.P13, true)
Environment.ledBrightness(AnalogPin.P3, false)
Environment.ledBrightness(AnalogPin.P4, false)
// Fußgängerampel rot
Environment.ledBrightness(AnalogPin.P10, false)
Environment.ledBrightness(AnalogPin.P7, false)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
