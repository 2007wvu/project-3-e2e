@UserStory11
Feature: Filter and sort bugs on View Bugs page
	Background: Client logs in
		Given Client is on the Login page
		When Client types "Emailman" into the username field
		When Client types "password" into the password field
		When Client clicks the Login button
		Then Client should be on the main page
		When Client clicks on view bugs button
		Then Client should be on view bugs page
		
	@11.1
	Scenario: Client views requested bug reports
		Given Client is on the view bugs page
		When Client clicks on the requested bugs tab
		Then Requested bugs table is displayed
		When Client clicks inspect button on a requested bug
		Then Bug report view is displayed
		When Client clicks on return to view bugs button
		Then Resolved bugs table is displayed
		When Client clicks on the unresolved bugs tab
		Then Unresolved bugs table is displayed
		When Client clicks inspect button on a unresolved bug
		Then Bug report view is displayed
		When Client clicks on return to view bugs button
		Then Resolved bugs table is displayed
		When Client clicks on the resolved bugs tab
		Then Resolved bugs table is displayed
		When Client clicks inspect button on a resolved bug
		Then Bug report view is displayed
		When Client clicks on return to view bugs button
		Then Resolved bugs table is displayed
	
	@11.2
	Scenario: Client searches bug by location, and filters bugs by application, severity, priority
		Given Client is on the view bugs page
		When Client types location into search bar
		Then Only bugs from that location should be visible
		
		When Client clears search bar
		When Client clicks application filter select
		When Client clicks an application
		Then Bugs of that application should be shown
		
		When Client clicks application filter select
		When Client clicks all
		When Client clicks severity filter select
		When Client clicks a severity
		Then Bugs of that severity should be shown
		
		
		When Client clicks severity filter select
		When Client clicks all
		When Client clicks priority filter select
		When Client clicks a priority
		Then Bugs of that priority should be shown
		
	@11.3
	Scenario: Client sorts bugs by title, application, location, severity, priority, date, developer
		Given Client is on the view bugs page
		When Client clicks on title sort button
		Then Bugs should be sorted alphabetically by title
		When Client clicks on title sort button
		Then Bugs should be sorted reverse alphabetically by title
		
		When Client clicks on application sort button
		Then Bugs should be sorted by application
		When Client clicks on application sort button
		Then Bugs should be sorted reverse by application
		
		When Client clicks on location sort button
		Then Bugs should be sorted by location
		When Client clicks on location sort button
		Then Bugs should be sorted reverse by location
		
		When Client clicks on severity sort button
		Then Bugs should be sorted by severity
		When Client clicks on severity sort button
		Then Bugs should be sorted reverse by severity
		
		When Client clicks on priority sort button
		Then Bugs should be sorted by priority
		When Client clicks on priority sort button
		Then Bugs should be sorted reverse by priority
				
		When Client clicks on date sort button
		Then Bugs should be sorted by date
		When Client clicks on date sort button
		Then Bugs should be sorted reverse by date
		
		When Client clicks on developer sort button
		Then Bugs should be sorted by developer
		When Client clicks on developer sort button
		Then Bugs should be sorted reverse by developer
		
		
	