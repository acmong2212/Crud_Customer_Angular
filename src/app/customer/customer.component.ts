import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customer: Customer = new Customer(0, "", "");
  customerList: Customer[] = [
    {id: 1, name: 'Jennie', image: 'https://kenh14cdn.com/203336854389633024/2022/1/7/2631164732311564956717318959309865840505753n-1641568736055457962779.jpg'},
    {id: 2, name: 'Rosé', image: 'https://saokpop.com/wp-content/uploads/2020/12/3a3cfb84429ded51ade7d633786fb4c3.jpg'},
  ]

  create(): void {
    let check = true;
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].id === this.customer.id) {
        this.customerList[i].name = this.customer.name;
        this.customerList[i].image = this.customer.image;
        check = false;
      }
    }
    if (check) {
      this.customerList.push(new Customer(this.customer.id, this.customer.name, this.customer.image));
      this.customer.id = 0;
      this.customer.name = '';
      this.customer.image = '';
    }
  }

  showEdit(customer: Customer): void {
    this.customer = new Customer(customer.id, customer.name, customer.image);
  }

  delete(id: number): void {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].id === id) {
        this.customerList.splice(i, 1);
      }
    }
  }
}

export class Customer {
  id: number = 0;
  name: string = "";
  image: string = "";

  constructor(id: number, name: string, image: string) {
    this.id = id;
    this.name = name;
    this.image = image;
  }
}
