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
