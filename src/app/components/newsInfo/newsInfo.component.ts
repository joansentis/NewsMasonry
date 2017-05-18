import { Component, Input } from '@angular/core';
import { News } from '../../models/news';

@Component({
    moduleId: module.id,
    selector: 'newsInfo',
    templateUrl: 'newsInfo.html',
    styleUrls: ['newsInfo.scss']
})
export class newsInfoComponent {
    @Input() data: News;
}
