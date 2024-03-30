ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("iPhone", "qwertyuiop")
if (ESP8266_IoT.wifiState(true)) {
    basic.showIcon(IconNames.Yes)
} else {
    basic.showIcon(IconNames.No)
}
basic.forever(function () {
    ESP8266_IoT.connectThingSpeak()
    basic.showIcon(IconNames.Heart)
    ESP8266_IoT.setData(
    "93XETSQVNAYNR9HR",
    input.temperature()
    )
    ESP8266_IoT.uploadData()
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})
