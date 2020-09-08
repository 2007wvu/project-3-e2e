package dev.cuny.steps;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

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
	    WebElement requestedBugsTab = driver.findElement(By.xpath("//div[substring(@id,string-length(@id) -string-length('-2') +1) = '-2']"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(requestedBugsTab));
	    requestedBugsTab.click();
	}
	@When("^Client clicks on the unresolved bugs tab$")
	public void client_clicks_on_the_unresolved_bugs_tab() throws Throwable {
	    WebElement unresolvedBugsTab = driver.findElement(By.xpath("//div[substring(@id,string-length(@id) -string-length('-1') +1) = '-1']"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(unresolvedBugsTab));
	    unresolvedBugsTab.click();
	}	
	@When("^Client clicks on the resolved bugs tab$")
	public void client_clicks_on_the_resolved_bugs_tab() throws Throwable {
	    WebElement resolvedBugsTab = driver.findElement(By.xpath("//div[substring(@id,string-length(@id) -string-length('-0') +1) = '-0']"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(resolvedBugsTab));
	    resolvedBugsTab.click();
	}
	@Then("^Requested bugs table is displayed$")
	public void requested_bugs_table_is_displayed() throws Throwable {
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.adminBugsTable));
	    Assert.assertTrue(viewBugsPage.adminBugsTable.isDisplayed());
	}
	
	@When("^Client clicks inspect button on a requested bug$")
	public void client_clicks_inspect_button_on_a_requested_bug() throws Throwable {
		Thread.sleep(2000);
	    WebElement inspectButtonRequested = driver.findElement(By.id("inspectButton70"));
	    inspectButtonRequested.click();
	}

	@When("^Client clicks inspect button on a unresolved bug$")
	public void client_clicks_inspect_button_on_a_unresolved_bug() throws Throwable {
		Thread.sleep(2000);
		WebElement inspectButtonUnresolved = driver.findElement(By.linkText("Inspect"));
	    inspectButtonUnresolved.click();
	}

	@When("^Client clicks inspect button on a resolved bug$")
	public void client_clicks_inspect_button_on_a_resolved_bug() throws Throwable {
		Thread.sleep(2000);
		WebElement inspectButtonResolved = driver.findElement(By.id("inspectButton1"));
	    inspectButtonResolved.click();
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
	@Then("^Unresolved bugs table is displayed$")
	public void unresolved_bugs_table_is_displayed() throws Throwable {
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.unresolvedBugsTable));
	    Assert.assertTrue(viewBugsPage.unresolvedBugsTable.isDisplayed());
	}
	
	@When("^Client types location into search bar$")
	public void client_types_location_into_search_bar() throws Throwable {
	    WebElement search = driver.findElement(By.xpath("//input[@ng-reflect-placeholder='Search Bugs']"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(search));
	    search.sendKeys("line 342");
	}
	
	@When("^Client clears search bar$")
	public void client_clears_search_bar() throws Throwable {
	    WebElement search = driver.findElement(By.xpath("//input[@ng-reflect-placeholder='Search Bugs']"));
	    search.clear();
	}

	@Then("^Only bugs from that location should be visible$")
	public void only_bugs_from_that_location_should_be_visible() throws Throwable {
	    WebElement line = driver.findElement(By.tagName("app-admin-bugs-table"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(line));
		Assert.assertTrue(line.getText().contains("Line 342"));
	}
	
	@When("^Client clicks on title sort button$")
	public void client_clicks_on_title_sort_button() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 1);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.titleSortButton));
		viewBugsPage.titleSortButton.click();
	}

	@Then("^Bugs should be sorted alphabetically by title$")
	public void bugs_should_be_sorted_alphabetically_by_title() throws Throwable {
	    WebElement title = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[1]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(title));
	    Assert.assertEquals("DataBuffer doesn't write to file called: The flood",title.getText());
	}
	
	@Then("^Bugs should be sorted reverse alphabetically by title$")
	public void bugs_should_be_sorted_reverse_alphabetically_by_title() throws Throwable {
	    WebElement title = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[1]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(title));
	    Assert.assertEquals("When using the code from Bioshock it causes my compter", title.getText());
	}
	
	@When("^Client clicks on date sort button$")
	public void client_clicks_on_date_sort_button() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 1);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.dateSortButton));
		viewBugsPage.dateSortButton.click();
	}

	@Then("^Bugs should be sorted by date$")
	public void bugs_should_be_sorted_by_date() throws Throwable {
	    WebElement title = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[6]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(title));
	    Assert.assertEquals("8/26/20, 8:00 PM", title.getText());
	}

	@Then("^Bugs should be sorted reverse by date$")
	public void bugs_should_be_sorted_reverse_by_date() throws Throwable {
	    WebElement title = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[6]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(title));
	    Assert.assertEquals("5/2/20, 8:00 PM", title.getText());
	}
	
	@When("^Client clicks on severity sort button$")
	public void client_clicks_on_severity_sort_button() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 1);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.severitySortButton));
		viewBugsPage.severitySortButton.click();
	}

	@Then("^Bugs should be sorted by severity$")
	public void bugs_should_be_sorted_by_severity() throws Throwable {
	    WebElement title = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[4]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(title));
	    Assert.assertEquals("High", title.getText());
	}

	@Then("^Bugs should be sorted reverse by severity$")
	public void bugs_should_be_sorted_reverse_by_severity() throws Throwable {
	    WebElement title = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[4]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(title));
	    Assert.assertEquals("Low", title.getText());
	}
	
	@When("^Client clicks on priority sort button$")
	public void client_clicks_on_priority_sort_button() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 1);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.prioritySortButton));
		viewBugsPage.prioritySortButton.click();
	}

	@Then("^Bugs should be sorted by priority$")
	public void bugs_should_be_sorted_by_priority() throws Throwable {
	    WebElement title = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[5]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(title));
	    Assert.assertEquals("High", title.getText());
	}

	@Then("^Bugs should be sorted reverse by priority$")
	public void bugs_should_be_sorted_reverse_by_priority() throws Throwable {
	    WebElement title = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[5]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(title));
	    Assert.assertEquals("Low", title.getText());
	}

	@When("^Client clicks on application sort button$")
	public void client_clicks_on_application_sort_button() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 1);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.applicationSortButton));
		viewBugsPage.applicationSortButton.click();
	}

	@Then("^Bugs should be sorted by application$")
	public void bugs_should_be_sorted_by_application() throws Throwable {
	    WebElement title = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[2]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(title));
	    Assert.assertEquals("Bug Bounty System", title.getText());
	}

	@Then("^Bugs should be sorted reverse by application$")
	public void bugs_should_be_sorted_reverse_by_application() throws Throwable {
	    WebElement title = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[2]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(title));
	    Assert.assertEquals("Pizza Ordering Application", title.getText());
	}
	
	@When("^Client clicks on location sort button$")
	public void client_clicks_on_location_sort_button() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 1);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.locationSortButton));
		viewBugsPage.locationSortButton.click();
	}

	@Then("^Bugs should be sorted by location$")
	public void bugs_should_be_sorted_by_location() throws Throwable {
	    WebElement title = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[3]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(title));
	    Assert.assertEquals("I have no Idea", title.getText());
	}

	@Then("^Bugs should be sorted reverse by location$")
	public void bugs_should_be_sorted_reverse_by_location() throws Throwable {
	    WebElement title = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[3]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(title));
	    Assert.assertEquals("Swift encoder", title.getText());
	}

	@When("^Client clicks on developer sort button$")
	public void client_clicks_on_developer_sort_button() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 1);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.developerSortButton));
		viewBugsPage.developerSortButton.click();
	}

	@Then("^Bugs should be sorted by developer$")
	public void bugs_should_be_sorted_by_developer() throws Throwable {
	    WebElement title = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[7]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(title));
	    Assert.assertEquals("AlwaysDeugging", title.getText());
	}

	@Then("^Bugs should be sorted reverse by developer$")
	public void bugs_should_be_sorted_reverse_by_developer() throws Throwable {
	    WebElement title = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[7]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(title));
	    Assert.assertEquals("user1", title.getText());
	}
	
	@When("^Client clicks application filter select$")
	public void client_clicks_application_filter_select() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 1);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.applicationFilter));
		viewBugsPage.applicationFilter.click();
	}

	@When("^Client clicks an application$")
	public void client_clicks_an_application() throws Throwable {
	    List<WebElement> field = driver.findElements(By.className("mat-option-text"));
	    field.get(1).click();
	}

	@Then("^Bugs of that application should be shown$")
	public void bugs_of_that_application_should_be_shown() throws Throwable {
	    WebElement app = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[2]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(app));
	    Assert.assertEquals("Bug Bounty System", app.getText());
	}
	
	@When("^Client clicks all$")
	public void client_clicks_all() throws Throwable {
		Thread.sleep(1000);
	    List<WebElement> field = driver.findElements(By.className("mat-option-text"));
	    field.get(0).click();
	}

	@When("^Client clicks severity filter select$")
	public void client_clicks_severity_filter_select() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 1);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.severityFilter));
		viewBugsPage.severityFilter.click();
	}

	@When("^Client clicks a severity$")
	public void client_clicks_a_severity() throws Throwable {
		Thread.sleep(1000);
	    List<WebElement> field = driver.findElements(By.className("mat-option-text"));
	    field.get(1).click();
	}

	@Then("^Bugs of that severity should be shown$")
	public void bugs_of_that_severity_should_be_shown() throws Throwable {
	    WebElement title = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[4]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(title));
	    Assert.assertEquals("Low", title.getText());
	}

	@When("^Client clicks priority filter select$")
	public void client_clicks_priority_filter_select() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 1);
	    wait.until(ExpectedConditions.visibilityOf(viewBugsPage.priorityFilter));
		viewBugsPage.priorityFilter.click();
	}

	@When("^Client clicks a priority$")
	public void client_clicks_a_priority() throws Throwable {
		Thread.sleep(1000);
	    List<WebElement> field = driver.findElements(By.className("mat-option-text"));
	    field.get(1).click();
	}

	@Then("^Bugs of that priority should be shown$")
	public void bugs_of_that_priority_should_be_shown() throws Throwable {
	    WebElement title = driver.findElement(By.xpath("//*[@id=\"resolvedBugsTable\"]/div[2]/table/tbody/tr[1]/td[5]"));
	    WebDriverWait wait = new WebDriverWait(driver, 2);
	    wait.until(ExpectedConditions.visibilityOf(title));
	    Assert.assertEquals("Low", title.getText());
	}
}