$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ClientViewResolvedBugs.feature");
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
  "duration": 1227543200,
  "status": "passed"
});
formatter.match({
  "location": "ClientViewResolvedBugsSteps.the_user_signs_in_as_a_client()"
});
formatter.result({
  "duration": 188431200,
  "status": "passed"
});
formatter.match({
  "location": "ClientViewResolvedBugsSteps.the_client_clicks_view_bugs()"
});
formatter.result({
  "duration": 113809600,
  "status": "passed"
});
formatter.match({
  "location": "ClientViewResolvedBugsSteps.the_client_is_on_the_bug_page_viewing_resolved_bugs()"
});
formatter.result({
  "duration": 2000766300,
  "status": "passed"
});
});