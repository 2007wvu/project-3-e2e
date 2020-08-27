package dev.cuny.steps;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import dev.cuny.pages.CreateApplication;
import dev.cuny.pages.UserStatistics;
import dev.cuny.runners.Runner;

public class UserStatisticsSteps {
	
	public static UserStatistics userStatistic = Runner.userStatistics;
	public static WebDriver driver = Runner.driver;
	

	@Then("^Leaderboard is displayed$")
	public void leaderboard_is_displayed() throws Throwable {
		Assert.assertEquals(userStatistic.mainLeaderboardRow.isDisplayed(), true);
	}

	@When("^Client clicks the profile tab$")
	public void client_clicks_the_profile_tab() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(userStatistic.profileTab));
		userStatistic.profileTab.click();
	}

	@Then("^Client is redirected to their profile page$")
	public void client_is_redirected_to_their_profile_page() throws Throwable {
		Assert.assertTrue(userStatistic.profileDetail.getText() != null);
		Assert.assertEquals(userStatistic.profilePage.isDisplayed(), true);
		
	}

	@Then("^Solutions are displayed$")
	public void solutions_are_displayed() throws Throwable {
		Assert.assertEquals(userStatistic.solutionTableDiv.isDisplayed(), true);
	}

	@Then("^Bug reports are displayed$")
	public void bug_reports_are_displayed() throws Throwable {
		Assert.assertEquals(userStatistic.bugTableDiv.isDisplayed(), true);
	}

	@Then("^Client points are displayed$")
	public void client_points_are_displayed() throws Throwable {
		Assert.assertEquals(userStatistic.pointsDiv.isDisplayed(), true);
	}

}
