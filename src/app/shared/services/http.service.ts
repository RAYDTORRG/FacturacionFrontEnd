/*
Desarrollador: Ray David
Fecha: 08/04/2020
Descripcion: Servicio creado para realizar peticiones HTTP: "GET,POST,PUT,DELETE"
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpOptions: any;

  constructor(private http: HttpClient) {
  }

  /** GET */
  public Get(URL: string, parameters?: any): Observable<any> {

    if (parameters !== undefined) {
      let httpParams = new HttpParams();
      Object.keys(parameters).forEach(element => {
        httpParams = httpParams.append(element, parameters[element]);
      });
      this.httpOptions.params = httpParams;
    }

    return this.http.get<any>(
      URL,
      this.httpOptions,
    ).pipe(
      catchError(this.handleError)
    );
  }

  /** POST */
  public Post(URL: string, parameters: any): Observable<any> {
    return this.http.post(
      URL,
      parameters
    ).pipe(
      catchError(this.handleError)
    );
  }

    /** PUT */
    public Put(URL: string, parameters: any): Observable<any> {
      return this.http.put(
        URL,
        parameters,
        this.httpOptions
      ).pipe(
        catchError(this.handleError)
      );
    }


    public Delete(URL: string, parameters?: any): Observable<any> {
      return this.http.delete(
        URL,
        parameters
      ).pipe(
        catchError(this.handleError)
      );
    }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Cuando Un error del lado del cliente o un error de red occurrio .
            console.error('An error occurred:', JSON.stringify(error.error.message));
    } else {
      // el backend ha retornado un codigo de respuesta no exitoso.
      // el body de la respuesta puede contener pista de que fue mal,
      console.log(
        `El servidor retorno un  codigo ${error.status}, ` +
        `el body fue:  ${JSON.stringify(error.error)}` +
        ` message:  ${JSON.stringify(error.message)}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Algo inesperado sucedio; Por favor, inténtelo de nuevo más tarde.');
  }

}
