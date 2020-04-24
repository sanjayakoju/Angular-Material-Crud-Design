import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employees/employee/employee.component'


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule, } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { environment } from 'src/environments/environment';
import { ListEmployeeComponent } from './components/employees/list-employee/list-employee.component';
import { MatTableModule, } from '@angular/material/table';
import { MatIconModule, } from '@angular/material/icon';
import { MatPaginatorModule, } from '@angular/material/paginator';
import { MatSortModule, } from '@angular/material/sort';
import { MatDialogModule, } from '@angular/material/dialog';





@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    



  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EmployeeComponent]
})
export class AppModule { }
