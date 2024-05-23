package Steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriver.Options;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class system {

	WebDriver driver;

	@Given("User navigates to the FitnessGram Application")
	public void userNavigatesToTheFitnessGramApplication() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://fitnessgram.com/");
		Options manage = driver.manage();
		manage.timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		manage.window().maximize();
		System.out.println(driver.getTitle());
	}

	/*
	 * @And("User Enter the Username as Shrikant") public void
	 * userEnterTheUsernameAsShriknat() {
	 * driver.findElement(By.id("userName")).sendKeys("Shrikant");
	 * 
	 * }
	 * 
	 * @And("User Enter Password as Xelpmoc@{int}") public void
	 * userEnterPasswordAsXelpmoc(Integer int1) {
	 * driver.findElement(By.id("loginPassword")).sendKeys("Xelpmoc@123"); }
	 */
	
	@Given("User Enter the Username as {string}")
	public void userEnterTheUsernameAs(String username) {
		driver.findElement(By.id("userName")).sendKeys(username);

	}

	@Given("User Enter Password as {string}")
	public void userEnterPasswordAs(String Password) {
		driver.findElement(By.id("loginPassword")).sendKeys(Password);
	}
	@And("Enable the Check Box")
	public void enableTheCheckBox() {
		driver.findElement(By.cssSelector("label.chakra-checkbox.css-57z5gr")).click();

	}

	@When("click on the Login Button")
	public void clickOnTheLoginButton() {
		driver.findElement(By.xpath("//button[@class='chakra-button css-14gk2tf']")).click();


	}

	@Then("User Login Success")
	public void userLoginSuccess() {
		String text = 	driver.findElement(By.xpath("//p[text()='Shrikant']")).getText();
		System.out.println(text);

	}
	
	/*
	 * @Given("User Enter the Username as Shriknt") public void
	 * userEnterTheUsernameAsShriknt() {
	 * driver.findElement(By.id("userName")).sendKeys("Shriknt");
	 * 
	 * }
	 * 
	 * @Given("User Enter Password as Xelpmo@{int}") public void
	 * userEnterPasswordAsXelpmo(Integer int1) {
	 * driver.findElement(By.id("loginPassword")).sendKeys("Xelpmo@123"); }
	 */

	@When("User Login Fail")
	public void userLoginFail() {
		String text = driver.findElement(By.xpath("(//p[@class='chakra-text css-vuvd7r'])[2]")).getText();
		Assert.assertEquals(text.trim(), "Username, Password or District ID you entered does not match our records. Please try again or contact your administrator.");
	}

}
