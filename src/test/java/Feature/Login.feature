Feature: Super Admin FitnessGram Application

 Scenario: Login Should Be Success
  Given User navigates to the FitnessGram Application
  And User Enter the Username as "Shrikant"
  And User Enter Password as "Xelpmoc@123"
  And Enable the Check Box
  When click on the Login Button
  Then User Login Success
  
 Scenario: Login Should not Be Success
  Given User navigates to the FitnessGram Application
  And User Enter the Username as "Shriknt"
  And User Enter Password as "Xelpmo@123"
  And Enable the Check Box
  When click on the Login Button
  But User Login Fail


