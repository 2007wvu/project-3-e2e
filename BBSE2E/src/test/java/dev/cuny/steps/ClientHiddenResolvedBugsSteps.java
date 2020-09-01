package dev.cuny.steps;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import dev.cuny.pages.MainPage;
import dev.cuny.runners.Runner;
import junit.framework.Assert;

public class ClientHiddenResolvedBugsSteps {

	private WebDriver driver = Runner.driver;
	private MainPage mPage = Runner.mainPage;
	
	@Given("^The client is on the main page$")
	public void the_client_is_on_the_main_page() throws Throwable {
	    Assert.assertEquals("http://localhost:4200/main", driver.getCurrentUrl());
	}
	
	@Then("^The client does not see resolved bugs$")
	public void the_client_does_not_see_resolved_bugs() throws Throwable {
		List<WebElement> bugReports = new ArrayList<WebElement>();
		
		mPage.firstApplication.click();
		System.out.println("Bug reports: " + mPage.bugList.size());
		
  
		//bug.contains(By.className("mainBugField1"));
	  System.out.println("Bug list size: " + bugReports.size());
	}

}
