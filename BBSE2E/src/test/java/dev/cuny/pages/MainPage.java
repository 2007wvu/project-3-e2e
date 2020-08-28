package dev.cuny.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MainPage {

	WebDriver driver;
	
	public MainPage (WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id = "mat-expansion-panel-header-0")
	public WebElement firstApplication;
	
	@FindBy(linkText = "My email services is failing to send emails.")
	public WebElement firstBug;
	
	@FindBy(linkText = "Profile")
	public WebElement profileButton;
	
	@FindBy(linkText = "Logout")
	public WebElement logoutButton;
	
	@FindBy(id = "mainBanner")
	public WebElement mainBanner;

	
}
