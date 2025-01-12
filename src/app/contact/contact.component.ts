import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { SectionHeaderComponent } from "../section-header/section-header.component";
import {FormsModule} from '@angular/forms'
import e from 'express';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-contact',
  imports: [SectionHeaderComponent , FormsModule  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent {

  
  text:string = "";

  displayLabel(event :Event){
    const inputElement = event.target as HTMLInputElement; //Very Important 
    const inputValue = inputElement.value;
    const labelElement = document.querySelector(`label[for=${inputElement.id}]`);

    if (inputValue) {
      labelElement!.classList.remove('top');
    } else {
      labelElement!.classList.add('top');
    }
  }
  
  onSubmit(event: Event): void {
    event.preventDefault();  
  }

}

