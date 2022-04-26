import * as _ from 'lodash';



export class Job {

  endPTag = '</p>';
  startPTag = '<p>';
  public expanded = false;
  public displayedDescription: string;
  public elastic: boolean;

  constructor(public company: string,
          // public image: string,
              public period: string, public position: string,
              public description: string, private paragraphsToShow: number ) {
    this.elastic = this.isShowMore();
    this.displayedDescription = this.getDescription();
  }

  public expandOrCollapse(): boolean {
    this.expanded = !this.expanded;
    this.displayedDescription = this.getDescription();
    return false;
  }

  private isShowMore(): boolean {
    const tokens: string[] = this.description.replace(/<\/p>/g,  ' ' + this.endPTag + ' ')
      .replace(/<p>/g, ' ' + this.startPTag + ' ').split(' ');
    const pTag = this.endPTag;
    const numberOfPararaphs: number = _.filter(tokens,  (token: any)  =>  {return token.indexOf(pTag) > -1; }).length;
    return numberOfPararaphs > this.paragraphsToShow;
  }

  private getDescription(): string{
    if (!this.isShowMore()) {
      return this.description;
    } else if (this.expanded) {
      return this.description;
    } else {
      return this.condensedDescription();
    }
  }


  private condensedDescription(): string {
    let paragraphCount = 0;
    let condensedDescription = '';
    let paragraphsToShow = this.paragraphsToShow;
    let pTag = this.endPTag;
    const tokens: string[] = this.description.replace(/<\/p>/g,  ' ' + this.endPTag + ' ')
      .replace(/<p>/g, ' ' + this.startPTag + ' ').split(' ');
    _.each(tokens, (token: any)  =>  {
        if (paragraphCount < paragraphsToShow) {
          if (token === pTag) {
            paragraphCount = paragraphCount + 1;
          }
          condensedDescription = condensedDescription + ' ' + token;
        }
    });
    return condensedDescription;
  }


}
