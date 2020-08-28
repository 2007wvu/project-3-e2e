$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateApplication.feature");
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
  "duration": 1443063400,
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
  "duration": 155265700,
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
  "duration": 128073600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_clicks_the_Login_button()"
});
formatter.result({
  "duration": 68126700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 1599873300,
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
  "duration": 51578600,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_on_the_applications_tab()"
});
formatter.result({
  "duration": 130295700,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_modal_is_displayed()"
});
formatter.result({
  "duration": 5085706200,
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
  "duration": 121266900,
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
  "duration": 111745300,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_the_save_button()"
});
formatter.result({
  "duration": 65384800,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_is_added()"
});
formatter.result({
  "duration": 5140339800,
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
  "duration": 770962800,
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
  "duration": 182097100,
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
  "duration": 150148100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_clicks_the_Login_button()"
});
formatter.result({
  "duration": 74715000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 1416800600,
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
  "duration": 38336900,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_on_the_applications_tab()"
});
formatter.result({
  "duration": 100016900,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_modal_is_displayed()"
});
formatter.result({
  "duration": 5072730400,
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
  "duration": 111195100,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_the_save_button()"
});
formatter.result({
  "duration": 63792200,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.missing_field_will_display_an_error()"
});
formatter.result({
  "duration": 27866200,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_will_not_be_submitted()"
});
formatter.result({
  "duration": 5105246000,
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
  "duration": 1056384000,
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
  "duration": 153060000,
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
  "duration": 144223500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_clicks_the_Login_button()"
});
formatter.result({
  "duration": 71437700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 1548914400,
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
  "duration": 46938600,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_on_the_applications_tab()"
});
formatter.result({
  "duration": 135336800,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_modal_is_displayed()"
});
formatter.result({
  "duration": 5086253300,
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
  "duration": 103993400,
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
  "duration": 82254500,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.admin_clicks_the_cancel_button()"
});
formatter.result({
  "duration": 47576300,
  "status": "passed"
});
formatter.match({
  "location": "CreateApplicationSteps.application_will_not_be_submitted()"
});
formatter.result({
  "duration": 5088272700,
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
  "name": "Client is on the main page",
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
  "name": "Client is on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 1098981900,
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
  "duration": 145398100,
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
  "duration": 167255300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 67717400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 1577495000,
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
  "name": "Client is on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 468985300,
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
  "duration": 136424900,
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
  "duration": 134756700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 63704800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 1570642600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Client logs in with invalid credentials",
  "description": "",
  "id": "log-in-to-bug-bounty-system;client-logs-in-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Client types \"\u003cusername\u003e\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Client types \"\u003cpassword\u003e\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Login Error Message is Displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "log-in-to-bug-bounty-system;client-logs-in-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "log-in-to-bug-bounty-system;client-logs-in-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "probablyNotAUsername",
        "probablyNotAPassword"
      ],
      "line": 25,
      "id": "log-in-to-bug-bounty-system;client-logs-in-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "notAnAdminUsername",
        "notAnAdminPassword"
      ],
      "line": 26,
      "id": "log-in-to-bug-bounty-system;client-logs-in-with-invalid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Client logs in with invalid credentials",
  "description": "",
  "id": "log-in-to-bug-bounty-system;client-logs-in-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Client types \"probablyNotAUsername\" into the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Client types \"probablyNotAPassword\" into the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Login Error Message is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 410085200,
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
  "duration": 191032500,
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
  "duration": 175776200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 60613900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_Error_Message_is_Displayed()"
});
formatter.result({
  "duration": 165027700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Client logs in with invalid credentials",
  "description": "",
  "id": "log-in-to-bug-bounty-system;client-logs-in-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Client is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Client types \"notAnAdminUsername\" into the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Client types \"notAnAdminPassword\" into the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Client clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Login Error Message is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_Login_page()"
});
formatter.result({
  "duration": 367742100,
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
  "duration": 143910100,
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
  "duration": 159898000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 61540600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_Error_Message_is_Displayed()"
});
formatter.result({
  "duration": 169630700,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Admin logs into their account",
  "description": "",
  "id": "log-in-to-bug-bounty-system;admin-logs-into-their-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "Admin is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Admin types \"TheRaidman\" into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Admin types \"password\" into the password field",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Admin clicks the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Admin is on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_Login_page()"
});
formatter.result({
  "duration": 471792400,
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
  "duration": 142481300,
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
  "duration": 145324700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_clicks_the_Login_button()"
});
formatter.result({
  "duration": 56420300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.admin_is_on_the_main_page()"
});
formatter.result({
  "duration": 1517747800,
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
  "duration": 359108700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_clicks_the_register_tab()"
});
formatter.result({
  "duration": 68556900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_is_on_the_Registration_page()"
});
formatter.result({
  "duration": 62726600,
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
  "duration": 133330000,
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
  "duration": 146574600,
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
  "duration": 143761800,
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
  "duration": 153355400,
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
  "duration": 135556800,
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
  "duration": 140119400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_clicks_the_register_button()"
});
formatter.result({
  "duration": 124497400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.client_should_be_on_the_login_page()"
});
formatter.result({
  "duration": 651271300,
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
  "duration": 595385100,
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
  "duration": 124038600,
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
  "duration": 112857000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 51625400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 1665231600,
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
  "duration": 40101400,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.leaderboard_is_displayed()"
});
formatter.result({
  "duration": 20444900,
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
  "duration": 462936500,
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
  "duration": 132394100,
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
  "duration": 117409300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 79335700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 1410859100,
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
  "duration": 41402400,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.client_clicks_the_profile_tab()"
});
formatter.result({
  "duration": 134473500,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.client_is_redirected_to_their_profile_page()"
});
formatter.result({
  "duration": 58021000,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.solutions_are_displayed()"
});
formatter.result({
  "duration": 25817600,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.bug_reports_are_displayed()"
});
formatter.result({
  "duration": 75683500,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.client_points_are_displayed()"
});
formatter.result({
  "duration": 26165800,
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
  "duration": 343950300,
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
  "duration": 142873400,
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
  "duration": 137134600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_clicks_the_Login_button()"
});
formatter.result({
  "duration": 68601000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.client_is_on_the_main_page()"
});
formatter.result({
  "duration": 1364156800,
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
  "duration": 41607700,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.client_clicks_the_profile_tab()"
});
formatter.result({
  "duration": 134472500,
  "status": "passed"
});
formatter.match({
  "location": "UserStatisticsSteps.client_is_redirected_to_their_profile_page()"
});
formatter.result({
  "duration": 65492400,
  "status": "passed"
});
});