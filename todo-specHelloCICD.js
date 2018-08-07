var prodPage = require('../automationProtractor/PageObjects/TestProd');


describe('Product list Page', () => {
    it('Prod1 test', () => {

        prodPage.clickOnProd(0);
        expect(prodPage.priceProd.getText()).toBe('$ 10');

    });

    it('Prod2 test', () => {

        prodPage.clickOnProd(1);
        expect(prodPage.priceProd.getText()).toBe('$ 15.99');

    });

    it('Prod3 test', () => {

        prodPage.clickOnProd(2);
        expect(prodPage.priceProd.getText()).toBe('$ 5');

    });

});