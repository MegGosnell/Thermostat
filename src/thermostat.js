'use strict'; 

class Thermostat{
    constructor() { 
        this.DEFAULT_TEMPERATURE = 20;
        this.currentTemperature = this.DEFAULT_TEMPERATURE;
        this.MINIMUM_TEMPERATURE = 10;
        this.powerSavingMode = true;
        this.MAXIMUM_TEMP_PSM_ON = 25;
        this.MAXIMUM_TEMP_PSM_OFF = 32;
        this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
        this.HIGH_ENERGY_USAGE_LIMIT = 25;
    };
    
    checkTemp(){
        return this.currentTemperature;
    };

    resetTemp(){
        this.currentTemperature = this.DEFAULT_TEMPERATURE;
    }

    raiseTemp(){
        if (this.isMaximumTemp()) {
            throw new Error('maximum temperature reached');
        }
     this.currentTemperature += 1;
    }

    decreaseTemp(){
       if (this.isMinimumTemp()) {
           throw new Error('Minimum temperature reached');
       }
       this.currentTemperature -= 1;
    }

    checkPowerMode(){
        return this.powerSavingMode;
    };

    powerModeOff(){
        this.powerSavingMode = false;
    }

    powerModeOn(){
        this.powerSavingMode = true;
    }

    isMaximumTemp() {
        if (this.checkPowerMode() === false) { 
            return this.currentTemperature === this.MAXIMUM_TEMP_PSM_OFF;
        }
        return this.currentTemperature === this.MAXIMUM_TEMP_PSM_ON;
    }

    isMinimumTemp(){
        return this.currentTemperature === this.MINIMUM_TEMPERATURE;
    };

    energyUsage() {
        if (this.currentTemperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
            return 'low-usage';
        }
        if (this.currentTemperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
            return 'medium-usage'; 
        }
        return 'high-usage'
    }
};

