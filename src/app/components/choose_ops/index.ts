import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-ops',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class ChooseOpsComponent implements OnInit {
  user ={
    name: 'amogus'
  }
  router: Router;

  constructor(router: Router) {
    this.router = router
  }

  ngOnInit(): void {
  }

  goToCalculator(){
    this.router.navigate(['calculate-invest'])
  }

  goToCardManager(){
    this.router.navigate(['change-limit'])
  }
}
