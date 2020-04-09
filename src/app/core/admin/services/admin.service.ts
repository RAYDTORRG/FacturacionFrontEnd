import { Injectable } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Producto } from '../../../shared/interfaces/producto';
import { Factura } from '../../../shared/interfaces/factura';
import { Item } from '../../../shared/interfaces/item';

const API_PRODUCTO= 'producto';
const API_PRODUCTO_SAVE = 'producto/save-product';
const API_PRODUCTO_DELETE = 'producto/delete-product';
const API_PRODUCTO_UPDATE = 'producto/update-product';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpService: HttpService) { }

  productoGetAll(): Observable<any> {
    return this.httpService.Get(environment.serviceUrlApiBack + API_PRODUCTO);
  }

  productoGetId(id: number): Observable<any> {
    return this.httpService.Get(environment.serviceUrlApiBack + API_PRODUCTO + '?' + 'id=' + id);
  }

  productoPost(producto: Producto): Observable<any>{
    return this.httpService.Post(environment.serviceUrlApiBack + API_PRODUCTO_SAVE, producto);
  }

  productoDelete(producto: Producto): Observable<any>  {
    return this.httpService.Post(environment.serviceUrlApiBack + API_PRODUCTO_DELETE, producto);

  }

  productoUpdate(producto: Producto): Observable<any>  {
    return this.httpService.Post(environment.serviceUrlApiBack + API_PRODUCTO_UPDATE, producto);

  }
}
