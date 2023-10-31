import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  constructor(

    private router: Router
  ) { }

  subtotal: number = 0; // Inicializa el subtotal
  iva: number = 0; // Inicializa el IVA
  total: number = 0; // Inicializa el total
  products = [
    {
      id: 1,
      name: 'Café Molido clásico',
      brand: '1820',
      barcode: '1234567890',
      price: 1200,
      quantity: 0,
      imageSrc: './app/components/products/img/cafe.jpg'
    },
    {
      id: 4,
      name: 'Margarina',
      brand: 'Numar',
      barcode: '4567890123',
      price: 700,
      quantity: 0,
      imageSrc: './app/components/products/img/numar.jpg'
    },
    {
      id: 5,
      name: 'Aceite',
      brand: 'Clover',
      barcode: '5678901234',
      price: 1300,
      quantity: 0,
      imageSrc: './app/components/products/img/aceite.jpg'
    }
  ];

  eliminarProducto(id: number) {
    // Lógica para eliminar un producto por su ID
    // Puedes actualizar this.productos y recalcular el total aquí
  }

  realizarCompra() {
    // Lógica para procesar la compra
  }
  calcularTotal() {
    console.log('calcularTotal() se llamó');
    this.subtotal = this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    this.iva = this.subtotal * 0.13; // Supongamos un 13% de IVA
    this.total = this.subtotal + this.iva;
  }

  onSubmit() {
    this.router.navigate(['/main']);
  }
}