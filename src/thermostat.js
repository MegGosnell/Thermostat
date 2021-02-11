'use strict'; 

class Thermostat{
    constructor() { 
        this.defaultTemperature = 20;
        this.MINIMUM_TEMPERATURE = 10;
        this.powerSavingMode = true;
        this.maximumTemperature = 25;
    };
    
    temperature(){
        return this.defaultTemperature;
    };

    raiseTemp(){
        if (this.maximumTemp()) {
            throw new Error('maximum temperature reached');
        }
     this.defaultTemperature += 1;
    }

    decreaseTemp(){
       if (this.minimumTemp()) {
           throw new Error('Minimum temperature reached');
       }
       this.defaultTemperature -= 1;
    }

    minimumTemp(){
        return this.defaultTemperature === this.MINIMUM_TEMPERATURE;
    };

    powerMode(){
        return this.powerSavingMode;
    };

    maximumTemp() {
        return this.defaultTemperature === this.maximumTemperature;
    }
};

