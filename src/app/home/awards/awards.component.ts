import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() English: any;

  public headEnglish: any = { title: 'AWARDS', subtitle: 'PERSONAL ACHIEVEMENT & COURSES' };
  public headEspanol: any = { title: 'LOGROS', subtitle: 'CURSOS Y LOGROS PERSONALES' };
  public head: any = this.headEnglish;

  


  public awardsEnglish: any = [

    {
      title: 'COURSE',
      name: 'COURSE NAME - 2022'
    },
    {
      title: 'ACHIEVEMENT',
      name: 'ACHIEVEMENT NAME - 2021'
    }
  ];


  public awardsEspanol: any = [

    {
      title: 'CURSO',
      name: 'NOMBRE DE CURSO - 2021'
    },
    {
      title: 'PREMIO',
      name: 'NOMBRE DE PREMIO - 2021'
    }
  ];

  
  public awards: any = this.awardsEnglish;

  ngOnInit() {
  }



  ngOnChanges() {
    if (this.English) {
      this.awards = this.awardsEnglish;
      this.head = this.headEnglish;
    } else {
      this.awards = this.awardsEspanol;
      this.head = this.headEspanol;
    }
  }

}
