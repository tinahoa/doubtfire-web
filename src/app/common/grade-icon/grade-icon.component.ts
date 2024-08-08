import { Component, OnInit, Input, Inject } from '@angular/core';
import {GradeService} from '../services/grade.service';
@Component({
  selector: 'grade-icon',
  templateUrl: 'grade-icon.component.html',
  styleUrls: ['grade-icon.component.scss'],
})
export class GradeIconComponent implements OnInit{
  @Input() grade: any;
  @Input() showTooltip: boolean;
  @Input() colorful: boolean = false;
  // grade?: number;
  constructor(private gradeService: GradeService) {}

  ngOnInit(): void {
    console.log(this.grade, typeof this.grade);
    if (typeof this.grade === 'string') {
      this.grade = this.gradeService.stringToGrade(this.grade);
    }

    this.gradeLetter(this.grade);
    this.gradeText(this.grade);
  }

  gradeText(grade: number | string): string {
    return this.gradeService.grades[grade];
  }

  gradeLetter(grade: number | string): string {
    return this.gradeService.gradeAcronyms[grade];
  }
}
