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
	
	//@FindBy(id="mat-tab-label-1-2")
	//public WebElement unresolvedBugs;
	
	@FindBy(id="inspectButton22")
	public WebElement inspectButton22;
	
	@FindBy(id="postedSolutionsTitle")
	public WebElement postedSolutionsTitle;
	
	@FindBy(id="solution10")
	public WebElement solution10;
	
	@FindBy(id="solutStat")
	public WebElement solutStat;
	
	@FindBy(id = "inspectButton67")
	public WebElement inspectButtonRequested;
	
	@FindBy(id = "inspectButton31")
	public WebElement inspectButtonUnresolved;
	
	@FindBy(id = "inspectButton1")
	public WebElement inspectButtonResolved;
	
//	@FindBy(id = "bugReport31")
//	public WebElement bugReportTitle;
	
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
	
	@FindBy(id = "mat-tab-label-0-0")
	public WebElement resolvedBugsTab;
	
	@FindBy(id = "mat-tab-label-0-1")
	public WebElement unresolvedBugsTab;
	
	@FindBy(id = "mat-tab-label-0-2")
	public WebElement requestedBugsTab;
	
	@FindBy(id = "resolvedBugsTable")
	public WebElement resolvedBugsTable;
	
	@FindBy(id = "unresolvedBugsTable")
	public WebElement unresolvedBugsTable;

}
