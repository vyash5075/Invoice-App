import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }
@Input() lists:{itemname1: string,itemname2: string,
  price1: number, price2:number
};


totalbill:number;
@Output() checkout=new EventEmitter();

generatebill()
{
  const tax=((this.lists.price1)+(this.lists.price2))*2;
    this.totalbill=(this.lists.price1)+(this.lists.price2)+tax;
    // this.totalbill=123;

  console.log(this.totalbill);
  let bill={
          itemname1:this.lists.itemname1,
          itemname2:this.lists.itemname2,
          total:this.totalbill,
  }
  this.checkout.emit(bill);
}
  ngOnInit() {
  }

}
