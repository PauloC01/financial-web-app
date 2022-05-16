import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IInvestModel } from "../models/interfaces/InvestModel";
import { InvestModel } from "../models/InvestModel";

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private limitSource = new BehaviorSubject('5000');
  currentLimit = this.limitSource.asObservable();

  private investModelSource = new BehaviorSubject(new InvestModel({
    investValue: '50',
    time: '1',
    selic: 0.1275,
    tr: '0.48',
  }));
  currentinvestModel = this.investModelSource.asObservable();

  constructor(){}

  changeLimit(limit: string){
    this.limitSource.next(limit)
  }

  changeInvestingModel(model: IInvestModel){
    model.selic = (parseFloat(model.selic)/ 100).toString();
    this.investModelSource.next(model)
  }
}
