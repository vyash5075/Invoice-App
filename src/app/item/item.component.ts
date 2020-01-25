import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  @Output() total=new EventEmitter();

price1=" " ;
price2=" ";
item1=" ";
item2=" ";

geninvoice()
{
  const bill={
         itemname1:this.item1,
         itemname2:this.item2,
         price1:parseInt(this.price1),
         price2:parseInt(this.price2),
  }
  this.total.emit(bill);
  this.price1=" ";
this.price2=" ";
this.item1=' ';
this.item2=' ';
}
  constructor() { }

  ngOnInit() {
  }

}
