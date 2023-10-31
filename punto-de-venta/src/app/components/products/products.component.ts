import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Café Molido clásico',
      brand: '1820',
      barcode: '1234567890',
      price: '₡ 1200',
      quantity: 10,
      imageSrc: './app/components/products/img/cafe.jpg'
    },
    {
      id: 2,
      name: 'Arroz Blanco',
      brand: 'Tío Pelón',
      barcode: '2345678901',
      price: '₡ 2000',
      quantity: 12,
      imageSrc: './app/components/products/img/arroz.jpg'
    },
    {
      id: 3,
      name: 'Azúcar Blanca',
      brand: 'Doña María',
      barcode: '3456789012',
      price: '₡ 2100',
      quantity: 10,
      imageSrc: './app/components/products/img/azucar.jpg'
    },
    {
      id: 4,
      name: 'Margarina',
      brand: 'Numar',
      barcode: '4567890123',
      price: '₡ 700',
      quantity: 8,
      imageSrc: './app/components/products/img/numar.jpg'
    },
    {
      id: 5,
      name: 'Aceite',
      brand: 'Clover',
      barcode: '5678901234',
      price: '₡ 1300',
      quantity: 6,
      imageSrc: './app/components/products/img/aceite.jpg'
    },
    {
      id: 6,
      name: 'Frijoles Negros',
      brand: 'Tío Pelón',
      barcode: '6789012345',
      price: '₡ 1800',
      quantity: 10,
      imageSrc: './app/components/products/img/frijoles.jpg'
    },
    {
      id: 7,
      name: 'Leche Semidescremada',
      brand: 'Dos Pinos',
      barcode: '7890123456',
      price: '₡ 1500',
      quantity: 4,
      imageSrc: './app/components/products/img/leche.jpg'
    },
    {
      id: 8,
      name: 'Huevos',
      brand: 'La Gallinita Feliz',
      barcode: '8901234567',
      price: '₡ 2000',
      quantity: 6,
      imageSrc: './app/components/products/img/huevos.jpg'
    },
    {
      id: 9,
      name: 'Queso Blanco',
      brand: 'Dos Pinos',
      barcode: '9012345678',
      price: '₡ 2500',
      quantity: 13,
      imageSrc: './app/components/products/img/queso.jpg'
    }
  ];
}
