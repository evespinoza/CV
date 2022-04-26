import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
  
export class ProfileComponent implements OnInit, OnChanges  {
  

  public titleEnglish: string = "TITLE";
  public subtitleEnglish: string = "SUB TITLE";
  
  public titleEspanol: string = 'TITULO';  
  public subtitleEspanol: string = 'SUB TITULO';


  public title = this.titleEnglish;
  public subtitle = this.subtitleEnglish;


  // You can use a HTML tags in 'data'
  public profileEnglish: any =
    {
      title: 'SOME DESCRIPCTION:', data: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      + '<BR> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>',
      contact: 'CONTACT', sp: 'SOCIAL PROFILES'
    };
  
    public profileEspanol: any =
      {
        title: 'ALGUNA DESCRIPCIÓN:', data: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        + '<BR> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>',
        contact: 'CONTACTO', sp: 'PERFILES'
      };
  
  public profile = this.profileEnglish;
  @Input() English: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.English) {
      this.title = this.titleEnglish;
      this.subtitle = this.subtitleEnglish;
      this.profile = this.profileEnglish;
    } else {
      this.title = this.titleEspanol;
      this.subtitle = this.subtitleEspanol;
      this.profile = this.profileEspanol;
    }
  }


}
