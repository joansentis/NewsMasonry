import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Main modules
import { newsListComponent } from '../pages/newsList/newsList.component';
import { newsDetailsComponent } from '../pages/newsDetails/newsDetails.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'newsList', pathMatch: 'full' },
    { path: 'newsList', component: newsListComponent },
    { path: 'newsDetails/:id', component: newsDetailsComponent },
    { path: '**', redirectTo: 'newsList', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
