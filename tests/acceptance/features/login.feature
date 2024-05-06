Feature: Login Feature
    Como usuario quiero poder iniciar sesión en la aplicación para poder acceder a mi información personal
    Scenario: Deberia poder hacer login con mis credenciales validas
        Given I Navigate to the login page
        And I enter username 'standard_user'
        And I enter password 'secret_sauce'
        When I click on the login button
        Then I will be navigated to home page