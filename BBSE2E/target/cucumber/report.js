$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdminViewBugReportMetrics.feature");
formatter.feature({
  "line": 1,
  "name": "As an Admin I want to view bug report metrics",
  "description": "",
  "id": "as-an-admin-i-want-to-view-bug-report-metrics",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 14,
  "name": "Admin viewing application metrics",
  "description": "",
  "id": "as-an-admin-i-want-to-view-bug-report-metrics;admin-viewing-application-metrics",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am logged in as an admin",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click the metrics tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click the applications button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I see metrics on the applications",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminViewMetrics.i_am_logged_in_as_an_admin()"
});
formatter.result({
  "duration": 1727152100,
  "status": "passed"
});
formatter.match({
  "location": "AdminViewMetrics.i_click_the_metrics_tab()"
});
formatter.result({
  "duration": 1624744000,
  "status": "passed"
});
formatter.match({
  "location": "AdminViewMetrics.i_click_the_applications_button()"
});
formatter.result({
  "duration": 11158207000,
  "status": "passed"
});
formatter.match({
  "location": "AdminViewMetrics.i_see_metrics_on_the_applications()"
});
formatter.result({
  "duration": 15131500,
  "status": "passed"
});
});