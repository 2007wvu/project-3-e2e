package dev.cuny.steps;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import dev.cuny.pages.BugReportPage;
import dev.cuny.pages.MainPage;
import dev.cuny.pages.ProfilePage;
import dev.cuny.runners.Runner;

public class ProfileSteps {

	public static MainPage mainPage = Runner.mainPage;
	public static ProfilePage profilePage = Runner.profilePage;
	public static WebDriver driver = Runner.driver;
	
	@When("^Client clicks on the profile button$")
	public void client_clicks_on_the_profile_button() throws Throwable {
	    mainPage.profileButton.click();
	}

	@Then("^Client should be on the profile page$")
	public void client_should_be_on_the_profile_page() throws Throwable {
	    Assert.assertTrue(profilePage.aboutMeSection.isDisplayed());
	}

	@Then("^Table of submitted bugs should be shown$")
	public void table_of_submitted_bugs_should_be_shown() throws Throwable {
		Assert.assertTrue(profilePage.bugTable.isDisplayed());
	}

	@Then("^Table of submitted solutions should be shown$")
	public void table_of_submitted_solutions_should_be_shown() throws Throwable {
		Assert.assertTrue(profilePage.solutionTable.isDisplayed());
	}
	
}
