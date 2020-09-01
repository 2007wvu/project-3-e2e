package dev.cuny.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MetricsPage {

	private WebDriver driver;
	
	public MetricsPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(linkText = "Developers")
	public WebElement developerButton;
	
	@FindBy(linkText = "Applications")
	public WebElement applicationButton;
	
	@FindBy(xpath = "/html/body/app-root/div/app-metrics-page/div/div/div[1]/div/div[3]/a")
	public WebElement applicationSideButton;
	
	@FindBy(id = "average-time")
	public WebElement peopleCounter;
	
	@FindBy(className = "canvasjs-chart-canvas")
	public WebElement applicationGraph;
}
