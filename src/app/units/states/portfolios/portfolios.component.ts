import { Component, OnInit } from '@angular/core';
import {AlertService} from 'src/app/common/services/alert.service';
import { analyticsService } from 'src/app/ajs-upgraded-providers';
import { GradeService } from 'src/app/common/services/grade.service';
import { FileDownloaderService } from 'src/app/common/file-downloader/file-downloader.service';
import { visualisations } from 'src/app/ajs-upgraded-providers';
import { TaskService } from 'src/app/api/services/task.service';
// import { NewUserService } from 'path-to-new-user-service';
// import { NewProjectService } from 'path-to-new-project-service';
// import { NewTaskService } from 'path-to-new-task-service';
import { ProjectService } from 'src/app/api/services/project.service';


@Component({
  selector: 'unit-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements OnInit {
  public studentFilter = 'allStudents';
  public portfolioFilter = 'withPortfolio';
  public activeTab: any;
  public tabs: any;
  public tutor: any;
  public search = "";
  public currentPage = 1;
  public maxSize = 5;
  public pageSize = 10;
  public filterOptions = { selectedGrade: -1 };
  public gradeValues: any;
  public grades: any;
  public gradeAcronyms: any;
  public selectedStudent: any = null;
  public gradeResults = [
    { name: 'Fail', scores: [0, 10, 20, 30, 40, 44] },
    { name: 'Pass', scores: [50, 53, 55, 57] },
    { name: 'Credit', scores: [60, 63, 65, 67] },
    { name: 'Distinction', scores: [70, 73, 75, 77] },
    { name: 'High Distinction', scores: [80, 83, 85, 87] },
    { name: 'High Distinction', scores: [90, 93, 95, 97, 100] }
  ];
  public editingRationale = false;

  constructor(
    private alertService: AlertService,
    // private analyticsService: analyticsService,
    private gradeService: GradeService,
    // private newProjectService: NewProjectService,
    // private newTaskService: NewTaskService,
    private fileDownloaderService: FileDownloaderService,
    private taskService: TaskService,
    // private newUserService: NewUserService
  ) { }

  ngOnInit(): void {
    TaskService;

    this.gradeValues = this.gradeService.gradeValues;
    this.grades = this.gradeService.grades;
    this.gradeAcronyms = this.gradeService.gradeAcronyms;
    // this.tutor = this.newUserService.currentUser;
    this.tabs = {
      selectStudent: {
        title: "Select Student",
        subtitle: "Select the student to assess",
        seq: 0
      },
      viewProgress: {
        title: "View Progress",
        subtitle: "See the progress of the student",
        seq: 1
      },
      viewPortfolio: {
        title: "View Portfolio",
        subtitle: "See the portfolio of the student",
        seq: 2
      },
      assessPortfolio: {
        title: "Assess Portfolio",
        subtitle: "Enter a grade for the student",
        seq: 3
      }
    };
    this.setActiveTab(this.tabs.selectStudent);

    // this.analyticsService.watchEvent(this, 'studentFilter', 'Teacher View - Grading Tab');
    // this.analyticsService.watchEvent(this, 'sortOrder', 'Teacher View - Grading Tab');
    // this.analyticsService.watchEvent(this, 'currentPage', 'Teacher View - Grading Tab', 'Selected Page');
  }

  setActiveTab(tab: any): void {
    if (tab === this.activeTab) {
      return;
    }
    if (this.activeTab) {
      this.activeTab.active = false;
    }
    this.activeTab = tab;
    this.activeTab.active = true;

    if (this.activeTab === this.tabs.viewProgress) {
      // this.visualisations.refreshAll();
    }
  }

  // downloadGrades(): void {
  //   this.fileDownloaderService.downloadFile(this.tutor.unit.gradesUrl, `${this.tutor.unit.code}-grades.csv`);
  // }

  // downloadPortfolios(): void {
  //   this.fileDownloaderService.downloadFile(this.tutor.unit.portfoliosUrl, `${this.tutor.unit.code}-portfolios.zip`);
  // }

  // toggleEditRationale(): void {
  //   this.editingRationale = !this.editingRationale;
  // }

  // selectStudent(student: any): void {
  //   this.selectedStudent = student;
  //   this.newProjectService.loadProject(student, this.tutor.unit).subscribe({
  //     next: (project) => this.project = project,
  //     error: (message) => this.alertService.error(message, 6000)
  //   });
  // }
}
