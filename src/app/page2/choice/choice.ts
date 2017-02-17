import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {clearInterval} from "timers";

interface Question{
  question: string;
  answer: number;
}

@Component({
  selector: 'app-ngclass-choice',
  template:`
  <div>
    {{time | number : '3.2-2' }}
  </div><br>
  <img src = "{{items[i].question}}" style = "display: inline-block;"><br>
  <button (click)="newQuestion($event, 1)" class="btn-answer" >1번</button>
  <button (click)="newQuestion($event, 2)" class="btn-answer" >2번</button>
  <button (click)="newQuestion($event, 3)" class="btn-answer" >3번</button>
  <button (click)="newQuestion($event, 4)" class="btn-answer" >4번</button><br>
  <div>
    {{totalscore| number : '3.0-2'}}<br>
    {{numberofclicks}}
  </div>
`,
  styles: [`
  button.btn-answer{
     width: 150px; padding: 10px;
     margin-bottom: 10px;
     text-align:center;
     background-color: rgba(49,211,47,0.29);
     font-family: 휴먼매직체;
     font-size: 20px;
  }
`]
})
export class NgclassChoice {
  items : Question[] = [
    {'question' : '/assets/questions/Q1/Q1.png', 'answer' : 2},
    {'question' : '/assets/questions/Q2/Q2.png', 'answer' : 4},
    {'question' : '/assets/questions/Q3/Q3.png', 'answer' : 2},
    {'question' : '/assets/questions/Q4/Q4.png', 'answer' : 2},
    {'question' : '/assets/questions/Q5/Q5.png', 'answer' : 2},
    {'question' : '/assets/questions/Q6/Q6.png', 'answer' : 2},
    {'question' : '/assets/questions/Q7/Q7.png', 'answer' : 3},
    {'question' : '/assets/questions/Q8/Q8.png', 'answer' : 2},
    {'question' : '/assets/questions/Q9/Q9.png', 'answer' : 4},
    {'question' : '/assets/questions/Q10/Q10.png', 'answer' : 1},
    {'question' : '/assets/questions/Q11/Q11.png', 'answer' : 1},
    {'question' : '/assets/questions/Q12/Q12.png', 'answer' : 1},
    {'question' : '/assets/questions/Q13/Q13.png', 'answer' : 1},
    {'question' : '/assets/questions/Q14/Q14.png', 'answer' : 1},
    {'question' : '/assets/questions/Q15/Q15.png', 'answer' : 4},
    {'question' : '/assets/questions/Q16/Q16.png', 'answer' : 4},
  ];

  i : number = Math.floor(Math.random()*16);
  totalscore = 0;
  numberofclicks = 0;

  public newQuestion($event: any, choice) {
    if(choice == this.items[this.i].answer){
      this.totalscore += 60
    }else{
      this.totalscore += 0
    }
    this.i = Math.floor(Math.random()*16);
    this.numberofclicks += 1;
    if(this.numberofclicks == 5){
      this.totalscore += this.time;
      try {
        clearInterval(this.interval);
      }catch(e) {

      }
    }
  };
  time: number = 600;
  interval: any;

  constructor(){
    this.interval = setInterval((_:any) => {
      this.time -= 0.01;
    }, 10);
  };
}


