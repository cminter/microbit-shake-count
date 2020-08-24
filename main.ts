let shakes = 0
let mi = 0
let mx = 0
let my = 0
input.onGesture(Gesture.ScreenDown, function () {
    shakes = 0
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    setMappedLED(shakes)
    shakes += 1
    if (shakes >= 50) {
        shakes = 0
    }
})
function setMappedLED (index: number) {
    mi = index % 25
    mx = mi % 5
    my = mi / 5
    if (index < 25) {
        led.toggle(mx, my)
    } else {
        led.toggle(my, mx)
    }
}
