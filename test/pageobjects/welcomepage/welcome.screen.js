class welcome{
    get logo(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/bombardier_logo"]');
    }
    get welcome(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/welcome"]');
    }
    get introduction(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/introduction"]');
    }
    get instruction(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/instruction"]');
    }
    get inprogress(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/progress"]');
    }
    get devicesettingBtn(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/device_settings_button"]');
    }
    get SkipBtn(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/skip_button"]');
    }
}
module.exports = new welcome();