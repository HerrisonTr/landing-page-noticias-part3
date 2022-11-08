import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  noticia = {} as Noticia;
  
  constructor(private noticiaService: NoticiaService, private router: Router) { 
    this.noticia = noticiaService.getNoticia();
    if(!this.noticia.createdAt){
      this.router.navigateByUrl('')
    }
  }

  ngOnInit(): void {
  }

}
