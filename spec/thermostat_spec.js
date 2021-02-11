'use strict';

describe('Thermostat', function() {
    var thermostat;

    beforeEach(function(){
    thermostat = new Thermostat();
    });

    it('starts at 20 degrees', function(){
        expect(thermostat.temperature()).toEqual (20);
    });

    it('increases the temperature', function(){
        expect(thermostat.raiseTemp())
        expect(thermostat.temperature()).toEqual (21);
    });

    it('decreases the temperature', function(){
        expect(thermostat.decreaseTemp())
        expect(thermostat.temperature()).toEqual (19);
    });

    it('has a minimum of 10 degrees', function(){
        expect(thermostat.MINIMUM_TEMPERATURE).toEqual (10)
    });

    it('cant go below minimum temperature', function(){
        for (var i = 1; i < 11; i++) {
            thermostat.decreaseTemp();
        } 
        expect(thermostat.temperature()).toEqual (10)
        expect(function(){
        thermostat.decreaseTemp();
        }).toThrowError('Minimum temperature reached');
    });

    it('has a power saving mode', function(){
    expect(thermostat.powerMode()).toEqual (true);
    });

    it('the maximum temperature is 25 degrees if power saving mode is on', function(){
        expect(thermostat.powerMode()).toEqual (true);
        for (var j = 0; j < 5; j++) {
            thermostat.raiseTemp();
        }
        expect(thermostat.temperature()).toEqual (25)
        expect(function(){
        thermostat.raiseTemp();
        }).toThrowError('maximum temperature reached');
        
       
    });

}); 
