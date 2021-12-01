import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  // selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy {
  constructor(private productService: ProductService) {}

  errorMsg = '';
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  sub!: Subscription;
  productList: IProduct[] = [];
  filteredProductList: IProduct[] = [];

  private _filterText: string = '';
  get filterText(): string {
    return this._filterText;
  }
  set filterText(value: string) {
    this._filterText = value;
    this.filteredProductList = this.productList.filter((p) =>
      p.productName.toLocaleLowerCase().includes(this._filterText)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // subscribe to product observable
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.productList = products;
        this.filteredProductList = this.productList;
      },
      error: (err) => (this.errorMsg = err),
    });
    // this.productList = this.productService.getProducts();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }
}
