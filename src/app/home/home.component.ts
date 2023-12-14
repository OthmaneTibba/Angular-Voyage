import { Component, OnInit, inject } from '@angular/core';
import { VoyageService } from '../services/voyage.service';
import { ModalComponent } from '../modal/modal.component';
import { VoyageModel } from '../models/voyage_model';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ModalComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  voyageService: VoyageService = inject(VoyageService);

  voyageList: VoyageModel[] = [];

  selectedVoyage?: VoyageModel;

  isVoyageSelected: boolean = false;

  currentNbrOfPlaces = 0;

  form!: FormGroup;

  selectedTypeChambre: string = '';

  isRepasSelected = false;

  formBuilder: FormBuilder = inject(FormBuilder);

  isRepaSelected: boolean = false;

  ngOnInit(): void {
    this.voyageList = this.voyageService.voyageList.value;
  }

  onSearch(name: string): void {
    console.log(name);
    this.voyageList = this.voyageService.voyageList.value.filter(
      (v) =>
        v.nom.toLowerCase().includes(name.toLowerCase()) ||
        v.date.toLocaleLowerCase().includes(name.toLowerCase())
    );
  }
  onVoyageSelected(voyage: VoyageModel): void {
    this.selectedVoyage = voyage;
    this.isVoyageSelected = true;

    this.form = this.formBuilder.group({
      nom: [voyage.nom, Validators.required],
      destination: [voyage.destination, Validators.required],
      prixInitial: [voyage.prixInitial, Validators.required],
      image: [voyage.image, Validators.required],
      date: [voyage.date, Validators.required],
      placesPossible: [voyage.placesPossible, Validators.required],
      isRepaSelected: [false],
      is4startsSelected: [false],
      is5StartsSelected: [false],
    });
  }

  incrementNbrPlace() {
    if (this.currentNbrOfPlaces + 1 <= this.selectedVoyage?.placesPossible!) {
      this.currentNbrOfPlaces += 1;
    } else {
      alert('No more places');
    }
  }

  decrementNbrPlace() {
    if (this.currentNbrOfPlaces - 1 > 0) {
      this.currentNbrOfPlaces -= 1;
    }
  }

  onRepasChanged(): void {
    if (this.form.controls['isRepaSelected'].value) {
      let nexPrice = this.form.controls['prixInitial'].value + 100;
      this.form.controls['prixInitial'].setValue(nexPrice);
    }
  }

  confirmResrvation(): void {}
}
