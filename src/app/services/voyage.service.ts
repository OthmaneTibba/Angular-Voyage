import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VoyageModel } from '../models/voyage_model';

@Injectable({
  providedIn: 'root',
})
export class VoyageService {
  public voyageList: BehaviorSubject<VoyageModel[]> = new BehaviorSubject<
    VoyageModel[]
  >([
    {
      nom: 'Ifrane',
      image:
        'https://www.infomediaire.net/wp-content/uploads/2020/02/ifrane-fes-meknes-maroc-tourisme-office.png',
      prixInitial: 1000,
      villes: ['Fes', 'Hajeb'],
      placesPossible: 40,
      destination: 'Ifrane',
      date: '25/12/2023',
    },
    {
      nom: 'Marrakech',
      image:
        'https://www.vanupied.com/wp-content/uploads/1024px-Maroc_Marrakech_Jemaa-el-Fna_Luc_Viatour.jpg',
      prixInitial: 1000,
      villes: ['Casaablanca', 'Rabat'],
      placesPossible: 40,
      destination: 'Ifrane',
      date: '07/12/2023',
    },
  ]);

  constructor() {}
}
