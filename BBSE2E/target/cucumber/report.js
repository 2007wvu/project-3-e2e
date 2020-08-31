
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ReportBug.feature");
formatter.feature({
  "line": 1,
  "name": "As a Client, I want to report a bug, So that I can get a solution",
  "description": "",
  "id": "as-a-client,-i-want-to-report-a-bug,-so-that-i-can-get-a-solution",
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
  "duration": 1550517700,
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
  "duration": 157333700,
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
  "duration": 136932600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 77885900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 1642711900,
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
formatter.step({
  "line": 15,
  "name": "Client enters \"AppTitleTest\" for a bug title",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Client selects \"Bug Bounty System\" from the application dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 17,

  "name": "Client fills \"SuspectedLocationTest\" for suspected location",

  "keyword": "When "
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
  "duration": 50297600,
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
  "duration": 318823700,
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
  "duration": 130602100,
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
  "duration": 3412076000,
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
  "duration": 91355900,
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
  "duration": 105873000,
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
  "duration": 111812100,
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
  "duration": 189918100,
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
  "duration": 185886700,
  "status": "passed"
});
formatter.match({
  "location": "ReportBugSteps.client_clicks_the_submit_button()"
});
formatter.result({
  "duration": 97641500,
  "status": "passed"
});
formatter.match({
  "location": "ReportBugSteps.client_is_on_the_Bug_Report_View()"
});
formatter.result({
  "duration": 292679600,
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
  "duration": 390135000,
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
  "duration": 143160900,
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
  "duration": 146098000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 70183200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 1540847400,
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
  "status": "passed"
});
formatter.match({
  "location": "ReportBugSteps.client_clicks_the_cancel_button()"
});
formatter.result({
  "duration": 116346100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 48911100,
  "status": "passed"
});
});