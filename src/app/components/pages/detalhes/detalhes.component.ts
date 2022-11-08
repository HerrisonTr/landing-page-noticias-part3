import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  constructor(private noticia: NoticiaService, private router: Router) { 
    const nav = this.router.getCurrentNavigation();
    console.log(nav?.extras.state)
  }

  ngOnInit(): void {
  }

}
