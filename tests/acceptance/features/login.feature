Feature: Login Feature
    Como usuario quiero poder iniciar sesión en la aplicación para poder acceder a mi información personal
    Scenario: Deberia poder hacer login con mis credenciales validas
        Given Navego a la pagina de login
        And Ingreso el nombre de usuario 'standard_user'
        And Ingreso el password 'secret_sauce'
        When Hago click en el boton de login
        Then Se me hara navegar a la pagina de inicio