package dev.cuny.runners;

import static org.junit.Assert.*;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import dev.cuny.pages.LoginPage;
import dev.cuny.pages.UserStatistics;

public class UserStory6 {

	public static WebDriver driver;
	public static UserStatistics userStatistic;
	public static LoginPage loginpage;

	@BeforeClass
	public static void setUp() {
		File file = new File("src/main/resources/chromedriver.exe");
		System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
		loginpage = new LoginPage(driver);
		userStatistic = new UserStatistics(driver);
	}
	
	@Test
	public void LeaderboardIsDisplayed (){
		//login as client
		driver.manage().window().maximize();
		driver.get("http://localhost:4200");

		loginpage.username.clear();
		loginpage.username.sendKeys("posttest");

		loginpage.password.clear();
		loginpage.password.sendKeys("password");

		loginpage.loginButton.click();
		
		Assert.assertEquals(userStatistic.mainLeaderboardRow.isDisplayed(), true);
				
	}
	
	@Test
	public void ProfileInfoIsDisplayed (){
		
		//login as client
		driver.manage().window().maximize();
		driver.get("http://localhost:4200");

		loginpage.username.clear();
		loginpage.username.sendKeys("posttest");

		loginpage.password.clear();
		loginpage.password.sendKeys("password");

		loginpage.loginButton.click();
		
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(userStatistic.profileTab));
		userStatistic.profileTab.click();
		
		Assert.assertTrue(userStatistic.profileDetail.getText() != null);
		Assert.assertEquals(userStatistic.profilePage.isDisplayed(), true);
		Assert.assertEquals(userStatistic.pointsDiv.isDisplayed(), true);
		Assert.assertEquals(userStatistic.solutionTableDiv.isDisplayed(), true);
		Assert.assertEquals(userStatistic.bugTableDiv.isDisplayed(), true);
				
	}
	
	@Test
	public void ProfilePageIsDisplayed (){
		
		//login as client
		driver.manage().window().maximize();
		driver.get("http://localhost:4200");

		loginpage.username.clear();
		loginpage.username.sendKeys("posttest");

		loginpage.password.clear();
		loginpage.password.sendKeys("password");

		loginpage.loginButton.click();
		
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(userStatistic.profileTab));
		userStatistic.profileTab.click();
		
		userStatistic.profileTab.click();
		Assert.assertTrue(userStatistic.profileDetail.getText() != null);

	}
	
	
	
	
	@AfterClass
	public static void tearDown() {
		driver.quit();
	}
}
