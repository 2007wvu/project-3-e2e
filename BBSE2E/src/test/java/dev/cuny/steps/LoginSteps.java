package dev.cuny.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.jupiter.api.Assertions;
import dev.cuny.pages.LoginPage;
import dev.cuny.runners.Runner;

public class LoginSteps {

	public static LoginPage loginpage = Runner.loginpage;
	public static WebDriver driver = Runner.driver;
	
	@Given("^Client is on the Login page$")
	public void client_is_on_the_Login_page() throws Throwable {
	    driver.get("http://localhost:4200");
	}

	@When("^Client types \"([^\"]*)\" into the username field$")
	public void client_types_into_the_username_field(String arg1) throws Throwable {
		loginpage.username.clear();
	    loginpage.username.sendKeys(arg1);
	}

	@When("^Client types \"([^\"]*)\" into the password field$")
	public void client_types_into_the_password_field(String arg1) throws Throwable {
		loginpage.password.clear();
	    loginpage.password.sendKeys(arg1);
	}

	@When("^Client clicks the Login button$")
	public void client_clicks_the_Login_button() throws Throwable {
	    loginpage.loginButton.click();
	}

	@Then("^Client should be on the main page$")
	public void client_should_be_on_the_main_page() throws Throwable {
	    WebDriverWait wait = new WebDriverWait(driver, 5);
	    wait.until(ExpectedConditions.visibilityOf(loginpage.mainBanner));
	    Assertions.assertTrue(loginpage.mainBanner.isDisplayed());
	}

	@Then("^Login Error Message is Displayed$")
	public void login_Error_Message_is_Displayed() throws Throwable {
	    WebDriverWait wait = new WebDriverWait(driver, 5);
	    wait.until(ExpectedConditions.visibilityOf(loginpage.loginError));
	    Assertions.assertTrue(loginpage.loginError.isDisplayed());
	}

	@When("^Client clicks the log out button$")
	public void client_clicks_the_log_out_button() throws Throwable {
	    loginpage.logoutButton.click();
	}
	
	@Given("^Client is on the main page$")
	public void client_is_on_the_main_page() throws Throwable {
		driver.get("http://localhost:4200/main");
	}
}
