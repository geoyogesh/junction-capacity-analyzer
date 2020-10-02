import { JunctionComponent } from './components/junctions/junction.component';
import { CreditsComponent } from './components/credits/credits.component';
import { JunctionAnalysisScoreResultsComponent } from './components/junction-analysis-score-results/junction-analysis-score-results.component';
import { JunctionAnalysisParametersComponent } from './components/junction-analysis-parameters/junction-analysis-parameters.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisComponent } from '../capx/components/analysis.component';


const routes: Routes = [
  {
    path: '', component: AnalysisComponent,
    children: [
      { path: '', redirectTo: 'inputs', pathMatch: 'full' },
      { path: 'credits', component: CreditsComponent },
      { path: 'inputs', component: JunctionAnalysisParametersComponent },
      { path: 'results', component: JunctionAnalysisScoreResultsComponent },
      {
        path: 'junctions/:id',
        component: JunctionComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapxRoutingModule { }
