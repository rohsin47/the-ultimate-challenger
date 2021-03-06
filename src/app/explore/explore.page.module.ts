import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExplorePage } from './explore.page';
import { LeaderboardPage } from './leaderboard/leaderboard.page';
import { CharityPage } from './charity/charity.page';
import { TriviaPage } from './trivia/trivia.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ExplorePage }])
  ],
  declarations: [ExplorePage]
})
export class ExplorePageModule {}
