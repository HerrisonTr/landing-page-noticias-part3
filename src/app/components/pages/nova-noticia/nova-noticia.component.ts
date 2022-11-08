import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../../models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-nova-noticia',
  templateUrl: './nova-noticia.component.html',
  styleUrls: ['./nova-noticia.component.css']
})
export class NovaNoticiaComponent implements OnInit {
  noticia = {} as Noticia;
  constructor(private noticiaService: NoticiaService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.noticiaService.cadastrarNoticia(this.noticia).subscribe(noticia => {
      this.noticia = noticia;
      this.noticia  = {} as Noticia;
    })
  }
}
