const utils = require('../../utils/basic.utils');
const data = require('../../data/welcome/welcome.data.json');
//import data from '../../data/welcome/welcome.data.json'
//const eula = require('../pageobjects/eulapage/eula.screen');
const welcomepage = require('../../pageobjects/welcomepage/welcome.screen');
describe('Welcome Page Test Start', () => {
    before('before test', async () => {
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        const deviceLockScreen = await driver.isLocked();
        console.log("Device Screen", deviceLockScreen);
        if(deviceLockScreen == true){
            await driver.unlock();
        }
    })
    it('Bombardier Logo Test', async () => {
        await expect(welcomepage.logo).toBeDisplayed();
    });
    it('Welcome text Test', async () => {
        const welcome = await welcomepage.welcome.getText();
        console.log(welcome);
        await expect(welcomepage.welcome).toHaveText('Welcome!');
    })
    it('Introduction text Test',async ()=>{
        console.log(data.welcome.Introduction_text);
        await expect(welcomepage.introduction).toHaveText(data.welcome.Introduction_text);
    })
    it('Instruction text Test',async()=>{
        await expect(welcomepage.instruction).toHaveText(data.welcome.Instruction_text);
    })
    it('Inprogress icon Test', async()=>{
        if(await welcomepage.SkipBtn.isDisplayed()== true){
            await welcomepage.SkipBtn.click();
            await expect(welcomepage.inprogress).toBeDisplayed();
        }else{
            await expect(welcomepage.inprogress).toBeDisplayed();
        }
    })
});

