
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ReportBug.feature");
formatter.feature({
  "line": 1,
  "name": "As a Client, I want to report a bug, So that I can get a solution",
  "description": "",
<<<<<<< HEAD
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
formatter.step({
  "line": 9,
  "name": "Client clicks on view bugs button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Client should be on view bugs page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 2178703500,
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
  "duration": 109733300,
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
  "duration": 117079500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 60088300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1533883000,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_view_bugs_button()"
});
formatter.result({
  "duration": 85635800,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_should_be_on_view_bugs_page()"
});
formatter.result({
  "duration": 27818700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Admin approves bug report",
  "description": "",
  "id": "admin-views-and-inspects-submitted-bugs;admin-approves-bug-report",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Client clicks on requested bugs tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Client clicks inspect button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The Bug\u0027s page is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Client updates priority with \"Low\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Client updates severity with \"Low\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Client updates points with \"50\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Client clicks on the approve button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "status should be set to unresolved",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "priority should be \"Low\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "severity should be \"Low\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "points should be \"50\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminReviewBugSteps.client_clicks_on_requested_bugs_tab()"
});
formatter.result({
  "duration": 52701300,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_inspect_button()"
});
formatter.result({
  "duration": 1082261200,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_Bug_s_page_is_shown()"
});
formatter.result({
  "duration": 3027288600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Low",
      "offset": 30
    }
  ],
  "location": "AdminReviewBugSteps.client_updates_priority_with(String)"
});
formatter.result({
  "duration": 87083400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Low",
      "offset": 30
    }
  ],
  "location": "AdminReviewBugSteps.client_updates_severity_with(String)"
});
formatter.result({
  "duration": 63502600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 28
    }
  ],
  "location": "AdminReviewBugSteps.client_updates_points_with(String)"
});
formatter.result({
  "duration": 82868300,
  "status": "passed"
});
formatter.match({
  "location": "AdminReviewBugSteps.client_clicks_on_the_approve_button()"
});
formatter.result({
  "duration": 10059279900,
  "status": "passed"
});
formatter.match({
  "location": "AdminReviewBugSteps.status_should_be_set_to_unresolved()"
});
formatter.result({
  "duration": 26652300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Low",
      "offset": 20
    }
  ],
  "location": "AdminReviewBugSteps.priority_should_be(String)"
});
formatter.result({
  "duration": 77357700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Low",
      "offset": 20
    }
  ],
  "location": "AdminReviewBugSteps.severity_should_be(String)"
});
formatter.result({
  "duration": 79159200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 18
    }
  ],
  "location": "AdminReviewBugSteps.points_should_be(String)"
});
formatter.result({
  "duration": 16254000,
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
formatter.step({
  "line": 9,
  "name": "Client clicks on view bugs button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Client should be on view bugs page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 710826900,
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
  "duration": 139049600,
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
  "duration": 108545100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 48756700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1469053000,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_view_bugs_button()"
});
formatter.result({
  "duration": 77366400,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_should_be_on_view_bugs_page()"
});
formatter.result({
  "duration": 23835600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Admin rejects bug report",
  "description": "",
  "id": "admin-views-and-inspects-submitted-bugs;admin-rejects-bug-report",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "Client clicks on requested bugs tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Client clicks inspect button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "The Bug\u0027s page is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Client clicks on the reject button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "status should be set to Denied",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminReviewBugSteps.client_clicks_on_requested_bugs_tab()"
});
formatter.result({
  "duration": 54248400,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_inspect_button()"
});
formatter.result({
  "duration": 1085220700,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_Bug_s_page_is_shown()"
});
formatter.result({
  "duration": 3028367300,
  "status": "passed"
});
formatter.match({
  "location": "AdminReviewBugSteps.client_clicks_on_the_reject_button()"
});
formatter.result({
  "duration": 47766300,
  "status": "passed"
});
formatter.match({
  "location": "AdminReviewBugSteps.status_should_be_set_to_Denied()"
});
formatter.result({
  "duration": 27693400,
  "status": "passed"
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
  "duration": 468940600,
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
  "duration": 116487200,
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
  "duration": 126838700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 56047700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1540591900,
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
formatter.step({
  "line": 19,
  "name": "Client clicks on the return to view bugs button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Client should be on view bugs page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 280761800,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_view_bugs_button()"
});
formatter.result({
  "duration": 117726000,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_should_be_on_view_bugs_page()"
});
formatter.result({
  "duration": 30931800,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_unresolved_bugs_button()"
});
formatter.result({
  "duration": 61902500,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_inspect_button()"
});
formatter.result({
  "duration": 1102226400,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_Bug_s_page_is_shown()"
});
formatter.result({
  "duration": 3027764600,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_the_mark_as_resolved_button()"
});
formatter.result({
  "duration": 27060100,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.status_should_be_set_to_resolved()"
});
formatter.result({
  "duration": 33535800,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_the_return_to_view_bugs_button()"
});
formatter.result({
  "duration": 37229600,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_should_be_on_view_bugs_page()"
});
formatter.result({
  "duration": 32344000,
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
  "duration": 559437700,
  "status": "passed"
});
formatter.match({
  "location": "ClientViewResolvedBugsSteps.the_user_signs_in_as_a_client()"
});
formatter.result({
  "duration": 205820800,
  "status": "passed"
});
formatter.match({
  "location": "ClientViewResolvedBugsSteps.the_client_clicks_view_bugs()"
});
formatter.result({
  "duration": 88472700,
  "status": "passed"
});
formatter.match({
  "location": "ClientViewResolvedBugsSteps.the_client_is_on_the_bug_page_viewing_resolved_bugs()"
});
formatter.result({
  "duration": 2001980400,
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
  "duration": 422168600,
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
  "duration": 118937400,
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
  "duration": 111057200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_clicks_the_Login_button()"
});
formatter.result({
  "duration": 44517700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 1472869400,
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
  "duration": 46425300,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_on_the_applications_tab()"
});
formatter.result({
  "duration": 107311900,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_modal_is_displayed()"
});
formatter.result({
  "duration": 5071427800,
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
  "duration": 80366200,
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
  "duration": 76459000,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_the_save_button()"
});
formatter.result({
  "duration": 47164600,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_is_added()"
});
formatter.result({
  "duration": 164328600,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d84.0.4147.135)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-MPV0AVOS\u0027, ip: \u002710.8.2.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.135, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\noahq\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59067}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c2735c8b146b70ff93275485d545d10b\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat dev.cuny.steps.CreateApplicationSteps.application_modal_is_displayed(CreateApplicationSteps.java:39)\r\n\tat dev.cuny.steps.CreateApplicationSteps.application_is_added(CreateApplicationSteps.java:65)\r\n\tat ✽.Then Application is added(CreateApplication.feature:18)\r\n",
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
  "duration": 658447700,
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
  "duration": 127870800,
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
  "duration": 101933100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_clicks_the_Login_button()"
});
formatter.result({
  "duration": 46610600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 1472747300,
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
  "duration": 46579600,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_on_the_applications_tab()"
});
formatter.result({
  "duration": 91739100,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_modal_is_displayed()"
});
formatter.result({
  "duration": 5065964800,
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
  "duration": 74151900,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_the_save_button()"
});
formatter.result({
  "duration": 40013200,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.missing_field_will_display_an_error()"
});
formatter.result({
  "duration": 18918500,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_will_not_be_submitted()"
});
formatter.result({
  "duration": 5082368800,
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
  "duration": 948713900,
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
  "duration": 120955600,
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
  "duration": 127851100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_clicks_the_Login_button()"
});
formatter.result({
  "duration": 48857100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 1517977000,
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
  "duration": 51499700,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_on_the_applications_tab()"
});
formatter.result({
  "duration": 111739000,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_modal_is_displayed()"
});
formatter.result({
  "duration": 5070234900,
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
  "duration": 72894400,
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
  "duration": 72855400,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_the_cancel_button()"
});
formatter.result({
  "duration": 39587400,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_will_not_be_submitted()"
});
formatter.result({
  "duration": 5081792700,
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
  "duration": 978179100,
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
  "duration": 100295600,
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
  "duration": 116334800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 52781400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1441445700,
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
  "duration": 96509100,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_modal_is_displayed()"
});
formatter.result({
  "duration": 5071281300,
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
  "duration": 89142200,
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
  "duration": 79547000,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_the_save_button()"
});
formatter.result({
  "duration": 44735100,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_is_added()"
});
formatter.result({
  "duration": 156394000,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d84.0.4147.135)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-MPV0AVOS\u0027, ip: \u002710.8.2.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.135, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\noahq\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59067}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c2735c8b146b70ff93275485d545d10b\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat dev.cuny.steps.CreateApplicationSteps.application_modal_is_displayed(CreateApplicationSteps.java:39)\r\n\tat dev.cuny.steps.CreateApplicationSteps.application_is_added(CreateApplicationSteps.java:65)\r\n\tat ✽.Then Application is added(CreateApplicatoin.feature:14)\r\n",
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
  "duration": 363179600,
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
  "duration": 121471800,
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
  "duration": 96916800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 42791300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1460857300,
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
  "duration": 804451600,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_application_s_bugs_are_shown()"
});
formatter.result({
  "duration": 40661700,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_the_application()"
});
formatter.result({
  "duration": 57715500,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_application_s_bugs_are_not_shown()"
});
formatter.result({
  "duration": 1022050300,
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
  "duration": 380735000,
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
  "duration": 110511800,
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
  "duration": 104769300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 44837900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1333412100,
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
  "duration": 771902700,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_a_bug_link()"
});
formatter.result({
  "duration": 1080027100,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_Bug_s_page_is_shown()"
});
formatter.result({
  "duration": 3026583600,
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
  "duration": 91474200,
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
  "duration": 96174900,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_the_submit_button()"
});
formatter.result({
  "duration": 43460300,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_solution_is_added_under_Posted_Solution_s()"
});
formatter.result({
  "duration": 311625000,
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
  "duration": 741060100,
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
  "duration": 108048100,
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
  "duration": 115820700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 47889900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1419507800,
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
  "duration": 777064500,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_on_a_bug_link()"
});
formatter.result({
  "duration": 1079066500,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_Bug_s_page_is_shown()"
});
formatter.result({
  "duration": 3025362700,
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
  "duration": 87177300,
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
  "duration": 75182100,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.client_clicks_the_cancel_button()"
});
formatter.result({
  "duration": 41756900,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_title_input_is_cleared()"
});
formatter.result({
  "duration": 29779500,
  "status": "passed"
});
formatter.match({
  "location": "ViewAndResolveBugsSteps.the_solution_input_is_cleared()"
});
formatter.result({
  "duration": 21480000,
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
  "duration": 708335000,
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
  "duration": 116028700,
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
  "duration": 123447600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 55587100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1493564100,
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
  "duration": 362684500,
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
  "duration": 105525400,
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
  "duration": 102979100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 48784600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1460923800,
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
  "duration": 309479200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_log_out_button()"
});
formatter.result({
  "duration": 144199000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_should_be_on_the_login_page()"
});
formatter.result({
  "duration": 46563200,
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
  "duration": 306043200,
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
  "duration": 153621600,
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
  "duration": 130302000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 47511100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_Error_Message_is_Displayed()"
});
formatter.result({
  "duration": 108506000,
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
  "duration": 310246900,
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
  "duration": 126688200,
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
  "duration": 129436800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 46041200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_Error_Message_is_Displayed()"
});
formatter.result({
  "duration": 109244800,
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
  "duration": 431468100,
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
  "duration": 118987200,
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
  "duration": 116049400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_clicks_the_Login_button()"
});
formatter.result({
  "duration": 46129200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 1429950200,
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
  "duration": 310835300,
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
  "duration": 101143800,
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
  "duration": 112816000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 48127800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_should_be_on_the_main_page()"
});
formatter.result({
  "duration": 1499177400,
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
  "duration": 87992500,
  "status": "passed"
});
formatter.match({
  "location": "ProfileSteps.client_should_be_on_the_profile_page()"
});
formatter.result({
  "duration": 59544400,
  "status": "passed"
});
formatter.match({
  "location": "ProfileSteps.table_of_submitted_bugs_should_be_shown()"
});
formatter.result({
  "duration": 28225600,
  "status": "passed"
});
formatter.match({
  "location": "ProfileSteps.table_of_submitted_solutions_should_be_shown()"
});
formatter.result({
  "duration": 25406300,
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
  "duration": 434627300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_clicks_the_register_tab()"
});
formatter.result({
  "duration": 74202900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_is_on_the_Registration_page()"
});
formatter.result({
  "duration": 60671800,
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
  "duration": 137095200,
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
  "duration": 118346800,
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
  "duration": 136621100,
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
  "duration": 135448600,
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
  "duration": 110303900,
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
  "duration": 101674900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_clicks_the_register_button()"
});
formatter.result({
  "duration": 20884200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_should_be_on_the_login_page()"
});
formatter.result({
  "duration": 623801600,
  "status": "passed"
});
formatter.uri("UserStatistics.feature");
formatter.feature({
  "line": 1,
  "name": "As a Clien, I want to see various statistics, so that I can view leaderboard status \u0026 my solutions",
  "description": "",
  "id": "as-a-clien,-i-want-to-see-various-statistics,-so-that-i-can-view-leaderboard-status-\u0026-my-solutions",
=======
  "id": "as-a-client,-i-want-to-report-a-bug,-so-that-i-can-get-a-solution",
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
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
<<<<<<< HEAD
  "duration": 430472700,
=======
  "duration": 1550517700,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
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
<<<<<<< HEAD
  "duration": 140408800,
=======
  "duration": 157333700,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
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
<<<<<<< HEAD
  "duration": 106325200,
=======
  "duration": 136932600,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 51163600,
=======
  "duration": 77885900,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 256819600,
=======
  "duration": 1642711900,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "As a Client, I want to fill out a bug report form, so I can get help with a project bug",
  "description": "",
  "id": "as-a-client,-i-want-to-report-a-bug,-so-that-i-can-get-a-solution;as-a-client,-i-want-to-fill-out-a-bug-report-form,-so-i-can-get-help-with-a-project-bug",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@UserStory3.1"
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
  "name": "Clien clicks on the Report New Bug tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Client is on the on the Report New Bug page",
  "keyword": "Then "
});
<<<<<<< HEAD
formatter.result({
  "duration": 400052000,
  "status": "passed"
=======
formatter.step({
  "line": 15,
  "name": "Client enters \"AppTitleTest\" for a bug title",
  "keyword": "When "
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
});
formatter.step({
  "line": 16,
  "name": "Client selects \"Bug Bounty System\" from the application dropdown",
  "keyword": "When "
});
<<<<<<< HEAD
formatter.result({
  "duration": 40101000,
  "status": "passed"
=======
formatter.step({
  "line": 17,

  "name": "Client fills \"SuspectedLocationTest\" for suspected location",

  "keyword": "When "
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
});
formatter.step({
  "line": 18,

  "name": "Client selects \"Low\" from the severity dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Client selects \"Medium\" from the priority dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Client types \"Bug description test\" into the description field",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Client types \"Bug reproduction steps test\" into reproduction field",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Client clicks the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Client is on the Bug Report View",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 481834000,
=======
  "duration": 50297600,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.match({
  "location": "ReportBugSteps.clien_clicks_on_the_Report_New_Bug_tab()"
});
formatter.result({
  "duration": 86863900,
  "status": "passed"
});
formatter.match({
  "location": "ReportBugSteps.client_is_on_the_on_the_Report_New_Bug_page()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 115524600,
=======
  "duration": 318823700,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AppTitleTest",
      "offset": 15
    }
  ],
  "location": "ReportBugSteps.client_enters_for_a_bug_title(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 111628500,
=======
  "duration": 130602100,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bug Bounty System",
      "offset": 16
    }
  ],
  "location": "ReportBugSteps.client_selects_the_application(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 52536200,
=======
  "duration": 3412076000,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuspectedLocationTest",
      "offset": 14
    }
  ],
  "location": "ReportBugSteps.client_fills_for_suspected_location(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 406288800,
=======
  "duration": 91355900,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Low",
      "offset": 16
    }
  ],
  "location": "ReportBugSteps.client_selects_from_the_severity_dropdown(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 345771500,
=======
  "duration": 105873000,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Medium",
      "offset": 16
    }
  ],
  "location": "ReportBugSteps.client_selects_from_the_priority_dropdown(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 140683300,
=======
  "duration": 111812100,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bug description test",
      "offset": 14
    }
  ],
  "location": "ReportBugSteps.client_types_into_the_description_field(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 97326200,
=======
  "duration": 189918100,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bug reproduction steps test",
      "offset": 14
    }
  ],
  "location": "ReportBugSteps.client_types_into_reproduction_field(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 26176600,
=======
  "duration": 185886700,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.match({
  "location": "ReportBugSteps.client_clicks_the_submit_button()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 28173300,
=======
  "duration": 97641500,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.match({
  "location": "ReportBugSteps.client_is_on_the_Bug_Report_View()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 26768800,
=======
  "duration": 292679600,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
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
<<<<<<< HEAD
  "duration": 415276600,
=======
  "duration": 390135000,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
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
<<<<<<< HEAD
  "duration": 118697900,
=======
  "duration": 143160900,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
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
<<<<<<< HEAD
  "duration": 126026000,
=======
  "duration": 146098000,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 48924900,
=======
  "duration": 70183200,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 232990600,
=======
  "duration": 1540847400,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "As a Client, I want to cancel a bug report form, so I can discard the information",
  "description": "",
  "id": "as-a-client,-i-want-to-report-a-bug,-so-that-i-can-get-a-solution;as-a-client,-i-want-to-cancel-a-bug-report-form,-so-i-can-discard-the-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@UserStory3.1.1"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Client is on the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Clien clicks on the Report New Bug tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Client is on the on the Report New Bug page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Client clicks the cancel button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Client is on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 413173900,
=======
  "duration": 53009600,
  "status": "passed"
});
formatter.match({
  "location": "ReportBugSteps.clien_clicks_on_the_Report_New_Bug_tab()"
});
formatter.result({
  "duration": 79800800,
  "status": "passed"
});
formatter.match({
  "location": "ReportBugSteps.client_is_on_the_on_the_Report_New_Bug_page()"
});
formatter.result({
  "duration": 207085000,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.match({
  "location": "ReportBugSteps.client_clicks_the_cancel_button()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 131718000,
=======
  "duration": 116346100,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 87678500,
=======
  "duration": 48911100,
>>>>>>> 4086a1fc9140ccdf9d664624a1c136f4f148723a
  "status": "passed"
});
});