import { salledesport } from '../model/salledesport.model';
import {SalledesportService} from '../services/salledesport.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {
  salledesport!:salledesport[];
  allsalle!:salledesport[];
  nomsalledesport!:String;
  searchTerm!:string;
  ngOnInit(): void {
    this.salledesport = this.SalledesportService.listesalledesport();
    this.allsalle=this.salledesport;
    }
    onChange() {
      this.salledesport = this.SalledesportService.rechercherParNom(this.searchTerm);
      console.log('Filtered salledesport:', this.salledesport);
    }
  constructor(private SalledesportService: SalledesportService){}
  
  onKeyUp(filterText : string){ this.salledesport = this.salledesport.filter(item => item.nomsalledesport.toLowerCase().includes(filterText)); }
  
}