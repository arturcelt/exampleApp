import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import "rxjs/operator/map";

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource {
  constructor(private http: Http, @Inject(REST_URL) private url: string) { }

  getData(): Observable<Product[]> {
    return this.http.get(this.url).map(response => response.json());
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post(this.url, product).map(response => response.json());
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put(`${this.url}/${product.id}`, product).map(response => response.json());
  }
}
