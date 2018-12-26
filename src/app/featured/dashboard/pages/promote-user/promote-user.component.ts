import { Component, OnInit, OnDestroy, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AdminService } from 'src/app/core/services/admin.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-promote-user',
  templateUrl: './promote-user.component.html',
  styleUrls: ['./promote-user.component.scss']
})
export class PromoteUserComponent implements OnInit, OnDestroy {
  @ViewChildren('userRow') userRow: QueryList<ElementRef>;
  userRef: Array<ElementRef> = [];
  users: User[] = [];
  selectedUsers: User[]= [];
  loading: boolean = true;
  constructor(private router: Router, private adminService: AdminService) { }
  dtOptions: any = {}
  dtTrigger: Subject<any> = new Subject();
  ngOnInit() {
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons:[

      ],
      select: {
        style: 'multi',
      }
    };
    this.getUsers();
  }

  getUsers(){
    this.adminService.getUsersList().subscribe(response => {
      this.users = response.data;
      this.dtTrigger.next();
      this.loading = false;
    });
  }

  onRowClick(user:User, index){
    index = parseInt(index);
    this.userRef = this.userRow.toArray();
    if(!this.userRef[index].nativeElement.classList.contains('selected')){
      this.selectedUsers.push(user);
    } else{
      let index = this.arrayIndexQuery(user);
      this.selectedUsers.splice(index, 1);
    }
  }

  onPromote(){
    let body = [];
    //console.log(this.selectedUsers);
    Object.keys(this.selectedUsers).forEach(key => {
      let bodyData = {
        authlevel: 'author',
        _id: this.selectedUsers[key]._id,
        tag: this.selectedUsers[key].tag
      }
      if(this.selectedUsers[key].authlevel === "author"){
        bodyData.authlevel = 'basic';
      }
      body.push(bodyData);
    });
    console.log(body);
    this.adminService.promoteMultiUser(body).subscribe(response => {
      //console.log(response);
      this.loading = true;
      this.getUsers();
    });
  }

  private arrayIndexQuery(user: User) {
    var index;
    Object.keys(this.selectedUsers).forEach(key => {
      if(this.selectedUsers[key]._id ===  user._id){
        index = key;
      }
    });
    return index;
  }
  
  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }
}
