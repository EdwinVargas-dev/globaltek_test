import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InvoicesService } from 'src/app/shared/services/invoices.service';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent implements OnInit {
  dataInvoice= new FormGroup({
    NumeroFactura: new FormControl(null, [Validators.required, Validators.min(1)]),
    NombreCliente: new FormControl('', Validators.required),
    TipodePago: new FormControl('', Validators.required),
    DocumentoCliente: new FormControl(null, [Validators.required, Validators.min(1)]),
    Descuento: new FormControl(0, [Validators.required, Validators.min(1)]),
    Detalle: new FormArray([])
  })

  dataDetail= new FormGroup({
    Item: new FormControl(null, Validators.required),
    Producto: new FormControl('', Validators.required),
    Cantidad: new FormControl(0, [Validators.required, Validators.min(1)]),
    PrecioUnitario: new FormControl(0, [Validators.required, Validators.min(1)])
  })

  dataDetailColected:any = []

  constructor(private invoicesService: InvoicesService, private snackbar: MatSnackBar) {}

  ngOnInit(): void {}

  addNewDetail(){
    if(this.dataDetail.valid) this.dataDetailColected.push(this.dataDetail.value)
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

  getInvoiceNumber(){
    const number = Math.floor(Math.random() * 10000)
    this.dataInvoice.controls['NumeroFactura'].setValue(number)
  }

  createInvoice(){
    if(this.dataInvoice.valid && this.dataDetailColected.length>0){
      let dataToSend = this.dataInvoice.value
      dataToSend.Detalle = this.dataDetailColected
      dataToSend.Fecha = new Date()
      dataToSend['IVA'] = this.calculateTotal(19, dataToSend.Descuento, dataToSend.Detalle, 'iva')
      this.invoicesService.createInvoice(dataToSend).subscribe(()=>{
        this.snackbar.open(
          'Invoice created successfully', '',{
            duration: 3000,
            panelClass: ['success-snackbar']
          }
        )
      })
    }
  }

}
