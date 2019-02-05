import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  editingProduct: Product;
  editing: boolean = false;
  products = [];

  constructor(public ProductService: ProductService) {}

  ngOnInit() {
    this.ProductService.getProducts().subscribe(product => {
      this.products = product;
    });
  }

  deleteProduct(event, product) {
    this.ProductService.deleteProducts(product);
  }

  editProduct(event, product) {
    // this.ProductService.editProduct(product);
    this.editingProduct = product;
    this.editing = !this.editing;
  }

  updateProduct() {
    this.ProductService.editProduct(this.editingProduct);
    this.editingProduct = {} as Product;
    this.editing = false;
  }
}
