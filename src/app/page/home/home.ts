import { Component } from '@angular/core';
import { Navbar } from "../../ui/navbar/navbar";
import { Carousel } from "../../ui/carousel/carousel";
import { Accordian } from "../../ui/accordian/accordian";
import { Footer } from "../../ui/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Navbar, Carousel, Accordian, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
