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
	
	@FindBy(id = "mat-tab-label-0-2")
	public WebElement requestedBugsButton;
	
	@FindBy(linkText = "Inspect")
	public WebElement inspectButton;

	@FindBy(id="viewBugs")
	public WebElement viewBugsTab;	
	
	@FindBy(id="inspectButton22")
	public WebElement inspectButton22;
	
	@FindBy(id="postedSolutionsTitle")
	public WebElement postedSolutionsTitle;
	
	@FindBy(id="solution2")
	public WebElement solution6;
	
	@FindBy(id="solution4")
	public WebElement solution4;
	
	@FindBy(id="solutStat")
	public WebElement solutStat;
	
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
	
	@FindBy(id = "bugTitleReport")
	public WebElement bugReportDetails;
	
	@FindBy (id = "return-to-view-bugs")
	public WebElement returnToViewBugsButton;
	
//	@FindBy(id = "mat-tab-label-0-0")
//	public WebElement resolvedBugsTab;
//	
//	@FindBy(id = "mat-tab-label-0-1")
//	public WebElement unresolvedBugsTab;
//	
////	@FindBy(id = "mat-tab-label-0-2")
////	public WebElement requestedBugsTab;
//	@FindBy(xpath ="//*[contains(@id, '-2')]")
//	public WebElement requestedBugsTab;
	
	@FindBy(id = "resolvedBugsTable")
	public WebElement resolvedBugsTable;
	
	@FindBy(id = "unresolvedBugsTable")
	public WebElement unresolvedBugsTable;
	
	@FindBy(id = "solution2stat")
	public WebElement solution2stat;
	
	

}
