const queryQ =  `SELECT * FROM categories`
describe('Teste postgreSQL', function(){
    it('Entrar na base de dados', function(){
        cy.task("queryDb", {
            dbConfig: Cypress.env("db"),
            sql: queryQ
        })
        cy.task("queryDb",{
            dbConfig: Cypress.env("db"),
            sql: `INSERT INTO employees (employee_id, last_name, first_name)
            VALUES (10, 'Gutierrez', 'Mateus');`
        })
        })
    })
    
    
    

