describe("Meu primeiro teste", () => {
  it("Ver se o nome consta", () => {
    cy.visit("https://emgula.vercel.app/");

    cy.get("header > h1").should("have.text", "EmGula");
  });

  it("Ver se tem 4 menus", () => {
    cy.visit("https://emgula.vercel.app/");

    cy.get("header nav ul li").should("have.length", 4);
  });

  it("Ver se tem 4 menus", () => {
    cy.visit("https://emgula.vercel.app/");

    cy.get("header nav ul li").should("have.length", 4);
  });

  it("Ver se dark mode", () => {
    cy.visit("https://emgula.vercel.app/");

    cy.get("button.fixed").should("have.length", 1).click();

    cy.get("header").should("have.css", "background-color", "rgb(31, 41, 55)");
  });
});
