import { IInvestModel } from "./interfaces/InvestModel";

export class InvestModel implements IInvestModel{
  investValue: string;
  time: string;
  result: string;
  selic: string;
  tr: string;

  constructor(props: any){
    this.investValue = props?.investValue;
    this.time = props?.time;
    this.result = props?.result;
    this.selic = props?.selic;
    this.tr = props?.tr;
  }
}
