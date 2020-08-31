package dev.cuny.steps;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import dev.cuny.pages.LoginPage;
import dev.cuny.pages.MainPage;
import dev.cuny.pages.MetricsPage;
import dev.cuny.runners.Runner;
import junit.framework.Assert;

public class AdminViewMetrics {
	
	public WebDriver driver = Runner.driver;
	public LoginPage lpage = Runner.loginPage;
	public MetricsPage metricPage = Runner.metricPage;
	public MainPage mainPage = Runner.mainPage;
	
	
	@Given("^I am logged in as an admin$")
	public void i_am_logged_in_as_an_admin() throws Throwable {
	    driver.get("http://localhost:4200");
	    lpage.username.sendKeys("TheMatrix");
	    lpage.password.sendKeys("password");
	    lpage.loginButton.click();
	}

	@When("^I click the metrics tab$")
	public void i_click_the_metrics_tab() throws Throwable {
	    mainPage.metricsButton.click();
	}

	@Then("^I am viewing metrics for bug bounty$")
	public void i_am_viewing_metrics_for_bug_bounty() throws Throwable {
	    Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:4200/metrics");
	}

	@When("^I click the developers button$")
	public void i_click_the_developers_button() throws Throwable {
	    metricPage.developerButton.click();
	}

	@Then("^I see metrics on the developers$")
	public void i_see_metrics_on_the_developers() throws Throwable {
		String result = metricPage.peopleCounter.getText();
		Assert.assertNotNull(result);
	}

	@When("^I click the applications button$")
	public void i_click_the_applications_button() throws Throwable {
		Thread.sleep(10000);
		metricPage.applicationSideButton.click();
		System.out.println("canvas size" + metricPage.applicationGraph.getSize());
		Thread.sleep(1000);
	}

	@Then("^I see metrics on the applications$")
	public void i_see_metrics_on_the_applications() throws Throwable {
		Dimension size = new Dimension(1292,400);
		Assert.assertEquals(metricPage.applicationGraph.getSize(), size);
	}

}
