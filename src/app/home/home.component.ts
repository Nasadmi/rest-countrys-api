import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Country } from '../api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countrys!: Country[]
  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {
    console.log(this.apiService.getAllCountrys().subscribe({
      error: (err) => {
        console.error(err)
      },

      next: (value) => {
        this.countrys = value
      }
    }))
  }
}
