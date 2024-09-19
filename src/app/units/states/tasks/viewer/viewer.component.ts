import { Component, Input } from '@angular/core';
import { TaskDefinition } from 'src/app/api/models/task-definition';
import { Unit } from 'src/app/api/models/unit';

@Component({
  selector: 'viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {
  @Input() taskDef: any;
  @Input() unit: Unit;

  ngOnInit(): void {
    // Fetch data from a service or route data
    this.taskDef = this.unit.taskDefinitions;

  }
}
