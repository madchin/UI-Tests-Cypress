// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('seedData', (path) => {
    return cy.request(path).then(res => {
        cy.writeFile('cypress/fixtures/data.json', res.body)
    })
})

Cypress.Commands.add('wrapProductsOnSpecifiedPage', (readFilePath, productType, categoryType) => {
    cy.readFile(readFilePath).then(({ products }) => {
        cy.wrap(products.filter(({brand, category: {category}, category: {usertype: {usertype}}}) => {
            return categoryType === 'Brand' 
            ? brand === categoryType 
            : category === categoryType && usertype === productType
            
        }))
    })
})