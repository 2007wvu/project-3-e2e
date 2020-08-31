package dev.cunny.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateApplication {
	
WebDriver driver;
	
	public CreateApplication(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	

		@FindBy(id="applicationsTab")
		public WebElement applicationsTab;
		
		@FindBy(id="formDiv")
		public WebElement formDiv;
		
		@FindBy(id="appointTitle")
		public WebElement appointTitle;
		
		
		@FindBy(id="appointUrl")
		public WebElement appointUrl;
		
		@FindBy(id="save")
		public WebElement saveBtn;
		
		@FindBy(tagName="ng-reflect-length")
		public WebElement numberOfApplications;
		
		
		@FindBy(id="tErr")
		public WebElement titleError;
		
		
		@FindBy(id="lErr")
		public WebElement urlError;
		
		
		@FindBy(id="canc")
		public WebElement cancel;

}
