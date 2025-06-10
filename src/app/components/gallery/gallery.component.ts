import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CommonModule }from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-gallery',
  imports: [NavBarComponent, CommonModule, FooterComponent, FormsModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  categories = ['Exterior', 'Interior', 'Lugares recreativos', 'Servicios'];
  selectedCategory = 'Exterior';

  images = [
    { src: 'Panoramica_4.jpg', alt: 'Imagen 1', category: 'Exterior' },
    { src: 'Carousel-1.jpg', alt: 'Imagen 2', category: 'Exterior' },
    { src: 'Carousel_3.JPG', alt: 'Imagen 3', category: 'Exterior' },
    { src: 'Carousel_2.JPG', alt: 'Imagen 4', category: 'Exterior' },
    { src: 'Juegos_Infantiles_2.jpg', alt: 'Imagen 5', category: 'Lugares recreativos' },
    { src: 'Carousel_3.JPG', alt: 'Imagen 6', category: 'Lugares recreativos' },
    { src: 'Alberca.jpg', alt: 'Imagen 7', category: 'Lugares recreativos' },
    { src: 'Mesa_2.jpg', alt: 'Imagen 8', category: 'Servicios' },
    { src: 'Carousel_4.JPG', alt: 'Imagen 9', category: 'Servicios'},
    { src: 'Exterior_1.jpg', alt: 'Imagen 10', category: 'Exterior' },
    { src: 'Exterior_2.jpg', alt: 'Imagen 11', category: 'Exterior'},
    { src: 'Exterior_4.jpg', alt: 'Imagen 12', category: 'Exterior'},
    { src: 'Recreativo_1.jpg', alt: 'Imagen 13', category: 'Lugares recreativos'},
    { src: 'Servicio_1.jpg', alt: 'Imagen 14', category: 'Servicios'},
    { src: 'Interior_1.jpg', alt: 'Imagen 15', category: 'Interior'},
    { src: 'Interior_2.jpg', alt: 'Imagen 16', category: 'Interior'},
    { src: 'Interior_3.jpg', alt: 'Imagen 17', category: 'Interior'},
    { src: 'Interior_4.jpg', alt: 'Imagen 18', category: 'Interior'},
    { src: 'Interior_5.jpg', alt: 'Imagen 19', category: 'Interior'},
    { src: 'Interior_6.jpg', alt: 'Imagen 20', category: 'Interior'},
    { src: 'Interior_7.jpg', alt: 'Imagen 21', category: 'Interior'},
    { src: 'Interior_8.jpg', alt: 'Imagen 22', category: 'Interior'},
    { src: 'Interior_9.jpg', alt: 'Imagen 23', category: 'Interior'},
    { src: 'Interior_10.jpg', alt: 'Imagen 24', category:'Servicios'}
    


  ];

  selectedImage: string | null = null;

  get filteredImages() {
    if (this.selectedCategory === 'Todas') {
      return this.images;
    }
    return this.images.filter(img => img.category === this.selectedCategory);
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }

  openImage(src: string) {
    this.selectedImage = src;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
