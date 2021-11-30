import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.filterText = '';
  }
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  // filterText = 'cart';

  private _filterText: string = '';
  get filterText(): string {
    return this._filterText;
  }
  set filterText(value: string) {
    this._filterText = value;
    this.filteredProductList = this.productList.filter(p => p.productName.toLocaleLowerCase().includes(this._filterText));
  }

  productList: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2021',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2021',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    },
  ];
  filteredProductList: IProduct[] = this.productList;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }
}
