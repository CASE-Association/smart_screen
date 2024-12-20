/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: [], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: 'CASEspotify',
			position: 'middle_center',
		},

		{
			module: "alert",
		},
		{
			module: "calendar",
			header: "CASE - group buys",
			position: "bottom_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/c_1hap04j3nurho78rn8qkiaauag%40group.calendar.google.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "top_bar",
			config: {
				compliments: {
					anytime: [
						"Time for Alpas!", "Arrays start at 0.", "It works on my computer!", "G-code = Gangster-code",
						"Bobbyracing on thursdays!", "Catia > Fusion", "Dont leave boardmembers unattended",
						"Trust me, im an engineer!", "Never forget test points", "Have you tried rebooting?",
						"Dupont cables are temporary, PCBs are forever!", "Crimp more cables!", "PID is probably good enough",
						"Read the datasheet", "Flux makes everything better", "No eating or drinking in the lab :(",
						"Remember to turn off the lights when you leave", "CASE-Audio.com", "Hot glue gun is the solution",
						"More RGB = more better", "It's never too late to give up!", "Trying is the first step towards success",
						"I would have done it, do it!", "If you want to look like you know what you're doing, use an oscilloscope.",
						"You should try the logic analyzer", "Unplug it and plug it back in", "More status LEDs, less problems",
						"Be careful with the lab tools!", "Use PlatformIO instead of Arduino IDE", "It worked yesterday...",
						"Turn on the music!", "Turn on Radiohead!", "Turn on Pink Floyd!", "Ask Andreas who will ask Adam",
						"Become a member!", "Trying is the first step towards failure", "Bobby race tonight!", 
						"60% of the time it works every time","ඞ","Pay your membership fee!","Neopixels are the future!", 
					],
				},
				updateInterval: "30000",
				fadeSpeed: "1000"
			}
		},
		{
			module: "weather",
			position: "bottom_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Göteborgs stad",
				locationID: "2711533", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "e09922781c4a1f74b9b60829281da187"
			}
		},
		{
			module: "clock",
			position: "bottom_right"
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
