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
  "duration": 2394963300,
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
  "duration": 247224900,
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
  "duration": 283490400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 159027700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 2765548200,
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
  "duration": 847726800,
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
  "duration": 288687100,
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
  "duration": 235901300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 102536400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 2073755000,
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
  "duration": 739146400,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_view_bugs_button()"
});
formatter.result({
  "duration": 750070600,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_should_be_on_view_bugs_page()"
});
formatter.result({
  "duration": 97184500,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_unresolved_bugs_button()"
});
formatter.result({
  "duration": 132126100,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_inspect_button()"
});
formatter.result({
  "duration": 338880700,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_Bug_s_page_is_shown()"
});
formatter.result({
  "duration": 3049503000,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_the_mark_as_resolved_button()"
});
formatter.result({
  "duration": 33144100,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.status_should_be_set_to_resolved()"
});
formatter.result({
  "duration": 46527800,
  "status": "passed"
});
formatter.uri("ClientViewResolvedBugs.feature");
formatter.feature({
  "line": 1,
  "name": "As a client I want to view resolved bugs",
  "description": "",
  "id": "as-a-client-i-want-to-view-resolved-bugs",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Client viewing resolved bugs",
  "description": "",
  "id": "as-a-client-i-want-to-view-resolved-bugs;client-viewing-resolved-bugs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "The user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user signs in as a client",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The client clicks view bugs",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The client is on the bug page viewing resolved bugs",
  "keyword": "Then "
});
formatter.match({
  "location": "ClientViewResolvedBugsSteps.the_user_is_on_the_home_page()"
});
formatter.result({
  "duration": 737366300,
  "status": "passed"
});
formatter.match({
  "location": "ClientViewResolvedBugsSteps.the_user_signs_in_as_a_client()"
});
formatter.result({
  "duration": 454081800,
  "status": "passed"
});
formatter.match({
  "location": "ClientViewResolvedBugsSteps.the_client_clicks_view_bugs()"
});
formatter.result({
  "duration": 521925100,
  "status": "passed"
});
formatter.match({
  "location": "ClientViewResolvedBugsSteps.the_client_is_on_the_bug_page_viewing_resolved_bugs()"
});
formatter.result({
  "duration": 2000622300,
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
  "duration": 795833700,
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
  "duration": 290971200,
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
  "duration": 259231700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_clicks_the_Login_button()"
});
formatter.result({
  "duration": 111466100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 1891643400,
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
  "duration": 93726000,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_on_the_applications_tab()"
});
formatter.result({
  "duration": 296805600,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_modal_is_displayed()"
});
formatter.result({
  "duration": 5158913100,
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
  "duration": 178050100,
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
  "duration": 183807900,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_the_save_button()"
});
formatter.result({
  "duration": 109259300,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_is_added()"
});
formatter.result({
  "duration": 404126600,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d84.0.4147.135)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-765TLT6M\u0027, ip: \u0027192.168.1.162\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.135, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\davew\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60033}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 69d194e6f08ad2f9382481ed7a52b49d\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat dev.cuny.steps.CreateApplicationSteps.application_modal_is_displayed(CreateApplicationSteps.java:39)\r\n\tat dev.cuny.steps.CreateApplicationSteps.application_is_added(CreateApplicationSteps.java:65)\r\n\tat ✽.Then Application is added(CreateApplication.feature:18)\r\n",
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
  "duration": 1258254000,
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
  "duration": 268747200,
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
  "duration": 249683300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_clicks_the_Login_button()"
});
formatter.result({
  "duration": 112567700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 2014053000,
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
  "duration": 85841700,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_on_the_applications_tab()"
});
formatter.result({
  "duration": 278168100,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_modal_is_displayed()"
});
formatter.result({
  "duration": 5157008700,
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
  "duration": 166676300,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_the_save_button()"
});
formatter.result({
  "duration": 109402700,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.missing_field_will_display_an_error()"
});
formatter.result({
  "duration": 47168400,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_will_not_be_submitted()"
});
formatter.result({
  "duration": 5152337500,
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
  "duration": 1235504900,
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
  "duration": 283655300,
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
  "duration": 239360000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_clicks_the_Login_button()"
});
formatter.result({
  "duration": 115065700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 1997943500,
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
  "duration": 78391300,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_on_the_applications_tab()"
});
formatter.result({
  "duration": 274043200,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_modal_is_displayed()"
});
formatter.result({
  "duration": 5141780400,
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
  "duration": 165961800,
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
  "duration": 170855000,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_the_cancel_button()"
});
formatter.result({
  "duration": 96670600,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_will_not_be_submitted()"
});
formatter.result({
  "duration": 5172709000,
  "status": "passed"
});
formatter.uri("FilterAndSortBugs.feature");
formatter.feature({
  "line": 1,
  "name": "Filter and sort bugs on View Bugs page",
  "description": "",
  "id": "filter-and-sort-bugs-on-view-bugs-page",
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
  "duration": 1004357100,
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
  "duration": 264776400,
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
  "duration": 239171100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 124283400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 2091581000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Client views requested bug reports",
  "description": "",
  "id": "filter-and-sort-bugs-on-view-bugs-page;client-views-requested-bug-reports",
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
  "name": "Client clicks on the requested bugs tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Requested bugs table is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Client clicks inspect button on a bug",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Bug report view is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Client clicks on return to view bugs button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Resolved bugs table is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 723097100,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_view_bugs_button()"
});
formatter.result({
  "duration": 677697700,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_should_be_on_view_bugs_page()"
});
formatter.result({
  "duration": 183282700,
  "status": "passed"
});
formatter.match({
  "location": "FilterAndSortBugsSteps.client_clicks_on_the_requested_bugs_tab()"
});
formatter.result({
  "duration": 130842900,
  "status": "passed"
});
formatter.match({
  "location": "FilterAndSortBugsSteps.requested_bugs_table_is_displayed()"
});
formatter.result({
  "duration": 160036500,
  "status": "passed"
});
formatter.match({
  "location": "FilterAndSortBugsSteps.client_clicks_inspect_button_on_a_bug()"
});
formatter.result({
  "duration": 848071200,
  "status": "passed"
});
formatter.match({
  "location": "FilterAndSortBugsSteps.bug_report_view_is_displayed()"
});
formatter.result({
  "duration": 97379600,
  "status": "passed"
});
formatter.match({
  "location": "FilterAndSortBugsSteps.client_clicks_on_return_to_view_bugs_button()"
});
formatter.result({
  "duration": 509017200,
  "status": "passed"
});
formatter.match({
  "location": "FilterAndSortBugsSteps.resolved_bugs_table_is_displayed()"
});
formatter.result({
  "duration": 129925800,
  "status": "passed"
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
  "duration": 1350037600,
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
  "duration": 240560500,
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
  "duration": 275065000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 116243300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 2058606300,
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
  "duration": 111970200,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_application_s_bugs_are_shown()"
});
formatter.result({
  "duration": 106528500,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_the_application()"
});
formatter.result({
  "duration": 90901700,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_application_s_bugs_are_not_shown()"
});
formatter.result({
  "duration": 1039871500,
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
  "duration": 668014200,
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
  "duration": 238837200,
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
  "duration": 224855500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 125156000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 2078116600,
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
  "duration": 106977500,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_a_bug_link()"
});
formatter.result({
  "duration": 1211968800,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_Bug_s_page_is_shown()"
});
formatter.result({
  "duration": 3052301100,
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
  "duration": 201933400,
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
  "duration": 211413200,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_the_submit_button()"
});
formatter.result({
  "duration": 94063700,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_solution_is_added_under_Posted_Solution_s()"
});
formatter.result({
  "duration": 767977600,
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
  "duration": 1254977400,
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
  "duration": 305793100,
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
  "duration": 235872400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 104494200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 2179218500,
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
  "duration": 116206800,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_a_bug_link()"
});
formatter.result({
  "duration": 1199232200,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_Bug_s_page_is_shown()"
});
formatter.result({
  "duration": 3038665500,
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
  "duration": 205649600,
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
  "duration": 182481000,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_the_cancel_button()"
});
formatter.result({
  "duration": 103845400,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_title_input_is_cleared()"
});
formatter.result({
  "duration": 42298800,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_solution_input_is_cleared()"
});
formatter.result({
  "duration": 34226000,
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
  "duration": 1308334600,
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
  "duration": 258170600,
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
  "duration": 253921600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 104791300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 2382975500,
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
  "duration": 659413200,
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
  "duration": 185310900,
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
  "duration": 240712200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 95313300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 2097356300,
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
  "duration": 847241800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_log_out_button()"
});
formatter.result({
  "duration": 322094400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_should_be_on_the_login_page()"
});
formatter.result({
  "duration": 85954700,
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
  "duration": 813886500,
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
  "duration": 348785500,
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
  "duration": 294922000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 89883400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_Error_Message_is_Displayed()"
});
formatter.result({
  "duration": 112283900,
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
  "duration": 759284500,
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
  "duration": 328438400,
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
  "duration": 276418100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 107366700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_Error_Message_is_Displayed()"
});
formatter.result({
  "duration": 100068000,
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
  "duration": 795981300,
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
  "duration": 244511700,
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
  "duration": 272451200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_clicks_the_Login_button()"
});
formatter.result({
  "duration": 107764700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 2009487500,
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
  "duration": 687537900,
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
  "duration": 261398700,
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
  "duration": 240003100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 106657600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 2353006600,
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
  "duration": 302062400,
  "status": "passed"
});
formatter.match({
  "location": "ProfileSteps.client_should_be_on_the_profile_page()"
});
formatter.result({
  "duration": 121723800,
  "status": "passed"
});
formatter.match({
  "location": "ProfileSteps.table_of_submitted_bugs_should_be_shown()"
});
formatter.result({
  "duration": 49966700,
  "status": "passed"
});
formatter.match({
  "location": "ProfileSteps.table_of_submitted_solutions_should_be_shown()"
});
formatter.result({
  "duration": 38850900,
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
  "duration": 861465000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_clicks_the_register_tab()"
});
formatter.result({
  "duration": 165856300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_is_on_the_Registration_page()"
});
formatter.result({
  "duration": 109640300,
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
  "duration": 293377600,
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
  "duration": 255472200,
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
  "duration": 237707200,
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
  "duration": 305122600,
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
  "duration": 182141200,
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
  "duration": 244979200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_clicks_the_register_button()"
});
formatter.result({
  "duration": 45678300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_should_be_on_the_login_page()"
});
formatter.result({
  "duration": 1012421200,
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
  "duration": 811070800,
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
  "duration": 254239100,
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
  "duration": 200594300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 107027600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 844695200,
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
  "duration": 846766900,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.leaderboard_is_displayed()"
});
formatter.result({
  "duration": 97220900,
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
  "duration": 1093989800,
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
  "duration": 242252600,
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
  "duration": 257949400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 107481500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 771049300,
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
  "duration": 861629500,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.client_clicks_the_profile_tab()"
});
formatter.result({
  "duration": 393609200,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.client_is_redirected_to_their_profile_page()"
});
formatter.result({
  "duration": 157006800,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.solutions_are_displayed()"
});
formatter.result({
  "duration": 45055900,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.bug_reports_are_displayed()"
});
formatter.result({
  "duration": 46155300,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.client_points_are_displayed()"
});
formatter.result({
  "duration": 43411300,
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
  "duration": 841349900,
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
  "duration": 254170100,
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
  "duration": 286312700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 128493700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 718954100,
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
  "duration": 950217700,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.client_clicks_the_profile_tab()"
});
formatter.result({
  "duration": 319862500,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.client_is_redirected_to_their_profile_page()"
});
formatter.result({
  "duration": 184130100,
  "status": "passed"
});
});