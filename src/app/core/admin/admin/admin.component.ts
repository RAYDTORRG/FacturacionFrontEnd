import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/interfaces/producto';
import { AdminService } from '../services/admin.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public update: boolean = true;
  public listProducto: Producto[];
  public productoUpdate: Producto;
  idProducto: number;
  formProducto = this.fb.group({
    nombre: ['', [Validators.required, Validators.maxLength(85)]],
    valor: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  }); 

  constructor(private adminService: AdminService,
              private fb: FormBuilder) { }

  ngOnInit() {
   this.onGetAll();
  }

  onGetAll(){
    this.adminService.productoGetAll().subscribe(response => {
      this.listProducto = response;
   });
  }

  onGetId(id: number, name: string, val: number){
    this.idProducto = id;
    this.update = false;
    this.nombre.setValue(name);
    this.valor.setValue(val);     
  }

 get nombre() { return this.formProducto.get('nombre'); }
 get valor() { return this.formProducto.get('valor'); } 
  
  onSave(){
    debugger;
    if (this.formProducto.invalid) {
      this.validateAllFormFields(this.formProducto);
      return;
    }

    const produc: Producto = {
      codigoProducto: 0,
      nombre: this.formProducto.value.nombre,
      valor:  Number(this.formProducto.value.valor)
    }

    this.adminService.productoPost(produc).subscribe( response => {
       alert("Se guardo con exito");
       this.onGetAll(); 
       this.onClear();       
    },err =>{
      console.log(err);
    })
  }

  onUpdate() {

    if (this.formProducto.invalid) {
      this.validateAllFormFields(this.formProducto);
      return;
    }    
    const produc: Producto = {
      codigoProducto: this.idProducto,
      nombre: this.formProducto.value.nombre,
      valor:  Number(this.formProducto.value.valor)
    }
    this.adminService.productoUpdate(produc).subscribe( response => {
      alert("Se actualizo con exito");
      this.onGetAll(); 
      this.onClear();
   },err =>{
     console.log(err);
   })

  }

  onClear(){
    this.nombre.setValue(null);
    this.valor.setValue(null);    
    this.update = true;
  }

  onDelete(id: number){
    debugger;
    const produc: Producto = {
      codigoProducto: id,
      nombre: '',
      valor:  0
    }

    this.adminService.productoDelete(produc).subscribe( response => {
      alert("Se eliminó con exito");
      this.onGetAll();
   },err =>{
     console.log(err);
   })

  }

  validateAllFormFields(formGroup: FormGroup): void{
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control.status === 'INVALID') {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  } 

}
