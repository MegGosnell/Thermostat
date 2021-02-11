'use strict';

describe('Thermostat', function() {
    var thermostat;

    beforeEach(function(){
    thermostat = new Thermostat();
    });

    it('starts at 20 degrees', function(){
        expect(thermostat.checkTemp()).toEqual (20);
    });

    it('increases the temperature', function(){
        expect(thermostat.raiseTemp())
        expect(thermostat.checkTemp()).toEqual (21);
    });

    it('decreases the temperature', function(){
        expect(thermostat.decreaseTemp())
        expect(thermostat.checkTemp()).toEqual (19);
    });

    it('has a minimum of 10 degrees', function(){
        expect(thermostat.MINIMUM_TEMPERATURE).toEqual (10)
    });

    it('cant go below minimum temperature', function(){
        for (var i = 1; i < 11; i++) {
            thermostat.decreaseTemp();
        } 
        expect(thermostat.checkTemp()).toEqual (10)
        expect(function(){
        thermostat.decreaseTemp();
        }).toThrowError('Minimum temperature reached');
    });

    it('has a power saving mode', function(){
    expect(thermostat.checkPowerMode()).toEqual (true);
    });

    it('the maximum temperature is 25 degrees if power saving mode is on', function(){
        expect(thermostat.checkPowerMode()).toEqual (true);
        for (var j = 0; j < 5; j++) {
            thermostat.raiseTemp();
        }
        expect(thermostat.checkTemp()).toEqual(25)
        expect(function(){
        thermostat.raiseTemp();
        }).toThrowError('maximum temperature reached');
        
    });

    it('the maximum temperature is 32 degrees if power saving mode is off', function(){
        thermostat.powerModeOff()
        expect(thermostat.checkPowerMode()).toEqual(false);
        for (var j = 0; j < 12; j++) {
            thermostat.raiseTemp();
        }
        expect(thermostat.checkTemp()).toEqual(32)
        expect(function(){
        thermostat.raiseTemp();
        }).toThrowError('maximum temperature reached');
    });

    it('can reset the temperature to a default of 20 degrees', function(){
        thermostat.raiseTemp()
        expect(thermostat.checkTemp()).toEqual(21);
        thermostat.resetTemp()
        expect(thermostat.checkTemp()).toEqual(20);
    });
    describe('displaying usage levels', function(){
        describe('when the temperature is below 18 degrees', function(){
            it('it is considered low-usage', function() {
                for (var i = 0; i < 3; i++) {
                    thermostat.decreaseTemp(); 
                }
                expect(thermostat.energyUsage()).toEqual('low-usage');
            });
        });

    describe('when the temperature is between 18 and 25 degrees', function() {
        it('it is considered medium-usage', function(){
            expect(thermostat.energyUsage()).toEqual('medium-usage');
        });
    });

    describe('when the temperature is anything else', function() {
        it('it is considered high-usage', function(){
            thermostat.powerModeOff(); 
            for (var i = 0; i < 6; i++) {
                thermostat.raiseTemp();
            }
            expect(thermostat.energyUsage()).toEqual('high-usage');
        });
    });
    })
}); 
