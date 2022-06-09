class extensionSelection{
    get userName(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/username_input"]');
    }
    get extesnionAutomatic(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/extension_automatic"]');
    }
    get extesnionManual(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/extension_manual"]');
    }
    get extensionSelectionManual(){
        return $$('//*[@resource-id="com.bombardier.cabincall:id/extension_radio_button"]');
    }
    get cabinDefault(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/extension_cabin"]');
    }
    get advancedSettings(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/button_advance_setting"]');
    }
    get nextBtn(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/button_advance_setting"]');
    }
}
module.exports = new extensionSelection();