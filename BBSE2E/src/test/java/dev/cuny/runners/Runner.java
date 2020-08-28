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
import dev.cuny.pages.CreateApplication;
import dev.cuny.pages.LoginPage;
import dev.cuny.pages.UserStatistics;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", glue="dev.cuny.steps",
//tags = {"@UserStory6.1, @UserStory6.2, @UserStory6.3"},
plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json"} )
public class Runner {
	
	public static WebDriver driver;

	public static LoginPage loginPage;
	public static MainPage mainPage;
	public static BugReportPage bugReportPage;
	public static ProfilePage profilePage;
	public static CreateApplication createApplication;
	public static UserStatistics userStatistics;


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
		driver.manage().window().maximize();
	
		createApplication = new CreateApplication(driver);
		userStatistics = new UserStatistics(driver);

	}
	
	@AfterClass
	public static void tearDown() {
		driver.quit();
	}
}
