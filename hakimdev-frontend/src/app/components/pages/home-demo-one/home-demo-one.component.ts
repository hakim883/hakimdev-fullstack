

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-home-demo-one',
  templateUrl: './home-demo-one.component.html',
  styleUrls: ['./home-demo-one.component.scss']
})
export class HomeDemoOneComponent implements OnInit {
  projets: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getProjets().subscribe(data => {
      this.projets = data;
    });
  }
}