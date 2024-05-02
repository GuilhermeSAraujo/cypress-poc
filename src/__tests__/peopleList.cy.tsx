import { mount } from "@cypress/react18";
import { PeopleList } from "../components/peopleList";

describe("<PeopleList />", () => {
  it("Mount", () => {
    mount(<PeopleList people={[]} removePerson={() => {}} />);

    cy.get("p").contains("Nenhuma pessoa na lista").should("exist");
    cy.get("p").should("not.contain.text", "1 - João da Silva");
  });

  it("Uma pessoa na lista", () => {
    mount(
      <PeopleList
        people={[{ id: 10, name: "José de Souza" }]}
        removePerson={() => {}}
      />
    );

    cy.get("span").contains("10 - José de Souza").should("exist");
    cy.get(".emptyList").should("not.exist");
  });

  it("Removendo uma pessoa da lista", () => {
    const removePerson = cy.stub();

    mount(
      <PeopleList
        people={[{ id: 10, name: "José de Souza" }]}
        removePerson={removePerson}
      />
    );

    cy.get("span").contains("10 - José de Souza").click();

    cy.wrap(removePerson).should("be.calledWith", 10);
  });
});
