import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../../services/noticia.service';
import { Noticia } from '../../../models/noticia';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  title = 'siteNoticias';
  noticia = {} as Noticia;
  noticias: Noticia[] | undefined;
  total = 0 ;

  constructor(private noticiaService: NoticiaService) { }

  ngOnInit() {
    this.getNoticias();
    
  }

  getNoticias() {
    this.noticiaService.getNoticias().subscribe((noticias: Noticia[]) => {
      this.noticias = noticias;
      this.total = noticias.length
    });
  }

  getNoticiaBusca(title : string){
    this.noticiaService.getNoticiaBusca(title).subscribe((noticias: Noticia[]) => {
      this.noticias = noticias;
      this.total = noticias.length
    });
  }
}
