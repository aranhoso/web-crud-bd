import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [ CommonModule, MatTabsModule],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
    clientes: any[] = [];
    enderecos: any[] = [];
    departamentos: any[] = [];
    funcionarios: any[] = [];
    categorias: any[] = [];
    fornecedores: any[] = [];
    produtos: any[] = [];
    pedidos: any[] = [];
    itensPedido: any[] = [];
    estoque: any[] = [];

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.loadClientes();
        this.loadEnderecos();
        this.loadDepartamentos();
        this.loadFuncionarios();
        this.loadCategorias();
        this.loadFornecedores();
        this.loadProdutos();
        this.loadPedidos();
        this.loadItensPedido();
        this.loadEstoque();
    }

    loadClientes(): void {
        this.apiService.getClientes().subscribe((data: any[]) => {
            this.clientes = data;
        });
    }

    loadEnderecos(): void {
        this.apiService.getEnderecos().subscribe((data: any[]) => {
            this.enderecos = data;
        });
    }

    loadDepartamentos(): void {
        this.apiService.getDepartamentos().subscribe((data: any[]) => {
            this.departamentos = data;
        });
    }

    loadFuncionarios(): void {
        this.apiService.getFuncionarios().subscribe((data: any[]) => {
            this.funcionarios = data;
        });
    }

    loadCategorias(): void {
        this.apiService.getCategorias().subscribe((data: any[]) => {
            this.categorias = data;
        });
    }

    loadFornecedores(): void {
        this.apiService.getFornecedores().subscribe((data: any[]) => {
            this.fornecedores = data;
        });
    }

    loadProdutos(): void {
        this.apiService.getProdutos().subscribe((data: any[]) => {
            this.produtos = data;
        });
    }

    loadPedidos(): void {
        this.apiService.getPedidos().subscribe((data: any[]) => {
            this.pedidos = data;
        });
    }

    loadItensPedido(): void {
        this.apiService.getItensPedido().subscribe((data: any[]) => {
            this.itensPedido = data;
        });
    }

    loadEstoque(): void {
        this.apiService.getEstoque().subscribe((data: any[]) => {
            this.estoque = data;
        });
    }
}