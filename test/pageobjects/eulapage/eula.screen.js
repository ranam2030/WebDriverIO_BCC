class eula {
    get acceptBtn(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/accept_button"]');
    }
    get declineBtn(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/decline_button"]');
    }
    get logo(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/bombardier_logo"]');
    }
    get welcome(){
        return $('//*[@resource-id="com.bombardier.cabincall:id/welcome"]');
    }

}
module.exports = new eula();