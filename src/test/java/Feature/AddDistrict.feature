Feature: Super Admin FitnessGram Application

  Scenario Outline: Login Should Be Success
    Given User navigates to the FitnessGram Application Login
    And User Enter the valid "<userName>" and "<loginPassword>"
    Then Click On the Add district button

    Examples: 
      | userName             | loginPassword |
      | Shrikant             | Xelpmoc@123   |
      | stateadmin@gmail.com | Xelpmoc@123   |
