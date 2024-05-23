package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions( 
		features = {"src/test/java/Feature"},
		dryRun = !true,
		snippets = SnippetType.CAMELCASE,
		monochrome  = true,
		glue = "Steps",
		plugin = {"pretty", "html:TestingReports",
				"json:Reports/Reports.json",
				"junit:Report/reports.xml"}
		)

public class Runner extends AbstractTestNGCucumberTests {

}
