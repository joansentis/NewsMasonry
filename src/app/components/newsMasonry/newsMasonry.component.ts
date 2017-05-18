import { Component, Input } from '@angular/core';
import { News } from '../../models/news';

@Component({
  moduleId: module.id,
  selector: 'newsMasonry',
  templateUrl: 'newsMasonry.html',
  styleUrls: ['newsMasonry.scss']
})

export class newsMasonryComponent {
  @Input() data: News;
}
