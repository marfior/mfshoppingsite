import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  private orderkey: string;

  constructor(private actRoute: ActivatedRoute) { 
   
  }

  ngOnInit() {

    this.actRoute.params.subscribe(par => {
        this.orderkey = par["key"];
      });

  }

}
