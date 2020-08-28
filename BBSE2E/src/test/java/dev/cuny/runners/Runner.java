package dev.cuny.runners;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import dev.cuny.pages.BugReportPage;
import dev.cuny.pages.LoginPage;
import dev.cuny.pages.MainPage;
import dev.cuny.pages.ProfilePage;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", glue="dev.cuny.steps")
public class Runner {
	
	public static WebDriver driver;
	public static LoginPage loginPage;
	public static MainPage mainPage;
	public static BugReportPage bugReportPage;
	public static ProfilePage profilePage;

	@BeforeClass
	public static void setUp() {
		File file = new File("src/main/resources/chromedriver.exe");
		System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
		loginPage = new LoginPage(driver);
		mainPage = new MainPage(driver);
		bugReportPage = new BugReportPage(driver);
		profilePage = new ProfilePage(driver);
	}
	
	@AfterClass
	public static void tearDown() {
		driver.quit();
	}
}
