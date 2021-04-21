const expect = require("chai").expect;

describe("Main page test suite", () => {
  it("Test 1", () => {
    browser.url("https://demoqa.com/");
    const expectedTitle = "ToolsQA";
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.equal(expectedTitle);
  });
  it("Validate the number of tiles on the main page", () => {
    const elements = $$("div.category-cards > div");
    expect(elements.length).to.equal(6);
  });
  it("Validate the text of footer", () => {
    const span = $("#app > footer > span");
    const expectedText = "© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.";
    const actualText = span.getText();
    expect(actualText).to.equal(expectedText);
  });
  it("Validate the names of tiles", () => {
    const [
      actualElements,
      actualForms,
      actualAlerts, 
      actualWidgets,
      actualIteractions,
      actualBookStore,
    ] = $$("h5").map((el) => el.getText());
    expect(actualElements).to.equal("Elements");
    expect(actualForms).to.equal("Forms");
    expect(actualAlerts).to.equal("Alerts, Frame & Windows");
    expect(actualWidgets).to.equal("Widgets");
    expect(actualIteractions).to.equal("Interactions");
    expect(actualBookStore).to.equal("Book Store Application");
  });
  it("Click on Elements tile and validate the target URL", () => {
    browser.maximizeWindow();
    const element = $$(".category-cards > div")[0];
    element.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal("https://demoqa.com/elements");
  });
});
//it('click on Forms tile and validate the target URL', () => {
//const element = $$('.category-cards > div')[1];
//element.click();
//const actualURL = browser.getUrl();
//expect(actualURL).to.equal('https://demoqa.com/forms');
//});
//});
