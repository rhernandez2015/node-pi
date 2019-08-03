//initial test of the pi-gpio boilerplate code
var gpio = require("pi-gpio");

//set an array of all of the GPIO pins we're using
pinList = [2, 3, 4, 17, 27, 22, 10, 9]

//function to set the passed GPIO pin to "high", then off
// function setPin(pinNumber){
//     gpio.open(pinNumber, "output", function(err) {		// Open pin 16 for output
//         gpio.write(pinNumber, 1, function() {			// Set pin 16 high (1)
//             setTimeout(function () {                    // Wait 5 seconds
//                 gpio.close(pinNumber);					// Close the pin
//               }, 5000)
//         });
//     });
// };

//loop through all pins, cycle on and off
// pinList.forEach(function(pin){
//     setPin(pin);
// })

gpio.open(16, "output", function(err) {		// Open pin 16 for output
    gpio.write(16, 1, function() {			// Set pin 16 high (1)
        gpio.close(16);						// Close pin 16
    });
});
