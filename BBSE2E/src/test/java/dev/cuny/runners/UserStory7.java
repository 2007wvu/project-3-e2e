package dev.cuny.runners;

import static org.junit.Assert.*;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import dev.cuny.pages.CreateApplication;
import dev.cuny.pages.LoginPage;

public class UserStory7 {

	public static WebDriver driver;
	public static CreateApplication createApplication;
	public static LoginPage loginpage;

	@BeforeClass
	public static void setUp() {
		File file = new File("src/main/resources/chromedriver.exe");
		System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		loginpage = new LoginPage(driver);
		createApplication = new CreateApplication(driver);
	}

	@Test
	public void CreateNewApplication() throws InterruptedException {

		// login as admin
		driver.manage().window().maximize();
		driver.get("http://localhost:4200");

		loginpage.username.clear();
		loginpage.username.sendKeys("TheRaidman");

		loginpage.password.clear();
		loginpage.password.sendKeys("password");

		loginpage.loginButton.click();

		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(createApplication.applicationsTab));

		createApplication.applicationsTab.click();

		wait.until(ExpectedConditions.visibilityOf(createApplication.numberOfApplications));

		Thread.sleep(10000);
		int lengthBefore = Integer.parseInt(createApplication.numberOfApplications.getAttribute("innerText"));

		Assert.assertEquals(createApplication.formDiv.isDisplayed(), true);
		createApplication.appointTitle.sendKeys("CucumberTest0");
		createApplication.appointUrl.sendKeys("CucumberGitHubUrl");
		createApplication.saveBtn.click();

		Thread.sleep(10000);
		int lengthAfter = Integer.parseInt(createApplication.numberOfApplications.getAttribute("innerText"));
		Assert.assertEquals(1, (lengthAfter - lengthBefore));

	}

	@Test
	public void CreatePartialApplication() throws InterruptedException {

		// login as admin
		driver.manage().window().maximize();
		driver.get("http://localhost:4200");

		loginpage.username.clear();
		loginpage.username.sendKeys("TheRaidman");

		loginpage.password.clear();
		loginpage.password.sendKeys("password");

		loginpage.loginButton.click();

		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(createApplication.applicationsTab));

		createApplication.applicationsTab.click();
		Assert.assertEquals(createApplication.formDiv.isDisplayed(), true);
		createApplication.appointTitle.sendKeys("CucumberTest3");

		wait.until(ExpectedConditions.elementToBeClickable(createApplication.saveBtn));

		createApplication.saveBtn.click();

		Thread.sleep(5000);
		createApplication.saveBtn.click();

		Assert.assertEquals(createApplication.urlError.getAttribute("innerText"),
				"Application Github Link is required!");

	}

	@Test
	public void CancelNewApplication() throws InterruptedException {

		// login as admin
		driver.manage().window().maximize();
		driver.get("http://localhost:4200");

		loginpage.username.clear();
		loginpage.username.sendKeys("TheRaidman");

		loginpage.password.clear();
		loginpage.password.sendKeys("password");

		loginpage.loginButton.click();

		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(createApplication.applicationsTab));

		createApplication.applicationsTab.click();

		wait.until(ExpectedConditions.visibilityOf(createApplication.numberOfApplications));

		Thread.sleep(10000);
		int lengthBefore = Integer.parseInt(createApplication.numberOfApplications.getAttribute("innerText"));

		Assert.assertEquals(createApplication.formDiv.isDisplayed(), true);
		createApplication.appointTitle.sendKeys("CucumberTest0");
		createApplication.appointUrl.sendKeys("CucumberGitHubUrl");
		createApplication.cancel.click();

		Thread.sleep(10000);
		int lengthAfter = Integer.parseInt(createApplication.numberOfApplications.getAttribute("innerText"));

		Assert.assertEquals(0, (lengthAfter - lengthBefore));
		Assert.assertTrue(createApplication.appointTitle.getText().isBlank());
		Assert.assertTrue(createApplication.appointUrl.getText().isBlank());

	}

	@AfterClass
	public static void tearDown() {
		driver.quit();
	}
}