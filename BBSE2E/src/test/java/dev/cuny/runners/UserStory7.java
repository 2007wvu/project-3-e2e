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

import dev.cunny.pages.CreateApplication;

public class UserStory7 {

	public static WebDriver driver;
	public static CreateApplication createApplication;

	@BeforeClass
	public static void setUp() {
		File file = new File("src/main/resources/chromedriver.exe");
		System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
	}
	
	@Test
	public void CreateNewApplication(){
		
		//login as admin
		Integer lengthBegore = Integer.parseInt(createApplication.numberOfApplications.getText());
		createApplication.applicationsTab.click();
		Assert.assertEquals(createApplication.formDiv.isDisplayed(), true);
		createApplication.appointTitle.sendKeys("CucumberTest");
		createApplication.appointUrl.sendKeys("CucumberGitHubUrl");
		createApplication.saveBtn.click();
		Integer lengthAfter = Integer.parseInt(createApplication.numberOfApplications.getText());
		Assert.assertEquals(1, (lengthAfter-lengthBegore));
		
	}
	
	@Test
	public void CreatePatialApplication(){
		
		//login as admin

		createApplication.applicationsTab.click();
		Assert.assertEquals(createApplication.formDiv.isDisplayed(), true);
		createApplication.appointTitle.sendKeys("CucumberTest");
		createApplication.saveBtn.click();
		
		Assert.assertEquals(createApplication.urlError.isDisplayed(), true);
		
	}
	
	@Test
	public void CancelNewApplication(){
		
		//login as admin
		Integer lengthBegore = Integer.parseInt(createApplication.numberOfApplications.getText());
		createApplication.applicationsTab.click();
		Assert.assertEquals(createApplication.formDiv.isDisplayed(), true);
		createApplication.appointTitle.sendKeys("CucumberCancelTest");
		createApplication.appointUrl.sendKeys("CucumberGitCancwlHubUrl");
		createApplication.cancel.click();
		Integer lengthAfter = Integer.parseInt(createApplication.numberOfApplications.getText());
		Assert.assertEquals(0, (lengthAfter-lengthBegore));
		Assert.assertTrue(createApplication.appointTitle.getText() == null);
		Assert.assertTrue(createApplication.appointUrl.getText() == null);
		
	}
	
	
	
	@AfterClass
	public static void tearDown() {
		driver.quit();
	}
}