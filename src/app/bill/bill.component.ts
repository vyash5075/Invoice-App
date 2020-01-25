import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor() { }
@Input() totalbill:{itemname1:string,itemname2:any,total:any}

  ngOnInit() {
    console.log(this.totalbill);
  }

}
