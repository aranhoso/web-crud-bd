import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HttpClientModule, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ ApiService ]
})

export class AppComponent {
  title = 'web-crud';
}
