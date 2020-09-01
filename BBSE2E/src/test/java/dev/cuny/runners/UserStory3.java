package dev.cuny.runners;

import static org.junit.Assert.*;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import dev.cuny.pages.LoginPage;
import dev.cuny.pages.ReportBug;
import dev.cuny.pages.SelectAppNewBug;
import dev.cuny.pages.SelectPriorityNewBug;
import dev.cuny.pages.SelectSeverityNewBug;

public class UserStory3 {
	
	public static WebDriver driver;
	public static ReportBug reportBug;
	public static LoginPage loginpage;
	public static SelectAppNewBug selectClass;
	public static SelectSeverityNewBug severitySelect;
	public static SelectPriorityNewBug prioritySelect;

	@BeforeClass
	public static void setUp() {
		File file = new File("src/main/resources/chromedriver.exe");
		System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		loginpage = new LoginPage(driver);
		reportBug = new ReportBug(driver);
		//selectClass = new SelectClass(driver);
	}

	@Test
	public void addNewBug () throws InterruptedException{
			//login as client
			driver.get("http://localhost:4200");
			driver.manage().window().maximize();
			
			WebDriverWait wait = new WebDriverWait(driver, 50);
			wait.until(ExpectedConditions.visibilityOf(loginpage.username));
			
			loginpage.username.clear();
			loginpage.username.sendKeys("posttest");

			loginpage.password.clear();
			loginpage.password.sendKeys("password");

			loginpage.loginButton.click();
			
			reportBug.reportNewBug.click();
			
			Assert.assertEquals(reportBug.newBugReport.getText(), "Bug Report #");
			reportBug.bugTitle.sendKeys("Bugtitle");
			String bugTitle = "Bugtitle";
			
			selectClass = new SelectAppNewBug(driver);

			selectClass.appsSelect.selectByVisibleText("Bug Bounty System");
	
			reportBug.suspectedLocation.sendKeys("suspected location");
			
			severitySelect = new SelectSeverityNewBug(driver);
			severitySelect.severitySelect.selectByVisibleText("Low");
			
			prioritySelect = new SelectPriorityNewBug(driver);

			prioritySelect.prioritySelect.selectByVisibleText("Low");
			
			reportBug.descriptionHTML.sendKeys(Keys.TAB);
			reportBug.descriptionHTML.sendKeys("Description");
				
			reportBug.reproductionHTML.sendKeys(Keys.TAB);
			reportBug.reproductionHTML.sendKeys("Steps Steps");

			reportBug.BugSubmit.click();
			
			wait.until(ExpectedConditions.visibilityOf(reportBug.BugTitleReport));
			
			Thread.sleep(5000);
			System.out.println("Report page:");
			System.out.println(reportBug.BugTitleReport.getAttribute("innerText"));
			System.out.println("Curent title");
			System.out.println(bugTitle);
			
			Assert.assertEquals(reportBug.BugTitleReport.getText(), bugTitle);
			
		}
	
	@AfterClass
	public static void tearDown() {
		driver.quit();
	}

}
