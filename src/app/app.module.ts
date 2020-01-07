import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
	EventListComponent,
	EventThumbnailComponent,
	EventService,
	EventDetailComponent,
	CreateEventComponent,
	EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index'


import { NavBarComponent } from './nav/navbar.component'

import { ToastrService } from './common/toastr.service'
import { CollapsibleWellComponent } from './common/collapsible-well.component'

import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'
import { AppComponent } from './app.component';

import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,
  ToastrService,
  EventRouteActivator,
  EventListResolver,
  AuthService,
  {provide:'canDeactivateCreateEvent' , useValue:checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
	if(component.isDirty) 
		return window.confirm("You have not saved this event,do you want to leave?")
	return true
}

