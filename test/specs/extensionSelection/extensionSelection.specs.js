const utils = require('../../utils/basic.utils');
const extensionSelection = require('../../pageobjects/extension_selection_page/extselection.screen');
const welcomepage = require('../../pageobjects/welcomepage/welcome.screen');
//const eula = require('../pageobjects/eulapage/eula.screen');
describe('My application', () => {
    before('before test', async () => {
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        const deviceLockScreen = await driver.isLocked();
        console.log("Device Screen", deviceLockScreen);
        if(deviceLockScreen == true){
            await driver.unlock();
        }
        if(await welcomepage.SkipBtn.isDisplayed()== true){
            await welcomepage.SkipBtn.click();
        }else{
            await driver.pause(10000);
        }
        await driver.pause(10000);
    })
    it('Verify if  “Automatic” is selected by default', async () => {
        const isSelect = await extensionSelection.extesnionAutomatic.isSelected();
        const isSel = await extensionSelection.extesnionManual.isSelected();
        console.log("Automatioc: ",isSelect);
        console.log("Manual", isSel);
    });
    it('Verify click on Manual', async()=>{
        await extensionSelection.extesnionManual.click();
        await driver.pause(5000);
        const lists = await extensionSelection.extensionSelectionManual;

        
    });
});

