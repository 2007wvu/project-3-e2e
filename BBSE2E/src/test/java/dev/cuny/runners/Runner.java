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
import dev.cuny.pages.CreateApplication;
import dev.cuny.pages.LoginPage;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", glue="dev.cuny.steps",    monochrome = true, 
tags = {"@Tag1"},
plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json"} )
public class Runner {
	
	public static WebDriver driver;
	public static LoginPage loginpage;
	public static CreateApplication createApplication;

	@BeforeClass
	public static void setUp() {
		File file = new File("src/main/resources/chromedriver.exe");
		System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		loginpage = new LoginPage(driver);
		createApplication = new CreateApplication(driver);
	}
	
	@AfterClass
	public static void tearDown() {
		driver.quit();
	}
}
