package dev.cuny.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BugReportPage {

	WebDriver driver;
	
	public BugReportPage (WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id = "bugReport31")
	public WebElement bugReportTitle;
	
	@FindBy(id = "txtSolTitle")
	public WebElement solutionTitle;
	
	@FindBy(id = "txtSolDescribtion")
	public WebElement solutionDescription;
	
	@FindBy(id = "cancelButton")
	public WebElement cancelButton;
	
	@FindBy(id = "submitButton")
	public WebElement submitButton;
}
