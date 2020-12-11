import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Http, Request, RequestMethod, Headers, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import "rxjs/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource {
  constructor(private http: Http, @Inject(REST_URL) private url: string) { }

  //-- SPRAWDŹ W TYPE SCRIPT UNIE TYPÓW CZYLI ZWRACANIE RÓZNYCH TYPÓW
  getData(): Observable<Product[]> {
    return  <Observable<Product[]>>  this.sendRequest(RequestMethod.Get, this.url);
  }

  saveProduct(product: Product): Observable<Product> {
    return <Observable<Product>> this.sendRequest(RequestMethod.Post, this.url, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return <Observable<Product>> this.sendRequest(RequestMethod.Put, `${this.url}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return <Observable<Product>> this.sendRequest(RequestMethod.Delete, `${this.url}/${id}`);
  }

  private sendRequest(verb: RequestMethod, url: string, body?: Product): Observable<Product> | Observable<Product[]> {

    let headers = new Headers();
    headers.set("Access-Key", "<sekret>");
    headers.set("Application-Names", ["exampleApp", "proAngular"]);


    return this.http.request(new Request({
      method: verb,
      url: url,
      body: body,
      headers: headers
    }))
      .map(response => response.json())
      .catch((error: Response) => Observable.throw(`Błąd sieci: ${error.statusText} ${error.status}`));
  }

}
