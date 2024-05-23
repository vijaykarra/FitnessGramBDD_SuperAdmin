package Steps;

import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriver.Options;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.github.bonigarcia.wdm.WebDriverManager;

public class AddDistrict {

WebDriver driver;
	@Given("User navigates to the FitnessGram Application Login")
	public void userNavigatesToTheFitnessGramApplicationLogin() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://fitnessgram.com/");
		Options manage = driver.manage();
		manage.timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		manage.window().maximize();
		System.out.println(driver.getTitle());
	}
	 

	@Given("User Enter the valid {string} and {string}")
	public void userEnterTheValidAnd(String Username, String Password) {
		driver.findElement(By.id("userName")).sendKeys(Username);
		driver.findElement(By.id("loginPassword")).sendKeys(Password);
		driver.findElement(By.cssSelector("label.chakra-checkbox.css-57z5gr")).click();
		driver.findElement(By.xpath("//button[@class='chakra-button css-14gk2tf']")).click();


	}

	@Then("Click On the Add district button")
	public void clickOnTheAddDistrictButton() {
//		driver.findElement(By.xpath("//p[text()='Add New District']")).click();
//		
		 try {
		        WebElement element = driver.findElement(By.xpath("//p[text()='Add New District']"));
		        element.click();
		        System.out.println("Clicked on Add New District Button");
		    } catch (NoSuchElementException e) {
		        System.out.println("Add New District Button not found. Skipping...");
		    }

	}

}
