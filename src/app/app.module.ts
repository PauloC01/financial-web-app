import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestCalculateComponent } from './components/calculator';
import { InvestimentResultComponent } from './components/calculator/results';
import { LimitManagerComponent } from './components/card_manager';
import { CardManagerComponent } from './components/card_manager/manage-items';
import { ChooseOpsComponent } from './components/choose_ops';

@NgModule({
  declarations: [
    AppComponent,
    ChooseOpsComponent,
    LimitManagerComponent,
    InvestCalculateComponent,
    CardManagerComponent,
    InvestimentResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
