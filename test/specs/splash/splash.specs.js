const utils = require('../../utils/basic.utils');
//const eula = require('../pageobjects/eulapage/eula.screen');
describe('My application', () => {
    before('before test', async () => {
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        const deviceLockScreen = await driver.isLocked();
        console.log("Device Screen", deviceLockScreen);
        if(deviceLockScreen == true){
            await driver.unlock();
        }
    })
    it('Bombardier Logo Test', async () => {
        
    });
    it('Toggle WIFI', async () => {
        const act = await driver.getCurrentPackage();
        console.log(act);
        console.log(await driver.isKeyboardShown());
        await driver.pause(10000);
    })
});

