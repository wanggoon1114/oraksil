"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var NgclassChoice = (function () {
    function NgclassChoice() {
        var _this = this;
        this.items = [
            { 'question': '/assets/questions/Q1/Q1.png', 'answer': 2 },
            { 'question': '/assets/questions/Q2/Q2.png', 'answer': 4 },
            { 'question': '/assets/questions/Q3/Q3.png', 'answer': 2 },
            { 'question': '/assets/questions/Q4/Q4.png', 'answer': 2 },
            { 'question': '/assets/questions/Q5/Q5.png', 'answer': 2 },
            { 'question': '/assets/questions/Q6/Q6.png', 'answer': 2 },
            { 'question': '/assets/questions/Q7/Q7.png', 'answer': 3 },
            { 'question': '/assets/questions/Q8/Q8.png', 'answer': 2 },
            { 'question': '/assets/questions/Q9/Q9.png', 'answer': 4 },
            { 'question': '/assets/questions/Q10/Q10.png', 'answer': 1 },
            { 'question': '/assets/questions/Q11/Q11.png', 'answer': 1 },
            { 'question': '/assets/questions/Q12/Q12.png', 'answer': 1 },
            { 'question': '/assets/questions/Q13/Q13.png', 'answer': 1 },
            { 'question': '/assets/questions/Q14/Q14.png', 'answer': 1 },
            { 'question': '/assets/questions/Q15/Q15.png', 'answer': 4 },
            { 'question': '/assets/questions/Q16/Q16.png', 'answer': 4 },
        ];
        this.i = Math.floor(Math.random() * 16);
        this.totalscore = 0;
        this.numberofclicks = 0;
        this.time = 600;
        this.interval = setInterval(function (_) {
            _this.time -= 0.01;
        }, 10);
    }
    NgclassChoice.prototype.newQuestion = function ($event, choice) {
        if (choice == this.items[this.i].answer) {
            this.totalscore += 60;
        }
        else {
            this.totalscore += 0;
        }
        this.i = Math.floor(Math.random() * 16);
        this.numberofclicks += 1;
        if (this.numberofclicks == 5) {
            clearInterval(this.time);
            this.time = this.time;
            this.totalscore += this.time;
        }
        else {
        }
    };
    ;
    ;
    NgclassChoice = __decorate([
        core_1.Component({
            selector: 'app-ngclass-choice',
            template: "\n  <div>\n    {{time | number : '3.2-2' }}\n  </div><br>\n  <img src = \"{{items[i].question}}\" style = \"display: inline-block;\"><br>\n  <button (click)=\"newQuestion($event, 1)\" class=\"btn-answer\" >1\uBC88</button>\n  <button (click)=\"newQuestion($event, 2)\" class=\"btn-answer\" >2\uBC88</button>\n  <button (click)=\"newQuestion($event, 3)\" class=\"btn-answer\" >3\uBC88</button>\n  <button (click)=\"newQuestion($event, 4)\" class=\"btn-answer\" >4\uBC88</button><br>\n  <div>\n    {{totalscore| number : '3.0-2'}}<br>\n    {{numberofclicks}}\n  </div>\n",
            styles: ["\n  button.btn-answer{\n     width: 150px; padding: 10px;\n     margin-bottom: 10px;\n     text-align:center;\n     background-color: rgba(0,135,211,0.29);\n     font-family: \uD734\uBA3C\uB9E4\uC9C1\uCCB4;\n     font-size: 20px;\n  }\n"]
        })
    ], NgclassChoice);
    return NgclassChoice;
}());
exports.NgclassChoice = NgclassChoice;
