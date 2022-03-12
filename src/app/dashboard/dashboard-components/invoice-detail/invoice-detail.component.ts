import { Component, OnInit } from '@angular/core';
import { InvoicesService } from 'src/app/shared/services/invoices.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  invoiceDetail: any;
  invoiceProducts: any
  displayedColumns: string[] = ['item', 'product', 'price', 'quantity'];

  constructor(private invoicesService: InvoicesService) {
    this.invoiceDetail = {}
    this.invoiceProducts = []
  }

  ngOnInit(): void {
    this.invoicesService.invoiceShared.subscribe(
      (dataShared: any) => {
        this.invoiceDetail = dataShared ? dataShared : {}
        this.invoiceProducts = dataShared['Detalle'] ? dataShared['Detalle'] : []
      }
    )
  }

  calculateTotal(iva: number, discount: number, products: any, param: string) {
    let totalCalculated = 0
    for (let index = 0; index < products.length; index++) {
      const element = products[index];
      totalCalculated += element.PrecioUnitario*element.Cantidad
    }
    if (param == "iva") totalCalculated += totalCalculated*iva/100
    return totalCalculated - (totalCalculated*discount/100)
  }

}
