Feature: Contador Simple
    El usuario desea usar el contador para incrementar o decrementar un valor en una unidad.
    Scenario: Contador es incrementado
        Given el usuario visita la pagina home
        When el usuario hace click en el boton +
        Then El usuario ve el contador incrementarse
    Scenario: Contador es decrementado
        Given el usuario visita la pagina home
        When el usuario hace click en el boton -
        Then El usuario ve el contador reducirse