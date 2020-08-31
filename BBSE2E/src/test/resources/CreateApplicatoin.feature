Feature: As admin I want to create an application
	Background: Admin logs into their account
		Given Client is on the Login page
		When Client types "Emailman" into the username field
		When Client types "password" into the password field
		When Client clicks the Login button
		Then Client should be on the main page
	Scenario: Admin creates a new application
		When Admin clicks on the applications tab
		Then Application modal is displayed
		When Admin adds "NewCucTest" in the Application Title
		When Admin adds "NewGitCucLink" Github Link
		When Admin clicks the save button
		Then Application is added