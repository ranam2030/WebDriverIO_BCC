class commonutils {
  async doClick(element,timeout){
    await element.isDisplayed({timeout: timeout});
    await element.click();
  }
  async doGetText(element,timeout){
    await element.isDisplayed({timeout: timeout});
  }
    
}
module.exports = new commonutils();