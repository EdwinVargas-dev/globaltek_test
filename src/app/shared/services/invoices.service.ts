import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  private mainUrl: string = "https://6164b0aa09a29d0017c88e43.mockapi.io"
  private invoiceDetailData = new BehaviorSubject({})
  invoiceShared = this.invoiceDetailData.asObservable()

  constructor(private http: HttpClient) { }

  getInvoices(){
    return this.http.get(this.mainUrl+'/Facturas')
  }

  createInvoice(dataInvoice:object){
    return this.http.post(this.mainUrl+'/Facturas', dataInvoice)
  }

  sendInvoiceData(invoice:object){
    this.invoiceDetailData.next(invoice)
  }
}
