import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/clientes`);
  }

  getCliente(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/clientes/${id}`);
  }

  getEnderecos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/enderecos`);
  }

  getEndereco(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/enderecos/${id}`);
  }

  getDepartamentos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/departamentos`);
  }

  getDepartamento(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/departamentos/${id}`);
  }

  getFuncionarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/funcionarios`);
  }

  getFuncionario(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/funcionarios/${id}`);
  }

  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categorias`);
  }

  getCategoria(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/categorias/${id}`);
  }

  getFornecedores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/fornecedores`);
  }

  getFornecedor(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/fornecedores/${id}`);
  }

  getProdutos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/produtos`);
  }

  getProduto(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/produtos/${id}`);
  }

  getPedidos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pedidos`);
  }

  getPedido(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pedidos/${id}`);
  }

  getItensPedido(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/itenspedido`);
  }

  getItemPedido(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/itenspedido/${id}`);
  }

  getEstoque(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/estoque`);
  }

  getEstoqueItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/estoque/${id}`);
  }
}