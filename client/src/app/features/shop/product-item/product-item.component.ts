import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-item',
  imports: [MatCard, MatCardContent, MatCardActions, MatIcon, CurrencyPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product?: Product;
  cartService = inject(CartService);
}
