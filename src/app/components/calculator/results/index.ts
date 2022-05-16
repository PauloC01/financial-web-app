import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared-service';

@Component({
  selector: 'app-invest-results',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class InvestimentResultComponent implements OnInit {
  model: any;
  subscription: Subscription;
  result: string

  constructor(private router: Router, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.subscription = this.sharedService.currentinvestModel.subscribe((model) => this.model = model)
    this.result  = this.calculate();
  }

  calculate(){
    const rate = this.getMonthlyRate();
    console.log(rate)
    const time = this.model.time;
    let result = this.model.investValue;

    for (let i = 0; i < time; i++) {
      result *= (rate + 1);
    }

    return result.toFixed(2);
  }

  getMonthlyRate(): number{
    if(this.model.selic < 0.085){
      return (parseFloat(this.model.selic)/12) * 0.7 + parseFloat(this.model.tr)/100;
    } else{
      return (0.5 + parseFloat(this.model.tr))/100;
    }
  }

  goHome(){
    this.router.navigate(['choose'])
  }

  reDo(){
    this.router.navigate(['calculate-invest'])
  }

}
