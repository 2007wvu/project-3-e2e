Feature: Log in to Bug Bounty System

	Scenario Outline: Client logs into their account
		Given Client is on the Login page
		When Client types "<username>" into the username field
		When Client types "<password>" into the password field
		When Client clicks the Login button
		Then Client is on the main page
		
		Examples:
		|username|password|
		|Emailman|password|
		|mo|password|
		
		
	Scenario Outline: Client logs in with invalid credentials
		Given Client is on the Login page
		When Client types "<username>" into the username field
		When Client types "<password>" into the password field
		When Client clicks the Login button
		Then Login Error Message is Displayed
		
		Examples:
		|username|password|
		|probablyNotAUsername|probablyNotAPassword|
		|notAnAdminUsername|notAnAdminPassword|