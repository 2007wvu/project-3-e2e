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
	
}
