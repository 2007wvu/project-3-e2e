package dev.cuny.steps;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import dev.cuny.pages.ViewBugsPage;
import dev.cuny.pages.LoginPage;
import dev.cuny.pages.MainPage;
import dev.cuny.runners.Runner;
public class FilterAndSortBugsSteps {
	
	public static LoginPage loginPage = Runner.loginPage;
	public static ViewBugsPage viewBugsPage = Runner.viewBugsPage;
	public static MainPage mainPage = Runner.mainPage;
	public static WebDriver driver = Runner.driver;
	
	@Given("^Client is on the view bugs page$")
	public void client_is_on_the_view_bugs_page() throws Throwable {
	    mainPage.viewBugsButton.click();
	}
	@When("^Client clicks on the requested bugs tab$")
	public void client_clicks_on_the_requested_bugs_tab() throws Throwable {
	    viewBugsPage.requestedBugsTab.click();
	}
	@Then("^Requested bugs table is displayed$")
	public void requested_bugs_table_is_displayed() throws Throwable {
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.adminBugsTable));
	    Assert.assertTrue(viewBugsPage.adminBugsTable.isDisplayed());
	}
	@When("^Client clicks inspect button on a bug$")
	public void client_clicks_inspect_button_on_a_bug() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.inspectButton67));
	    viewBugsPage.inspectButton67.click();
	}
	@Then("^Bug report view is displayed$")
	public void bug_report_view_is_displayed() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.bugReportDetails));
	    Assert.assertTrue(viewBugsPage.bugReportDetails.isDisplayed());
	}
	@When("^Client clicks on return to view bugs button$")
	public void client_clicks_on_return_to_view_bugs_button() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.returnToViewBugsButton));
	    viewBugsPage.returnToViewBugsButton.click();
	}
	@Then("^Resolved bugs table is displayed$")
	public void resolved_bugs_table_is_displayed() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.resolvedBugsTable));
	    Assert.assertTrue(viewBugsPage.resolvedBugsTable.isDisplayed());
	}
//	@When("^Client clicks on view bugs button$")
//	public void client_clicks_on_view_bugs_button() throws Throwable {
//	    mainPage.viewBugsButton.click();
//	}
//	@Then("^Client should be on view bugs page$")
//	public void client_should_be_on_view_bugs_page() throws Throwable {
//		WebDriverWait wait = new WebDriverWait(driver, 2);
//	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.resolvedBugsTable));
//	    Assert.assertTrue(viewBugsPage.resolvedBugsTable.isDisplayed());
//	}
}