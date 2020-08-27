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
import dev.cuny.pages.UserStatistics;

public class UserStory6 {

	public static WebDriver driver;
	public static UserStatistics userStatistic;

	@BeforeClass
	public static void setUp() {
		File file = new File("src/main/resources/chromedriver.exe");
		System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
	}
	
	@Test
	public void LeaderboardIsDisplayed (){
		//login as client
		Assert.assertEquals(userStatistic.mainLeaderboardRow.isDisplayed(), true);
				
	}
	
	@Test
	public void ProfileInfoIsDisplayed (){
		
		//login as client
		
		userStatistic.profileTab.click();
		Assert.assertTrue(userStatistic.userNameProfile.getText() != null);
		Assert.assertEquals(userStatistic.profilePage.isDisplayed(), true);
		Assert.assertEquals(userStatistic.pointsDiv.isDisplayed(), true);
		Assert.assertEquals(userStatistic.solutionTableDiv.isDisplayed(), true);
		Assert.assertEquals(userStatistic.bugTableDiv.isDisplayed(), true);
				
	}
	
	@Test
	public void ProfilePageIsDisplayed (){
		
		//login as client
		
		userStatistic.profileTab.click();
		Assert.assertTrue(userStatistic.userNameProfile.getText() != null);

	}
	
	
	
	
	@AfterClass
	public static void tearDown() {
		driver.quit();
	}
}
