let prodPage = function () {
    var EC = protractor.ExpectedConditions;
    this.priceProd = element(by.className('mat-card-subtitle'));
    this.clickProd = element.all(by.className('mat-line'));

    this.clickOnProd = function (number) {

        this.clickProd.filter((element, index) => index === number).click();

    }
}

module.exports = new prodPage();