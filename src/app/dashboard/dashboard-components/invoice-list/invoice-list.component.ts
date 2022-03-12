import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../../../shared/services/invoices.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoiceListData: object;
  customerName: string = ""

  constructor(private invoicesService: InvoicesService) {
    this.invoiceListData = []
  }

  ngOnInit(): void {
    this.getInvoices()
  }

  getInvoices() {
    this.invoicesService.getInvoices().subscribe(
      data => {
        this.invoiceListData = data
      }
    )
  }

  calculateTotal(iva: number, products: any, param: string) {
    let totalCalculated = 0
    for (let index = 0; index < products.length; index++) {
      const element = products[index];
      totalCalculated += element.PrecioUnitario
    }
    if (param == "iva") totalCalculated += iva
    return totalCalculated
  }

  viewInvoiceDetail(invoice:object){
    this.invoicesService.sendInvoiceData(invoice)
  }

}
