import { Component, Input } from '@angular/core';
import { VoyageModel } from '../models/voyage_model';

@Component({
  selector: 'app-voyagecard',
  standalone: true,
  imports: [],
  templateUrl: './voyagecard.component.html',
  styleUrl: './voyagecard.component.css',
})
export class VoyagecardComponent {
  @Input() voyage!: VoyageModel;
}
