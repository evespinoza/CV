import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnChanges {
  @Input() English: any;

  public jobs: any = [];
  jobsEnglish: Job[];
  jobsEspanol: Job[];
  
  public headEnglish: any = { title: 'RESUME', subtitle: 'MY EDUCATION AND EXPERIENCE' };
  public headEspanol: any = { title: 'EXPERIENCIA', subtitle: 'EDUCACIÓN Y EXPERIENCIA LABORAL' };
  public head: any = this.headEnglish;

  constructor() {

    const job_1: Job = new Job('DESCRIPTION', '2020-2022', 'COMPANY',
      '<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        + '</P><ul><li>TASK 1</il><li>TASK 2</li></ul>', 1);


    const job_2: Job = new Job('DESCRIPTION', '2019', 'COMPANY',
      '<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>', 1);


    const school_1: Job = new Job('CARRER', '2017-2019', 'SCHOOL',
      '<P>SOME DESCRIPTION.</P>', 1);

    
    
      const trabajo_1: Job = new Job('DESCRIPCIÓN', '2020-2022', 'COMPAÑIA',
      '<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        + '', 1);


    const trabajo_2: Job = new Job('DESCRIPCIÓN', '2019', 'COMPAÑIA',
      '<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>', 1);


    const escuela_1: Job = new Job('CARRERA', '2017-2019', 'ESCUELA',
      '<P>ALGUNA DESCRIPCIÓN.</P>', 1);
    
    
    this.jobsEnglish = [job_1,job_2,school_1];
    this.jobsEspanol = [trabajo_1,trabajo_2,escuela_1];
    this.jobs = this.jobsEnglish;
  }



  ngOnInit() {
  }


  ngOnChanges() {
    if (this.English) {
      this.head = this.headEnglish;
      this.jobs = this.jobsEnglish;
    } else {
      this.head = this.headEspanol;
      this.jobs = this.jobsEspanol;
    }
  }

}
