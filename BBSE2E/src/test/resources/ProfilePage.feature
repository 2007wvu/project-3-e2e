Feature: Client visits profile

	Background: Client logs in
		Given Client is on the Login page
		When Client types "Emailman" into the username field
		When Client types "password" into the password field
		When Client clicks the Login button
		Then Client should be on the main page
		
	Scenario: Client clicks on profile button and views bugs
		When Client clicks on the profile button
		Then Client should be on the profile page
		Then Table of submitted bugs should be shown
		Then Table of submitted solutions should be shown