import {Injectable} from '@angular/core';
import {Customer} from "../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceComponent {

  constructor() { }

  customerList: Customer[] = [
    new Customer(1, 'Jennie', 'https://kenh14cdn.com/203336854389633024/2022/1/7/2631164732311564956717318959309865840505753n-1641568736055457962779.jpg'),
    new Customer(2, 'Rosé', 'https://saokpop.com/wp-content/uploads/2020/12/3a3cfb84429ded51ade7d633786fb4c3.jpg'),
  ]

  create(customer: Customer): void{
    this.customerList.push(new Customer(customer.id, customer.name, customer.image));
      customer.id = 0;
      customer.name = '';
      customer.image = '';
    }

  edit(customer: Customer): void {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].id === customer.id) {
        this.customerList[i] = customer;
      }
    }
  }

  delete(id: number): void {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].id === id) {
        this.customerList.splice(i, 1);
      }
    }
  }

}
