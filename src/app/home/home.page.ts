import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../service/local-storage.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isModalOpen = false;

  form:any = { }
  constructor(
    private router : Router,
    private localStorage:LocalStorageService
  ) {}

 async doList(){

    await console.log("ini form"+ this.form);
    const form = Object.keys(this.form);
    
    this.localStorage.addData(this.form);
    const output = form.map((key) => {
      // bold text on mailto: body
      if (key === 'location') return;
      return `${key.toUpperCase()}: ${this.form[key]}`;
    }).join('%0A');
    
    const url = `mailto:${this.form.AlamatEmail}?subject=Data&20Informasi&body=${output}`;

    window.open(url, '_blank');
    // this.router.navigateByUrl('crud');

    this.form.Nama ='';
    this.form.Prodi ='';
    this.form.TempatLahir ='';
    this.form.AlamatEmail ='';
    this.form.Tahunlahir ='';
    this.form.Nilairaport ='';
    this.form.NoTelpWhatsapp ='';
    this.form.Jeniskelamin ='';
    this.form.Asalsekolah ='';
  }
}
