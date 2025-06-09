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
    { src: '', alt: 'Imagen 10', category: ''},
    { src: '', alt: 'Imagen 11', category: ''},
    { src: '', alt: 'Imagen 12', category: ''},
    { src: '', alt: 'Imagen 13', category: ''},
    { src: '', alt: 'Imagen 14', category: ''},
    { src: '', alt: 'Imagen 15', category: ''},
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
