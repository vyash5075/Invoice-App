import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor() {
   }
@Input() totalbill = {}

  ngOnInit() {
    console.log(this.totalbill); 
  }

}
