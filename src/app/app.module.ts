import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header/header.component';
import { HomeComponent} from './home/home/home.component';
import { HeadlineComponent} from './home/headline/headline.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ResumeComponent } from './home/resume/resume.component';
import { SkillsComponent } from './home/skills/skills.component';
import { AwardsComponent } from './home/awards/awards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeadlineComponent,
    ProfileComponent,
    ResumeComponent,
    SkillsComponent,
    AwardsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    // NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
