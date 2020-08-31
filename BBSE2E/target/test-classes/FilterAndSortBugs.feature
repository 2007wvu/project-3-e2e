Feature: Filter and sort bugs on View Bugs page

	Background: Client logs in
		Given Client is on the Login page
		When Client types "Emailman" into the username field
		When Client types "password" into the password field
		When Client clicks the Login button
		Then Client should be on the main page
		
	Scenario: Client views requested bug reports
		Given Client is on the main page
		When Client clicks on view bugs button
		Then Client should be on view bugs page
		When Client clicks on the requested bugs tab
		Then Requested bugs table is displayed
		When Client clicks inspect button on a bug
		Then Bug report view is displayed
		When Client clicks on return to view bugs button
		Then Resolved bugs table is displayed
