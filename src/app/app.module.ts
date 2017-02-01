import { DigitransitService } from './services/digitransit.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SetupComponent } from './setup/setup.component';

const routeConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'setup/'
  },
  {
    path: 'setup',
    component: SetupComponent
  },
  {
    path: 'routes',
    component: RoutesComponent
  },
  {
    path: 'routes/:stop',
    component: RoutesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    TopBarComponent,
    SetupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
