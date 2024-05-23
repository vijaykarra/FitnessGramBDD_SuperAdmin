package Hooks;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.AfterStep;
import cucumber.api.java.Before;
import cucumber.api.java.BeforeStep;

public class Myhooks {
	@Before
	public void beforescenario(Scenario sceanrio) {
		System.out.println("Scenario name - Before scenario: ");
		System.out.println(sceanrio.getName());
	}
	@After
	public void Afterscenario(Scenario sceanrio) {
		boolean failed = sceanrio.isFailed();
		System.out.println("is failed?" +failed );
	}
	@BeforeStep
	public void beforestep(Scenario sceanrio) {
		
}
	@AfterStep
	public void Afterstep(Scenario sceanrio) {
	
}

}
