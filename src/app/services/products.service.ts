
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';


@Injectable()
export class ProductsService {

     constructor(private http:Http) {}

    getProducts(): Observable<any[]> {
        return this.http.get('../../assets/mockup.json')
            .map((response: Response) => response.json()) 
    }
         
}
