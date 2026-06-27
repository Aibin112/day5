import { Component } from '@angular/core';
import { Navbar } from "../../ui/navbar/navbar";
import { Form } from "../../ui/form/form";
import { Iframe } from "../../ui/iframe/iframe";
import { Footer } from "../../ui/footer/footer";
import { Grid } from "../../ui/grid/grid";

@Component({
  selector: 'app-contact-us',
  imports: [Navbar, Form, Iframe, Footer, Grid],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {}
