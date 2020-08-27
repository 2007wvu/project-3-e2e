package dev.cuny.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;


import dev.cuny.pages.CreateApplication;
import dev.cuny.pages.LoginPage;
import dev.cuny.runners.Runner;


public class CreateApplicationSteps {
	
	
	public static CreateApplication createApplication = Runner.createApplication;
	public static WebDriver driver = Runner.driver;
	

	@When("^Admin clicks on the applications tab$")
	public void admin_clicks_on_the_applications_tab() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(createApplication.applicationsTab));
		createApplication.applicationsTab.click();
		
	}

	@Then("^Application modal is displayed$")
	public int application_modal_is_displayed() throws Throwable {
		Assert.assertEquals(createApplication.formDiv.isDisplayed(), true);
		WebDriverWait wait = new WebDriverWait(driver, 2000);
		wait.until(ExpectedConditions.visibilityOf(createApplication.numberOfApplications));
		Thread.sleep(5000);
		int lengthBefore = Integer.parseInt(createApplication.numberOfApplications.getAttribute("innerText"));
		return lengthBefore;
	}
	
	@When("^Admin adds \"([^\"]*)\" in the Application Title$")
	public void admin_adds_in_the_Application_Title(String arg1) throws Throwable {
		createApplication.appointTitle.sendKeys(arg1);
	}

	@When("^Admin adds \"([^\"]*)\" Github Link$")
	public void admin_adds_Github_Link(String arg1) throws Throwable {
		createApplication.appointUrl.sendKeys(arg1);
	}

	@When("^Admin clicks the save button$")
	public void admin_clicks_the_save_button() throws Throwable {
		createApplication.saveBtn.click();
	}

	@Then("^Application is added$")
	public void application_is_added() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 2000);
		wait.until(ExpectedConditions.visibilityOf(createApplication.numberOfApplications));
		int lengthAfter = Integer.parseInt(createApplication.numberOfApplications.getAttribute("innerText"));
		int lengthBefore = application_modal_is_displayed();
		Assert.assertEquals(1, (lengthBefore - lengthAfter));
	}
	

	@Then("^Missing field will display an error$")
	public void missing_field_will_display_an_error() throws Throwable {
		Assert.assertEquals(createApplication.urlError.getAttribute("innerText"),
				"Application Github Link is required!");
	}

	@Then("^Application will not be submitted$")
	public void application_will_not_be_submitted() throws Throwable {
		int lengthAfter = Integer.parseInt(createApplication.numberOfApplications.getAttribute("innerText"));
		int lengthBefore = application_modal_is_displayed();
		Assert.assertEquals(0, (lengthBefore - lengthAfter));
	}



	@When("^Admin clicks the cancel button$")
	public void admin_clicks_the_cancel_button() throws Throwable {
		createApplication.cancel.click();
	}

}