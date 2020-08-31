Feature: As an Admin I want to view bug report metrics
	
	Scenario: Admin viewing BugBounty metrics
		Given I am logged in as an admin 
		When I click the metrics tab
		Then I am viewing metrics for bug bounty
	
	Scenario: Admin viewing developer metrics
		Given I am logged in as an admin
		When I click the metrics tab
		When I click the developers button
		Then I see metrics on the developers
		
	Scenario: Admin viewing application metrics
		Given I am logged in as an admin
		When I click the metrics tab
		When I click the applications button
		Then I see metrics on the applications
		