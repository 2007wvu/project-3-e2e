Feature: Admin views and inspects submitted bugs

	Background: Client logs in
		Given Client is on the Login page
		When Client types "Emailman" into the username field
		When Client types "password" into the password field
		When Client clicks the Login button
		Then Client should be on the main page
		
	Scenario: Admin opens bug report 