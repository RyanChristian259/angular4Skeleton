import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TableBuilderAppModule} from '@aims/table-builder';

@NgModule({
    imports: [BrowserModule, TableBuilderAppModule],
    declarations: [AppComponent, TableBuilderAppModule],
    bootstrap: [AppComponent]
})

export class AppModule { }