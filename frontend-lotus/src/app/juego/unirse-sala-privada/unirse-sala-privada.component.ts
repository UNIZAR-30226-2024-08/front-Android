import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import e from 'express';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-unirse-sala-privada',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './unirse-sala-privada.component.html',
  styleUrl: './unirse-sala-privada.component.css'
})
export class UnirseSalaPrivadaComponent implements OnInit{
  form !: FormGroup;

  constructor() {
    this.buildForm();
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((value: any) => {
      console.log(value);
    });
  }

  private buildForm() {
    this.form = new FormGroup({
      codigo: new FormControl('', [Validators.required]),
    });
  }
  
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value.codigo;
      console.log(value);
    } else {
      console.log('Formulario no valido');
    }
  }

}
