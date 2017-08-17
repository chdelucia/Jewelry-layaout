import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
    public products: any[];
    private filters: String[];
    private cache;

    constructor(private _productsService: ProductsService) {
        this.filters = [];
    }

    ngOnInit() {
        this.getProducts();  
    }

    getProducts(){
        this._productsService.getProducts().subscribe(
            result => {
                 this.products = result;
                 this.cache = result['products'];
            }
        );
    }
    
    filterProductByType(filtersTypes){
        let alreadyIn = [];
        if (filtersTypes.length){
            this.products['products'] = []
            this.cache.map( item =>{
                item.type.map( itemType =>{
                    for (let i = 0; i < filtersTypes.length; i++){
                        if (itemType.toUpperCase() === filtersTypes[i].toUpperCase() && !alreadyIn.includes(item.name) ){
                            this.products['products'].push(item);
                            alreadyIn.push(item.name);
                        }
                    }
                });
            });
        }
        else{
            this.products['products'] = this.cache;
        }
    }

    onClickFilter(element, type) {
        element.classList.toggle('selected');
        let isSelected = element.classList.contains('selected');

        if (isSelected) {
            this.filters.push(type);
            this.filterProductByType(this.filters);
        }
        else {
            let index = this.filters.indexOf(type);  
            if (index !== -1) {
                this.filters.splice(index, 1);
            }
            this.filterProductByType(this.filters);
        }
    }

    OnGrabnGoClick(element){
        let selecteds = document.getElementsByClassName("filters__button selected");
        let i = selecteds.length;
        while(i--){
            selecteds[i].classList.remove("selected");
        }
        element.classList.add("selected");
        this.filters = ["grab"];
        this.filterProductByType(this.filters);
    }
    

}
