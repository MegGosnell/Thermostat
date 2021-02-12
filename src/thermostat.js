class Thermostat {

  constructor(setTemp = 20) {
    this.tempy = setTemp;
    this._powerSavingModeOn = true;
  }

  isPowerSavingModeOn() {
    return this._powerSavingModeOn;
  }

  setPowerSavingModeOn() {
    this._powerSavingModeOn = true;
  }

  setPowerSavingModeOff() {
    this._powerSavingModeOn = true;
  }

  temp() {
    return this.tempy;
  }

  up() {
    const maximumTemp = this._powerSavingModeOn ? 25 : 32 ;
    if(this.tempy < maximumTemp) {
      this.tempy += 1;
    } else {
      throw new Error ("Too hot!")
    }
  }

  down() {
    const minimumTemp = 10;
    if(this.tempy > minimumTemp){
      this.tempy -= 1;
    } else {
      throw new Error ('Too cold')
    }
  }

  reset() {
    this.tempy = 20;
  }

  energyUsage() {
    if (this.temp() < 18) {
      return 'low-usage';
    } else if (this.temp() <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }

}
