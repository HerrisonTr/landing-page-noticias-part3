import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})

export class NoticiaService {
  noticia = {} as Noticia;
  url = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post/'; // api rest fake
  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos as notícias
  getNoticias(): Observable<Noticia[]> {
    return this.httpClient.get<Noticia[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getNoticiaBusca(params: string): Observable<Noticia[]> {
    return this.httpClient.get<Noticia[]>(this.url + '?title=' + params)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Cadastra nova notícias
  cadastrarNoticia(noticia: Noticia): Observable<any> {
    return this.httpClient.post(this.url, noticia)
  }

  getNoticia() {
    return this.noticia;
  }
  setNoticia(noticia: Noticia) {
    this.noticia = noticia;
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
