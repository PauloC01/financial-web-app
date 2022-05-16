import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InvestModel } from 'src/app/models/InvestModel';
import { SharedService } from 'src/app/services/shared-service';

@Component({
  selector: 'app-invest-calculate',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class InvestCalculateComponent implements OnInit {
  model: any;
  subscription: Subscription;

  constructor(private router: Router, private sharedService: SharedService) {
    this.model = new InvestModel({})
  }

  ngOnInit(): void {
    this.subscription = this.sharedService.currentinvestModel.subscribe((model) => this.model = model);
    this.model.selic *= 100;
  }

  onSubmit(){
    if(!this.model.investValue || !this.model.time){
      alert("Oops, alguns campos parecem estar vazios")
      return;
    }
    this.sharedService.changeInvestingModel(this.model);
    this.router.navigate(['invest-results']);
  }

  goHome(){
    this.router.navigate(['choose'])
  }
}
