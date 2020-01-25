import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cart';

   details=[];
   

  
   onvoice(invoiceData: {itemname1: string,itemname2: string,
    price1: string, price2:string
  }){
    this.details.push({
      itemname1: invoiceData.itemname1,
      itemname2: invoiceData.itemname2,
      price1: invoiceData.price1,
      price2: invoiceData.price2
    });
  }


  bill=[];
  billgenerate(finalchart:{
    itemname1:string,
    itemname2:string,
    bill:number;
  })
  {
    this.bill.push(
      {
      itemname1:finalchart.itemname1,
      itemname2:finalchart.itemname2,
      total:finalchart.bill,
      }
    )
  }

}
