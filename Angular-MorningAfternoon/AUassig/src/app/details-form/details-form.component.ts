import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent {

  list = []

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    contact: new FormControl(''),
    dob: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl(''),
  });

  onSubmit() {

    this.list.push(this.profileForm.value);
    console.log(this.list)
    this.profileForm.reset()
  }

  deleteName = new FormGroup({
    firstName: new FormControl('')
  })

  delete() {
    var name = this.deleteName.value.firstName
    this.list = this.list.filter((item) => name != item.firstName)

  }

  sort(x) {

    this.list.sort((a, b) => a.x > b.x ? 1 : -1)


  }




}
