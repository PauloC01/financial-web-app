import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared-service';

@Component({
  selector: 'app-limit-manager',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class LimitManagerComponent implements OnInit {
  model = {
    limit: '5000'
  };

  list = {}
  router: Router;
  subscription: Subscription;

  constructor(router: Router, private sharedService: SharedService) {
    this.subscription =  new Subscription();
    this.router = router
  }

  ngOnInit(): void {
    this.subscription = this.sharedService.currentLimit.subscribe(limit => this.model.limit = limit);
  }

  onSubmit(){
    if(!this.isValid()){
      return;
    }
    this.sharedService.changeLimit(this.model.limit);
    this.goToManageItems();
  }

  isValid(): boolean{
    if(!this.model.limit || parseInt(this.model.limit) <= 0){
      return false;
    }
    return true;
  }

  goToManageItems(){
    this.router.navigate(['card-manager'])
  }

  clear(){
    this.model.limit = '5000';
  }
}
