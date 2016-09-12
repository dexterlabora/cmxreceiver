# Cisco Meraki CMX Receiver
A simple NodeJS application to accept WiFi location data from a Cisco Meraki network.

Meraki will first verify the intended receiver by sending a GET request to this server and 
expect to receive a "validator" key.

If validated, Meraki will periodically send a JSON stream of location data approx every 1-2 minutes.

The JSON data will contain a secret that can be verified by the CMX receiver (this app) to ensure
the data is from the correct sending network.

Once the data has been received, it is sent to the cmxData(data) function, where the JSON data will be 
in the `data` object. This example simply prints the contents to the console. Ideally, this would be sent
to a database. 

## Install
```
git clone https://github.com/dexterlabora/cmxreceiver.git
cd cmxreceiver
npm install
```

## Configuration
Modify the `cmxreceiver.js` file with your correct service port, secret, validator. 

Then, do something with the `data` (i.e write to database) by modifying this function:

```
function cmxData(data){
	console.log("JSON Feed: "+JSON.stringify(data, null, 2));
};
```

## Run
```
node cmxreceiver.js
```

Alternatively, you can define the parameters at runtime using environment variables (except for the DB piece) by typing this at the shell.

```
VALIDATOR="8e0846499d9a3f6c23f7868c4cFFFFd63250FFFF" SECRET="testing123" node cmxreceiver.js
```

## Default post URL
http://yourserver:1890/cmx


## Additional Resources
http://developers.meraki.com/tagged/Location

http://www.internetoflego.com/wifi-location-based-analytics-workflows-cisco-meraki-cmx/

### Written By
Cory Guynn

2016

http://www.InternetOfLEGO.com

https://meraki.cisco.com/

# 



## Sample Console Experience 

```
$ node cmxreceiver.js

CMX Receiver listening on port: 1890
Validator = 8e0846499d9a3f6c23f7868c4c25b9d63250FFFF
Secret verified
JSON Feed: {
  "version": "2.0",
  "secret": "testing123",
  "type": "DevicesSeen",
  "data": {
    "apMac": "00:18:0a:13:dd:b0",
    "apFloors": [],
    "apTags": [
      "",
      "home",
      ""
    ],
    "observations": [
      {
        "ipv4": null,
        "location": {
          "lat": 51.5355157,
          "lng": -0.06990350000000944,
          "unc": 41.21077547635681,
          "x": [],
          "y": []
        },
        "seenTime": "2016-09-12T11:12:32Z",
        "ssid": null,
        "os": null,
        "clientMac": "00:26:ab:b8:a9:a5",
        "seenEpoch": 1473678752,
        "rssi": 22,
        "ipv6": null,
        "manufacturer": "Seiko Epson"
      },
      {
        "ipv4": "/192.168.0.15",
        "location": {
          "lat": 51.5355157,
          "lng": -0.06990350000000944,
          "unc": 1.5497743004111961,
          "x": [],
          "y": []
        },
        "seenTime": "2016-09-12T11:12:31Z",
        "ssid": ".interwebs",
        "os": null,
        "clientMac": "74:da:38:56:0a:80",
        "seenEpoch": 1473678751,
        "rssi": 45,
        "ipv6": null,
        "manufacturer": "Edimax Technology"
      },
      {
        "ipv4": null,
        "location": {
          "lat": 51.5355157,
          "lng": -0.06990350000000944,
          "unc": 43.562546906687274,
          "x": [],
          "y": []
        },
        "seenTime": "2016-09-12T11:12:35Z",
        "ssid": null,
        "os": "iOS",
        "clientMac": "38:c9:86:d5:dd:08",
        "seenEpoch": 1473678755,
        "rssi": 21,
        "ipv6": null,
        "manufacturer": "Apple"
      },
      {
        "ipv4": "/192.168.0.35",
        "location": {
          "lat": 51.5355157,
          "lng": -0.06990350000000944,
          "unc": 1.7158482391649275,
          "x": [],
          "y": []
        },
        "seenTime": "2016-09-12T11:12:41Z",
        "ssid": ".interwebs",
        "os": null,
        "clientMac": "18:fe:34:f2:95:26",
        "seenEpoch": 1473678761,
        "rssi": 45,
        "ipv6": null,
        "manufacturer": "Espressif"
      },
      {
        "ipv4": "/192.168.0.56",
        "location": {
          "lat": 51.5355157,
          "lng": -0.06990350000000944,
          "unc": 0.6844347949152217,
          "x": [],
          "y": []
        },
        "seenTime": "2016-09-12T11:12:31Z",
        "ssid": ".interwebs",
        "os": null,
        "clientMac": "18:fe:34:d7:7c:26",
        "seenEpoch": 1473678751,
        "rssi": 50,
        "ipv6": null,
        "manufacturer": "Espressif"
      },
      {
        "ipv4": "/192.168.0.63",
        "location": {
          "lat": 51.5355157,
          "lng": -0.06990350000000944,
          "unc": 0.15017592508191352,
          "x": [],
          "y": []
        },
        "seenTime": "2016-09-12T11:12:43Z",
        "ssid": ".interwebs",
        "os": null,
        "clientMac": "18:fe:34:e1:b4:7a",
        "seenEpoch": 1473678763,
        "rssi": 56,
        "ipv6": null,
        "manufacturer": "Espressif"
      },
      {
        "ipv4": "/192.168.0.92",
        "location": {
          "lat": 51.5355157,
          "lng": -0.06990350000000944,
          "unc": 0.11086029498053862,
          "x": [],
          "y": []
        },
        "seenTime": "2016-09-12T11:12:41Z",
        "ssid": ".interwebs",
        "os": null,
        "clientMac": "18:fe:34:ce:a1:6d",
        "seenEpoch": 1473678761,
        "rssi": 55,
        "ipv6": null,
        "manufacturer": "Espressif"
      },
      {
        "ipv4": null,
        "location": {
          "lat": 51.5355157,
          "lng": -0.06990350000000944,
          "unc": 43.562546906687274,
          "x": [],
          "y": []
        },
        "seenTime": "2016-09-12T11:11:40Z",
        "ssid": null,
        "os": null,
        "clientMac": "54:e4:3a:7f:ad:af",
        "seenEpoch": 1473678700,
        "rssi": 21,
        "ipv6": null,
        "manufacturer": "Apple"
      },
      {
        "ipv4": "/192.168.0.69",
        "location": {
          "lat": 51.5355157,
          "lng": -0.06990350000000944,
          "unc": 0.602243927869146,
          "x": [],
          "y": []
        },
        "seenTime": "2016-09-12T11:12:00Z",
        "ssid": ".interwebs",
        "os": null,
        "clientMac": "18:fe:34:ed:8b:ea",
        "seenEpoch": 1473678720,
        "rssi": 62,
        "ipv6": null,
        "manufacturer": "Espressif"
      },
      {
        "ipv4": "/192.168.0.38",
        "location": {
          "lat": 51.5355157,
          "lng": -0.06990350000000944,
          "unc": 1.847465525637238,
          "x": [],
          "y": []
        },
        "seenTime": "2016-09-12T11:11:51Z",
        "ssid": ".interwebs",
        "os": null,
        "clientMac": "18:fe:34:fc:5a:7f",
        "seenEpoch": 1473678711,
        "rssi": 43,
        "ipv6": null,
        "manufacturer": "Espressif"
      }
    ]
  }
}
```