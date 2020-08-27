Feature: As admin I want to create an application

	Background: Admin logs into their account
		Given Admin is on the Login page
		When Admin types "TheRaidman" into the username field
		When Admin types "password" into the password field
		When Admin clicks the Login button
		Then Admin is on the main page

	@Tag1
	Scenario: Admin creates a new application
		Given Admin is on the main page
		When Admin clicks on the applications tab
		Then Application modal is displayed
		When Admin adds "NewCucTest101" in the Application Title 
		When Admin adds "NewGitCucLink101" Github Link
		When Admin clicks the save button
		Then Application is added
