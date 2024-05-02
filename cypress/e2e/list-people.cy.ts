/// <reference types="cypress" />

describe("list people", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Três pessoas na lista por padrão", () => {
    cy.get(".personItem").should("have.length", 3);

    cy.get(".personItem").first().should("have.text", "1 - João da Silva");
    cy.get(".personItem").last().should("have.text", "3 - Givanildo Vieira");
  });

  it("Removendo uma pessoa da lista", () => {
    cy.get(".personItem").should("have.length", 3);

    cy.wait(3000);
    cy.get(".personItem").first().click();

    cy.get(".personItem").should("have.length", 2);
    cy.get(".personItem").first().should("have.text", "2 - Maria dos Santos");
  });

  it("Removendo todas as pessoas da lista", () => {
    cy.get(".personItem").should("have.length", 3);

    cy.wait(3000);
    cy.get(".personItem").first().click();
    cy.wait(3000);
    cy.get(".personItem").first().click();
    cy.wait(3000);
    cy.get(".personItem").first().click();
    cy.wait(3000);

    cy.get(".personItem").should("have.length", 0);
    cy.get("p").contains("Nenhuma pessoa na lista").should("exist");
  });

  it("Adicionando uma pessoa na lista", () => {
    cy.get("button").contains("Adicionar pessoa").click();

    cy.wait(3000);

    cy.get('input[placeholder="Nome"]').type("Pessoa Teste Cypress");

    cy.wait(3000);

    cy.get("button").contains("Adicionar").click();

    cy.get(".personItem").should("have.length", 4);
    cy.get(".personItem")
      .last()
      .should("have.text", "4 - Pessoa Teste Cypress");
  });
});
