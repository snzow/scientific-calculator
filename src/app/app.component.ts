import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  calculatorDisplay: string = '';
  storedNumber: number | null = null;
  storedFunction : number = 0;


  clickNumber(number : string){
    this.calculatorDisplay += number;
  }

  clickEquals(){
    if(!this.storedNumber){
      return;
    }
    const newNumber = +this.calculatorDisplay;
    let res = 0;
    switch(this.storedFunction){
      case 1:
        if(newNumber == 0 ){
          this.calculatorDisplay = 'ERR'
          return;
        }
        res = this.storedNumber/newNumber;
        break;
      case 2:
        res = this.storedNumber * newNumber;
        break;
      case 3:
        res = this.storedNumber + newNumber;
        break;
      case 4:
        res = this.storedNumber - newNumber;
        break;
      case 5:
        res = this.storedNumber ** newNumber;
        break;
      case 6:
        res = Math.pow(this.storedNumber, 1/newNumber);
        break;
      case 7:
        this.storedNumber = -1 * this.storedNumber;
        res = this.storedNumber;
        break;
      case 8:
        this.storedNumber = Math.sqrt(this.storedNumber);
        res = this.storedNumber;
        break;
      case 9:
        this.storedNumber = Math.log(this.storedNumber);
        res = this.storedNumber;
        break;
    }
    this.storedNumber = null;
    this.calculatorDisplay = (+res.toFixed(2)).toString();
  }


  clickDivide(){
    this.storedNumber = +this.calculatorDisplay;
    this.storedFunction = 1;
    this.calculatorDisplay = '';
  }

  clickMultiply(){
    this.storedNumber = +this.calculatorDisplay;
    this.storedFunction = 2;
    this.calculatorDisplay = '';
  }

  clickAdd(){
    this.storedNumber = +this.calculatorDisplay;
    this.storedFunction = 3;
    this.calculatorDisplay = '';
  }

  clickSubtract(){
    this.storedNumber = +this.calculatorDisplay;
    this.storedFunction = 4;
    this.calculatorDisplay = '';
  }

  clickPower(){
    this.storedNumber = +this.calculatorDisplay;
    this.storedFunction = 5;
    this.calculatorDisplay = '';
  }

  clickNegate(){
    this.storedNumber = -1 * (+this.calculatorDisplay);
    this.calculatorDisplay = (+this.storedNumber.toFixed(2)).toString();
  }

  clickLog(){
    this.storedNumber = Math.log(+this.calculatorDisplay);
    this.calculatorDisplay = (+this.storedNumber.toFixed(2)).toString();
  }

  clickSqrt(){
    this.storedNumber = Math.sqrt(+this.calculatorDisplay);
    this.calculatorDisplay = (+this.storedNumber.toFixed(2)).toString();
  }

  clearDisplay(): void {
    this.calculatorDisplay = '';
    this.storedFunction = 0;
    this.storedNumber = null;
  }

  calculate(): void {
    try {
      this.calculatorDisplay = eval(this.calculatorDisplay).toString();
    } catch (error) {
      this.calculatorDisplay = 'Error';
    }
  }
}
