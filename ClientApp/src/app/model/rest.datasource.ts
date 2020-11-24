import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import "rxjs/operator/map";

export const REST_URL = new InjectionToken("rest_url");

