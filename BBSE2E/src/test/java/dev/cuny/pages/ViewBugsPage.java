package dev.cuny.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ViewBugsPage {

	WebDriver driver;
	
	public ViewBugsPage (WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id = "toggle-view")
	public WebElement toggleButton;
	
	@FindBy(id = "mat-tab-label-0-1")
	public WebElement unresolvedBugsButton;
	
	@FindBy(linkText = "Inspect")
	public WebElement inspectButton;
	
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
	
	@FindBy(id = "adminBugsTable")
	public WebElement adminBugsTable;
	
	@FindBy(id = "inspectButton21")
	public WebElement inspectButton21;
	
	@FindBy(id = "bugReportTitle")
	public WebElement bugReportDetails;
	
	@FindBy (id = "return-to-view-bugs")
	public WebElement returnToViewBugsButton;
	
	@FindBy(id = "mat-tab-label-0-2")
	public WebElement requestedBugsTab;
	
	@FindBy(id = "resolvedBugsTable")
	public WebElement resolvedBugsTable;
	
}
