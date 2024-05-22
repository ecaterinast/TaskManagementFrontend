import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { mainService } from '../../service/service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent implements OnInit {
  taskList: any = [];
  newTask: string = '';

  checkoutForm = this.formBuilder.group({
    name: '',
    status: '',
    description: '',
    type: 0,
    priority: 0
    //taskCreated: ''
    //dueDate: ''
    //isCompleted: ''
  });

  constructor(private service: mainService,  private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe((list: Array<any>) => {
      console.log(list);
      this.taskList = list.map(t => t.name);
    })
  }

  onSubmit() {
    console.log(this.checkoutForm.value);
    this.taskList.push(this.checkoutForm.value);
    //this.checkoutForm.value.taskCreated = new Date().toISOString();
    //this.checkoutForm.value.dueDate = new Date().toISOString();
    this.checkoutForm.value.type = this.checkoutForm.value.type * 1;
    this.service.setTask(this.checkoutForm.value).subscribe(x => {
      console.log(x);
    })
  }


  removeTask(name: string): void {

    this.service.removeTask(name).subscribe(x => {
      console.log(x);
      this.taskList.splice(0, 1);
    })

  }
}

