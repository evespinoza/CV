import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit, OnChanges {

  @Input() English: any;
  public name: string = "MY NAME";
  public titleEnglish: string = "TITLE";
  public titleEspanol: string = 'TITULO';

  public title = this.titleEnglish;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.English) {
      this.title = this.titleEnglish;
    } else {
      this.title = this.titleEspanol;
    }
  }

}
