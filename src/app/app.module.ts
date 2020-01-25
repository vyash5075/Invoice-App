import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BillComponent } from './bill/bill.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CheckoutComponent,
    BillComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
