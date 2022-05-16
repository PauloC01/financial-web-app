import { Routes } from '@angular/router';
import { InvestCalculateComponent } from './components/calculator';
import { InvestimentResultComponent } from './components/calculator/results';
import { LimitManagerComponent } from './components/card_manager';
import { CardManagerComponent } from './components/card_manager/manage-items';
import { ChooseOpsComponent } from './components/choose_ops';

export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'choose'},
  { path: 'choose', component: ChooseOpsComponent },
  { path: 'change-limit', component: LimitManagerComponent },
  { path: 'card-manager', component: CardManagerComponent },
  { path: 'calculate-invest', component: InvestCalculateComponent },
  { path: 'invest-results', component: InvestimentResultComponent },

];
