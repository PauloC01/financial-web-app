import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models/item';
import { SharedService } from 'src/app/services/shared-service';

@Component({
  selector: 'app-card-manager',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class CardManagerComponent implements OnInit {
  financialInfo = {
    currentExpenses: '0',
    limitAvaiable: '790',
    fullLimit: '790'
  }

  model = {
    description: '',
    value: ''
  };

  list: Item[] = [];
  subscription: Subscription;
  router: Router;

  constructor(router: Router, private sharedService: SharedService) {
    this.subscription =  new Subscription();
    this.router = router
  }

  ngOnInit(): void {
    this.subscription = this.sharedService.currentLimit.subscribe(limit => this.financialInfo.fullLimit = limit)
    console.log(this.subscription)
    this.financialInfo.limitAvaiable = this.financialInfo.fullLimit;
  }

  onSubmit(){
    if(!this.model.value){
      return;
    }

    if(((parseInt(this.financialInfo.limitAvaiable) - (parseInt(this.model.value)))) < 0){
      alert(`Adicionar ${this.model.description} irá ultrapassar o limite do cartão. Por favor, verifique sua lista, ou aumente seu limite.`);
      return;
    }

    this.list.push(this.model);
    this.updateLimit();
    this.clear();
  }

  updateLimit(){
    this.financialInfo.currentExpenses = ((parseInt(this.financialInfo.currentExpenses) + parseInt(this.model.value))).toString();
    this.financialInfo.limitAvaiable = ((parseInt(this.financialInfo.fullLimit) - parseInt(this.financialInfo.currentExpenses))).toString();
    console.log(this.financialInfo.limitAvaiable)
  }

  clear(){
    this.model = {
      description: '',
      value: ''
    };
  }

  removeItem(item: any){
    const index = this.list.indexOf(item);
    if (index > -1) {
      this.list.splice(index, 1);
    }
    this.financialInfo.currentExpenses = (parseInt(this.financialInfo.currentExpenses) - parseInt(item.value)).toString();
    this.financialInfo.limitAvaiable = (parseInt(this.financialInfo.limitAvaiable) + parseInt(item.value)).toString();
  }

  goToUpdateLimit(){
    this.router.navigate(['change-limit']);
  }

  backHome(){
    this.router.navigate(['choose']);
  }
}
