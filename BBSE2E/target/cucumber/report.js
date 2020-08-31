$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdminInspectBugs.feature");
formatter.feature({
  "line": 1,
  "name": "Admin views and inspects submitted bugs",
  "description": "",
  "id": "admin-views-and-inspects-submitted-bugs",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Client logs in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Client types \"Emailman\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Client types \"password\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Client should be on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 1981712000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emailman",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 121442500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 127185500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 58689100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1697052200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Admin opens bug report",
  "description": "",
  "id": "admin-views-and-inspects-submitted-bugs;admin-opens-bug-report",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.uri("BugPageInspectBug.feature");
formatter.feature({
  "line": 1,
  "name": "Inspect and resolve bugs on view bugs page",
  "description": "",
  "id": "inspect-and-resolve-bugs-on-view-bugs-page",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Client logs in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Client types \"Emailman\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Client types \"password\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Client should be on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 387101000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emailman",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 119235800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 109532500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 49830600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1463478900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Client marks bug as resolved",
  "description": "",
  "id": "inspect-and-resolve-bugs-on-view-bugs-page;client-marks-bug-as-resolved",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Client is on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Client clicks on view bugs button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Client should be on view bugs page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Client clicks on unresolved bugs button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Client clicks inspect button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The Bug\u0027s page is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Client clicks the mark as resolved button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "status should be set to resolved",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 270246200,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_view_bugs_button()"
});
formatter.result({
  "duration": 108753600,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_should_be_on_view_bugs_page()"
});
formatter.result({
  "duration": 33868600,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_unresolved_bugs_button()"
});
formatter.result({
  "duration": 52852000,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_inspect_button()"
});
formatter.result({
  "duration": 377685300,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_Bug_s_page_is_shown()"
});
formatter.result({
  "duration": 3026274400,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_the_mark_as_resolved_button()"
});
formatter.result({
  "duration": 28482800,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.status_should_be_set_to_resolved()"
});
formatter.result({
  "duration": 31370700,
  "status": "passed"
});
formatter.uri("CreateApplication.feature");
formatter.feature({
  "line": 1,
  "name": "As admin I want to create an application",
  "description": "",
  "id": "as-admin-i-want-to-create-an-application",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Admin logs into their account",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin types \"TheRaidman\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Admin types \"password\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Admin is on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_Login_page()"
});
formatter.result({
  "duration": 476570600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TheRaidman",
      "offset": 13
    }
  ],
  "location": "LoginSteps.admin_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 121855900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "LoginSteps.admin_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 105314400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_clicks_the_Login_button()"
});
formatter.result({
  "duration": 45442400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 1425850700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Admin creates a new application",
  "description": "",
  "id": "as-admin-i-want-to-create-an-application;admin-creates-a-new-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@UserStory7"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Admin is on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin clicks on the applications tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Application modal is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Admin adds \"NewCucTest222\" in the Application Title",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Admin adds \"NewGitCucLink221\" Github Link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Admin clicks the save button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Application is added",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 47905800,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_on_the_applications_tab()"
});
formatter.result({
  "duration": 104384000,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_modal_is_displayed()"
});
formatter.result({
  "duration": 5077342500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewCucTest222",
      "offset": 12
    }
  ],
  "location": "CreateApplicationSteps.admin_adds_in_the_Application_Title(String)"
});
formatter.result({
  "duration": 84208700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewGitCucLink221",
      "offset": 12
    }
  ],
  "location": "CreateApplicationSteps.admin_adds_Github_Link(String)"
});
formatter.result({
  "duration": 76513900,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_the_save_button()"
});
formatter.result({
  "duration": 43381300,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_is_added()"
});
formatter.result({
  "duration": 9133630600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#datalength\"}\n  (Session info: chrome\u003d84.0.4147.135)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-MPV0AVOS\u0027, ip: \u002710.8.1.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.135, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\noahq\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60273}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ea6a912b1f617b83c683e65dc19d6933\n*** Element info: {Using\u003did, value\u003ddatalength}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getAttribute(Unknown Source)\r\n\tat dev.cuny.steps.CreateApplicationSteps.application_modal_is_displayed(CreateApplicationSteps.java:41)\r\n\tat dev.cuny.steps.CreateApplicationSteps.application_is_added(CreateApplicationSteps.java:65)\r\n\tat ✽.Then Application is added(CreateApplication.feature:18)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "Admin logs into their account",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin types \"TheRaidman\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Admin types \"password\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Admin is on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_Login_page()"
});
formatter.result({
  "duration": 935916400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TheRaidman",
      "offset": 13
    }
  ],
  "location": "LoginSteps.admin_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 109213100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "LoginSteps.admin_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 107819400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_clicks_the_Login_button()"
});
formatter.result({
  "duration": 51829900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 1442291400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Admin creates a new application with partial info",
  "description": "",
  "id": "as-admin-i-want-to-create-an-application;admin-creates-a-new-application-with-partial-info",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@UserStory7.1"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Admin is on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Admin clicks on the applications tab",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Application modal is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Admin adds \"NewCucTest221\" in the Application Title",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Admin clicks the save button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Missing field will display an error",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Application will not be submitted",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 45326200,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_on_the_applications_tab()"
});
formatter.result({
  "duration": 98659000,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_modal_is_displayed()"
});
formatter.result({
  "duration": 5073183500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewCucTest221",
      "offset": 12
    }
  ],
  "location": "CreateApplicationSteps.admin_adds_in_the_Application_Title(String)"
});
formatter.result({
  "duration": 71069500,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_the_save_button()"
});
formatter.result({
  "duration": 45597400,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.missing_field_will_display_an_error()"
});
formatter.result({
  "duration": 20777200,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_will_not_be_submitted()"
});
formatter.result({
  "duration": 5088129100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Admin logs into their account",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin types \"TheRaidman\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Admin types \"password\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Admin is on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_Login_page()"
});
formatter.result({
  "duration": 959932800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TheRaidman",
      "offset": 13
    }
  ],
  "location": "LoginSteps.admin_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 126166300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "LoginSteps.admin_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 123523100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_clicks_the_Login_button()"
});
formatter.result({
  "duration": 58145500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 1426553600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Admin creates a new application and press cancel",
  "description": "",
  "id": "as-admin-i-want-to-create-an-application;admin-creates-a-new-application-and-press-cancel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@UserStory7.2"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "Admin is on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Admin clicks on the applications tab",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Application modal is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Admin adds \"NewCucTest221\" in the Application Title",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Admin adds \"NewGitCucLink101\" Github Link",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Admin clicks the cancel button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Application will not be submitted",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 45109200,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_on_the_applications_tab()"
});
formatter.result({
  "duration": 100719400,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_modal_is_displayed()"
});
formatter.result({
  "duration": 5067820400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewCucTest221",
      "offset": 12
    }
  ],
  "location": "CreateApplicationSteps.admin_adds_in_the_Application_Title(String)"
});
formatter.result({
  "duration": 75999800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewGitCucLink101",
      "offset": 12
    }
  ],
  "location": "CreateApplicationSteps.admin_adds_Github_Link(String)"
});
formatter.result({
  "duration": 68465200,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_the_cancel_button()"
});
formatter.result({
  "duration": 41806800,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_will_not_be_submitted()"
});
formatter.result({
  "duration": 5080702300,
  "status": "passed"
});
formatter.uri("CreateApplicatoin.feature");
formatter.feature({
  "line": 1,
  "name": "As admin I want to create an application",
  "description": "",
  "id": "as-admin-i-want-to-create-an-application",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "Admin logs into their account",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Client types \"Emailman\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Client types \"password\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Client should be on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 922293900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emailman",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 119769900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 105876300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 49521400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1429674100,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Admin creates a new application",
  "description": "",
  "id": "as-admin-i-want-to-create-an-application;admin-creates-a-new-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Admin clicks on the applications tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Application modal is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Admin adds \"NewCucTest\" in the Application Title",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Admin adds \"NewGitCucLink\" Github Link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Admin clicks the save button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Application is added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_on_the_applications_tab()"
});
formatter.result({
  "duration": 101399000,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_modal_is_displayed()"
});
formatter.result({
  "duration": 5069977800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewCucTest",
      "offset": 12
    }
  ],
  "location": "CreateApplicationSteps.admin_adds_in_the_Application_Title(String)"
});
formatter.result({
  "duration": 68002400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewGitCucLink",
      "offset": 12
    }
  ],
  "location": "CreateApplicationSteps.admin_adds_Github_Link(String)"
});
formatter.result({
  "duration": 66788600,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_the_save_button()"
});
formatter.result({
  "duration": 43618400,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_is_added()"
});
formatter.result({
  "duration": 9126291200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#datalength\"}\n  (Session info: chrome\u003d84.0.4147.135)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-MPV0AVOS\u0027, ip: \u002710.8.1.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.135, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\noahq\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60273}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ea6a912b1f617b83c683e65dc19d6933\n*** Element info: {Using\u003did, value\u003ddatalength}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getAttribute(Unknown Source)\r\n\tat dev.cuny.steps.CreateApplicationSteps.application_modal_is_displayed(CreateApplicationSteps.java:41)\r\n\tat dev.cuny.steps.CreateApplicationSteps.application_is_added(CreateApplicationSteps.java:65)\r\n\tat ✽.Then Application is added(CreateApplicatoin.feature:14)\r\n",
  "status": "failed"
});
formatter.uri("HomePageApplicationList.feature");
formatter.feature({
  "line": 1,
  "name": "Inspect and resolve bugs on Home page",
  "description": "",
  "id": "inspect-and-resolve-bugs-on-home-page",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Client logs in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Client types \"Emailman\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Client types \"password\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Client should be on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 931079800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emailman",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 113769600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 105336400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 48463700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1449134700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Client expands and shrinks application",
  "description": "",
  "id": "inspect-and-resolve-bugs-on-home-page;client-expands-and-shrinks-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Client clicks on an application",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The application\u0027s bugs are shown",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Client clicks on the application",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The application\u0027s bugs are not shown",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_an_application()"
});
formatter.result({
  "duration": 738855300,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_application_s_bugs_are_shown()"
});
formatter.result({
  "duration": 34972900,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_the_application()"
});
formatter.result({
  "duration": 59235000,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_application_s_bugs_are_not_shown()"
});
formatter.result({
  "duration": 1021248000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Client logs in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Client types \"Emailman\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Client types \"password\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Client should be on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 409871500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emailman",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 119455000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 100816000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 54967200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1452185900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Client clicks on bug and submits solution",
  "description": "",
  "id": "inspect-and-resolve-bugs-on-home-page;client-clicks-on-bug-and-submits-solution",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Client clicks on an application",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Client clicks on a bug link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "The Bug\u0027s page is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Client enters \"This is a great solution\" into the title input",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Client enters \"It is actually not that great.\" into the solution input",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Client clicks the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The solution is added under Posted Solution(s)",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_an_application()"
});
formatter.result({
  "duration": 749458300,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_a_bug_link()"
});
formatter.result({
  "duration": 1087965900,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_Bug_s_page_is_shown()"
});
formatter.result({
  "duration": 3025262700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a great solution",
      "offset": 15
    }
  ],
  "location": "ViewAndResolveBugsSteps.client_enters_into_the_title_input(String)"
});
formatter.result({
  "duration": 85347400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "It is actually not that great.",
      "offset": 15
    }
  ],
  "location": "ViewAndResolveBugsSteps.client_enters_into_the_solution_input(String)"
});
formatter.result({
  "duration": 80450300,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_the_submit_button()"
});
formatter.result({
  "duration": 41485000,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_solution_is_added_under_Posted_Solution_s()"
});
formatter.result({
  "duration": 330383600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Client logs in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Client types \"Emailman\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Client types \"password\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Client should be on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 811490300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emailman",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 113134000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 122042600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 46811000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1431378400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Client clicks on bug and cancels submission",
  "description": "",
  "id": "inspect-and-resolve-bugs-on-home-page;client-clicks-on-bug-and-cancels-submission",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "Client clicks on an application",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Client clicks on a bug link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "The Bug\u0027s page is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Client enters \"This is a great solution\" into the title input",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Client enters \"It is actually not that great.\" into the solution input",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Client clicks the cancel button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "The title input is cleared",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "The solution input is cleared",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_an_application()"
});
formatter.result({
  "duration": 624790200,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_a_bug_link()"
});
formatter.result({
  "duration": 1075274800,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_Bug_s_page_is_shown()"
});
formatter.result({
  "duration": 3025466900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a great solution",
      "offset": 15
    }
  ],
  "location": "ViewAndResolveBugsSteps.client_enters_into_the_title_input(String)"
});
formatter.result({
  "duration": 98499900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "It is actually not that great.",
      "offset": 15
    }
  ],
  "location": "ViewAndResolveBugsSteps.client_enters_into_the_solution_input(String)"
});
formatter.result({
  "duration": 81248000,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_the_cancel_button()"
});
formatter.result({
  "duration": 48802200,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_title_input_is_cleared()"
});
formatter.result({
  "duration": 20688600,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_solution_input_is_cleared()"
});
formatter.result({
  "duration": 21196400,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Log in to Bug Bounty System",
  "description": "",
  "id": "log-in-to-bug-bounty-system",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Client logs into their account",
  "description": "",
  "id": "log-in-to-bug-bounty-system;client-logs-into-their-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Client types \"\u003cusername\u003e\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Client types \"\u003cpassword\u003e\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Client should be on the main page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "log-in-to-bug-bounty-system;client-logs-into-their-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "log-in-to-bug-bounty-system;client-logs-into-their-account;;1"
    },
    {
      "cells": [
        "Emailman",
        "password"
      ],
      "line": 12,
      "id": "log-in-to-bug-bounty-system;client-logs-into-their-account;;2"
    },
    {
      "cells": [
        "mo",
        "password"
      ],
      "line": 13,
      "id": "log-in-to-bug-bounty-system;client-logs-into-their-account;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Client logs into their account",
  "description": "",
  "id": "log-in-to-bug-bounty-system;client-logs-into-their-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Client types \"Emailman\" into the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Client types \"password\" into the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Client should be on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 807862100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emailman",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 98237200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 115641200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 47677600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1501018700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Client logs into their account",
  "description": "",
  "id": "log-in-to-bug-bounty-system;client-logs-into-their-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Client types \"mo\" into the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Client types \"password\" into the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Client should be on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 364042400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mo",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 96314900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 124517800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 47937300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1412286500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Client logs out of their account",
  "description": "",
  "id": "log-in-to-bug-bounty-system;client-logs-out-of-their-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "Client is on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Client clicks the log out button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Client should be on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 363756200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_log_out_button()"
});
formatter.result({
  "duration": 144078300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_should_be_on_the_login_page()"
});
formatter.result({
  "duration": 49619600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Client logs in with invalid credentials",
  "description": "",
  "id": "log-in-to-bug-bounty-system;client-logs-in-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Client types \"\u003cusername\u003e\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Client types \"\u003cpassword\u003e\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Login Error Message is Displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "log-in-to-bug-bounty-system;client-logs-in-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 29,
      "id": "log-in-to-bug-bounty-system;client-logs-in-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "probablyNotAUsername",
        "probablyNotAPassword"
      ],
      "line": 30,
      "id": "log-in-to-bug-bounty-system;client-logs-in-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "notAnAdminUsername",
        "notAnAdminPassword"
      ],
      "line": 31,
      "id": "log-in-to-bug-bounty-system;client-logs-in-with-invalid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Client logs in with invalid credentials",
  "description": "",
  "id": "log-in-to-bug-bounty-system;client-logs-in-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Client types \"probablyNotAUsername\" into the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Client types \"probablyNotAPassword\" into the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Login Error Message is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 297802600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "probablyNotAUsername",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 158153600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "probablyNotAPassword",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 142698300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 60658100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_Error_Message_is_Displayed()"
});
formatter.result({
  "duration": 100323600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Client logs in with invalid credentials",
  "description": "",
  "id": "log-in-to-bug-bounty-system;client-logs-in-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Client types \"notAnAdminUsername\" into the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Client types \"notAnAdminPassword\" into the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Login Error Message is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 423003200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "notAnAdminUsername",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 123793000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "notAnAdminPassword",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 117266600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 50408700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_Error_Message_is_Displayed()"
});
formatter.result({
  "duration": 100545700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Admin logs into their account",
  "description": "",
  "id": "log-in-to-bug-bounty-system;admin-logs-into-their-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "Admin is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Admin types \"TheRaidman\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Admin types \"password\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Admin clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Admin is on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_Login_page()"
});
formatter.result({
  "duration": 354368500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TheRaidman",
      "offset": 13
    }
  ],
  "location": "LoginSteps.admin_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 127992400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "LoginSteps.admin_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 113568700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_clicks_the_Login_button()"
});
formatter.result({
  "duration": 56171100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 1408007900,
  "status": "passed"
});
formatter.uri("ProfilePage.feature");
formatter.feature({
  "line": 1,
  "name": "Client visits profile",
  "description": "",
  "id": "client-visits-profile",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Client logs in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Client types \"Emailman\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Client types \"password\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Client should be on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 362389100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emailman",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 108333900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 102850100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 45711800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1308649600,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Client clicks on profile button and views bugs",
  "description": "",
  "id": "client-visits-profile;client-clicks-on-profile-button-and-views-bugs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Client clicks on the profile button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Client should be on the profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Table of submitted bugs should be shown",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Table of submitted solutions should be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "ProfileSteps.client_clicks_on_the_profile_button()"
});
formatter.result({
  "duration": 87146500,
  "status": "passed"
});
formatter.match({
  "location": "ProfileSteps.client_should_be_on_the_profile_page()"
});
formatter.result({
  "duration": 53011900,
  "status": "passed"
});
formatter.match({
  "location": "ProfileSteps.table_of_submitted_bugs_should_be_shown()"
});
formatter.result({
  "duration": 26150200,
  "status": "passed"
});
formatter.match({
  "location": "ProfileSteps.table_of_submitted_solutions_should_be_shown()"
});
formatter.result({
  "duration": 23386400,
  "status": "passed"
});
formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "Client registers for the Bugs Bounty System",
  "description": "",
  "id": "client-registers-for-the-bugs-bounty-system",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Client registers with valid input",
  "description": "",
  "id": "client-registers-for-the-bugs-bounty-system;client-registers-with-valid-input",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Client clicks the register tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Client is on the Registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Client types \"\u003cfirstName\u003e\" into first name field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Client types \"\u003clastName\u003e\" into last name field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Client types \"\u003cusername\u003e\" into the register username field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Client Types \"\u003cemail\u003e\" into the email field",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Client types \"\u003cpassword\u003e\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Client types \"\u003cpassword\u003e\" into the confirm password field",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Client clicks the register button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Client should be on the login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "client-registers-for-the-bugs-bounty-system;client-registers-with-valid-input;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "username",
        "email",
        "password"
      ],
      "line": 17,
      "id": "client-registers-for-the-bugs-bounty-system;client-registers-with-valid-input;;1"
    },
    {
      "cells": [
        "ArthurF",
        "MorganF",
        "AMorganF",
        "AMorganF@gmail.com",
        "a2Morgan"
      ],
      "line": 18,
      "id": "client-registers-for-the-bugs-bounty-system;client-registers-with-valid-input;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Client registers with valid input",
  "description": "",
  "id": "client-registers-for-the-bugs-bounty-system;client-registers-with-valid-input;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Client clicks the register tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Client is on the Registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Client types \"ArthurF\" into first name field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Client types \"MorganF\" into last name field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Client types \"AMorganF\" into the register username field",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Client Types \"AMorganF@gmail.com\" into the email field",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Client types \"a2Morgan\" into the password field",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Client types \"a2Morgan\" into the confirm password field",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Client clicks the register button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Client should be on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 383789800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_clicks_the_register_tab()"
});
formatter.result({
  "duration": 55767800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_is_on_the_Registration_page()"
});
formatter.result({
  "duration": 54269000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ArthurF",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.client_types_into_first_name_field(String)"
});
formatter.result({
  "duration": 115516200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MorganF",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.client_types_into_last_name_field(String)"
});
formatter.result({
  "duration": 106115400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AMorganF",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.client_types_into_the_register_username_field(String)"
});
formatter.result({
  "duration": 106276000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AMorganF@gmail.com",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.client_Types_into_the_email_field(String)"
});
formatter.result({
  "duration": 129668600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a2Morgan",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 98204800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a2Morgan",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.client_types_into_the_confirm_password_field(String)"
});
formatter.result({
  "duration": 92175800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_clicks_the_register_button()"
});
formatter.result({
  "duration": 20647800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_should_be_on_the_login_page()"
});
formatter.result({
  "duration": 586727600,
  "status": "passed"
});
formatter.uri("UserStatistics.feature");
formatter.feature({
  "line": 1,
  "name": "As a Clien, I want to see various statistics, so that I can view leaderboard status \u0026 my solutions",
  "description": "",
  "id": "as-a-clien,-i-want-to-see-various-statistics,-so-that-i-can-view-leaderboard-status-\u0026-my-solutions",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Client logs into their account",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Client types \"posttest\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Client types \"password\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Client is on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 352520600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posttest",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 119160600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 96396700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 45314600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 215340700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "As a Client, I want to view the leaderboard to see the top devs and their points by rank",
  "description": "",
  "id": "as-a-clien,-i-want-to-see-various-statistics,-so-that-i-can-view-leaderboard-status-\u0026-my-solutions;as-a-client,-i-want-to-view-the-leaderboard-to-see-the-top-devs-and-their-points-by-rank",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@UserStory6.1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Client is on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Leaderboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 311449300,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.leaderboard_is_displayed()"
});
formatter.result({
  "duration": 39688800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Client logs into their account",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Client types \"posttest\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Client types \"password\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Client is on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 392965400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posttest",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 99815200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 104425300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 48579000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 326844100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "As a Client, I want to view my dev page to see my solution history, bug reports, \u0026 points",
  "description": "",
  "id": "as-a-clien,-i-want-to-see-various-statistics,-so-that-i-can-view-leaderboard-status-\u0026-my-solutions;as-a-client,-i-want-to-view-my-dev-page-to-see-my-solution-history,-bug-reports,-\u0026-points",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@UserStory6.2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Client is on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Client clicks the profile tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Client is redirected to their profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Solutions are displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Bug reports are displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Client points are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 305553300,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.client_clicks_the_profile_tab()"
});
formatter.result({
  "duration": 132791600,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.client_is_redirected_to_their_profile_page()"
});
formatter.result({
  "duration": 78064600,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.solutions_are_displayed()"
});
formatter.result({
  "duration": 25457700,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.bug_reports_are_displayed()"
});
formatter.result({
  "duration": 25427600,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.client_points_are_displayed()"
});
formatter.result({
  "duration": 26226800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Client logs into their account",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Client types \"posttest\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Client types \"password\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Client is on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 327381400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posttest",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_username_field(String)"
});
formatter.result({
  "duration": 144026200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 14
    }
  ],
  "location": "LoginSteps.client_types_into_the_password_field(String)"
});
formatter.result({
  "duration": 106996800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 48000700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 200693400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "As a Client, I want to view my profile page to see my solution history, bug reports, \u0026 points",
  "description": "",
  "id": "as-a-clien,-i-want-to-see-various-statistics,-so-that-i-can-view-leaderboard-status-\u0026-my-solutions;as-a-client,-i-want-to-view-my-profile-page-to-see-my-solution-history,-bug-reports,-\u0026-points",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@UserStory6.3"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Client is on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Client clicks the profile tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Client is redirected to their profile page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 319028600,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.client_clicks_the_profile_tab()"
});
formatter.result({
  "duration": 126609700,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.client_is_redirected_to_their_profile_page()"
});
formatter.result({
  "duration": 77698500,
  "status": "passed"
});
});