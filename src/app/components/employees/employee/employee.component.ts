import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatDialogRef } from '@angular/material';
import { EmployeesComponent } from '../employees.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];

  constructor( private notificationService: NotificationService,
    private departmentService: DepartmentService,
    private service: EmployeeService,
    private dialogRef: MatDialogRef<EmployeesComponent>) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }

  ngOnInit() {
    // this.service.getEmployees();
  }

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
    this.notificationService.success(':: Form Cleared successfully');
  }

  onSubmit() {
    if (this.form.valid) {
      // this.service.insertEmployee(this.form.value);
      this.form.reset();
      this.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
    }
  }

  onClose() {
    this.form.reset();
    this.initializeFormGroup();
    this.dialogRef.close();
  }

}
