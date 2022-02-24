import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/Customer";
import {CustomerServiceComponent} from "../service/customer-service.component";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[] = []

  constructor(private customerService: CustomerServiceComponent) {
    this.customerList = customerService.customerList;
  }

  customer: Customer = new Customer(0, '', '');
  ngOnInit(): void {
  }

  createCustomer() {
    this.customerService.create(this.customer);
  }

  showEdit(customer: Customer) {
    this.customer = new Customer(customer.id, customer.name, customer.image);
  }

  editCustomer(){
    this.customerService.edit(this.customer);
  }

  deleteCustomer(id: number) {
    this.customerService.delete(id);
  }

}

