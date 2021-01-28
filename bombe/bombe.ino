//#include <XMLWriter.h>
#include <M5Stack.h>
#include <WiFi.h>

WiFiClient client;

const String code = "ABCDE";
const String password = "8cb2237d0679ca88db6464eac60da96345513964";

String result;

void request(String req) {
  if (req != "") {
    if (client.connect(IPAddress (192,168,22,70), 3000)) {
      client.println("GET /?code=" + code + "&password=" + password + "&request=" + req + " HTTP/1.0");
      client.println("Connection: close");
      client.println();
    }
  }
  else {
    if (client.connect(IPAddress (192,168,22,70), 3000)) {
      client.println("GET /?code=" + code + "&password=" + password + " HTTP/1.0");
      client.println("Connection: close");
      client.println();
    }
  }
}

void setup() {
  m5.begin();

  pinMode(2, INPUT);
  pinMode(5, INPUT);

  WiFi.begin("SSID", "password");

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    M5.Lcd.println("Establishing connection to WiFi..");
  }

  M5.Lcd.println("Connected to network");
  M5.Lcd.print(WiFi.localIP());

  request("Set_State.1");
}

void loop() {
  result = "";
  
  request("");
  
  while (client.available()) {
    char c = client.read();
    result += String(c);
  }
  
  M5.Lcd.println(result.substring(206));

  if (digitalRead(2)) {
    M5.Lcd.println("button press");
    request("Button_Pressed");
    while (digitalRead(2)) {}
    delay(100);
    request("Button_Unpressed");
  }

  if (digitalRead(5)) {
    M5.Lcd.println("reset state");
    request("Set_State.0");
    delay(100);
  }

  delay(10);
}
