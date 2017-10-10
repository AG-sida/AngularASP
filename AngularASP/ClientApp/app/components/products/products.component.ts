import { Component, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'products',
    templateUrl: './products.component.html'
})
export class ProductsComponent {
    title = 'app works!';
    private apiUrl = 'http://cat-store-api.frostdigital.se/api';
    data: any = {};


    constructor(private http: Http) {
        console.log('Helloo fellow user');
        this.getContacts();
        this.getData();
    }

    getData() {
        return this.http.get(this.apiUrl).map((res: Response) => res.json())
    }

    getContacts() {
        this.getData().subscribe(data => {
            console.log(data);
            this.data = data;
        })
    }



}

