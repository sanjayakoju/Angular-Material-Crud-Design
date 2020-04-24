import { EmployeeComponent } from './../employee/employee.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { EmployeeService } from 'src/app/services/employee.service';
import { DepartmentService } from 'src/app/services/department.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee
  constructor(private service: EmployeeService,
    private departmentService: DepartmentService,
    private dialog: MatDialog,
    private notificationService: NotificationService) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'departmentName', 'actions'];
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    // this.service.getEmployees().subscribe(
    //   res=>
    //   {
    //       this.employees=res
    //   });
      // list => {
      //   let array = list.map(item => {
      //     return {
      //       $key: item.key,
      //       ...item.payload.val()
      //     };
      //   });
      //   this.listData = new MatTableDataSource(array);
      //   this.listData.sort = this.sort;
      //   this.listData.paginator = this.paginator;
      //   this.listData.filterPredicate = (data, filter) => {
      //     return this.displayedColumns.some(ele => {
      //       return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
      //     });
      //   };
      // );
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }


  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EmployeeComponent,dialogConfig);
    console.log("on create work")
  }

  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EmployeeComponent,dialogConfig);
  }

  onDelete($key){
    if(confirm('Are you sure to delete this record ?')){
    this.service.deleteEmployee($key);
    this.notificationService.warn('! Deleted successfully');
    }
  }
}
