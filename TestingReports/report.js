$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\java\\Feature\\AddDistrict.feature");
formatter.feature({
  "name": "Super Admin FitnessGram Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login Should Be Success",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigates to the FitnessGram Application Login",
  "keyword": "Given "
});
formatter.step({
  "name": "User Enter the valid \"\u003cuserName\u003e\" and \"\u003cloginPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click On the Add district button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "loginPassword"
      ]
    },
    {
      "cells": [
        "Shrikant",
        "Xelpmoc@123"
      ]
    },
    {
      "cells": [
        "stateadmin@gmail.com",
        "Xelpmoc@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Should Be Success",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigates to the FitnessGram Application Login",
  "keyword": "Given "
});
formatter.match({
  "location": "AddDistrict.userNavigatesToTheFitnessGramApplicationLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter the valid \"Shrikant\" and \"Xelpmoc@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddDistrict.userEnterTheValidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On the Add district button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddDistrict.clickOnTheAddDistrictButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Should Be Success",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigates to the FitnessGram Application Login",
  "keyword": "Given "
});
formatter.match({
  "location": "AddDistrict.userNavigatesToTheFitnessGramApplicationLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter the valid \"stateadmin@gmail.com\" and \"Xelpmoc@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddDistrict.userEnterTheValidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On the Add district button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddDistrict.clickOnTheAddDistrictButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[text()\u003d\u0027Add New District\u0027]\"}\n  (Session info: chrome\u003d124.0.6367.119)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027XHYD-VIJAY\u0027, ip: \u0027192.168.2.64\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 124.0.6367.119, chrome: {chromedriverVersion: 124.0.6367.91 (51df0e5e17a8..., userDataDir: C:\\Users\\xelpmoc\\AppData\\Lo...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56079}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a2656b55a305618b737214a12c3c71e1\n*** Element info: {Using\u003dxpath, value\u003d//p[text()\u003d\u0027Add New District\u0027]}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Steps.AddDistrict.clickOnTheAddDistrictButton(AddDistrict.java:46)\r\n\tat ✽.Click On the Add district button(src\\test\\java\\Feature\\AddDistrict.feature:6)\r\n",
  "status": "failed"
});
formatter.uri("src\\test\\java\\Feature\\Login.feature");
formatter.feature({
  "name": "Super Admin FitnessGram Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login Should Be Success",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User navigates to the FitnessGram Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToTheFitnessGramApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter the Username as \"Shrikant\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userEnterTheUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Password as \"Xelpmoc@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userEnterPasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enable the Check Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enableTheCheckBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.clickOnTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login Success",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userLoginSuccess()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Should not Be Success",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User navigates to the FitnessGram Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToTheFitnessGramApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter the Username as \"Shriknt\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userEnterTheUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Password as \"Xelpmo@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userEnterPasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enable the Check Box",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enableTheCheckBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.clickOnTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login Fail",
  "keyword": "But "
});
formatter.match({
  "location": "LoginSteps.userLoginFail()"
});
formatter.result({
  "status": "passed"
});
});