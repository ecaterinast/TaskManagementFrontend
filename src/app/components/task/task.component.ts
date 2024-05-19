import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { mainService } from '../../service/service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  taskList: any=[];
  newTask: string = '';

  constructor(private service:mainService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe((list: Array<any>)=>{
      console.log(list);
      this.taskList = list.map(t => t.name);
    })
  }


  addTask(): void {
    
    if (this.newTask.trim() !== '') {
      this.taskList.push(this.newTask);
      this.service.setTask({
        "id": 0,
        "name": this.newTask,
        "description": "string",
        "taskCreated": "2024-03-10T20:47:54.885Z",
        "dueDate": "2024-03-10T20:47:54.885Z",
        "isCompleted": true
        
      }).subscribe(x=>{
        console.log(x);
      })
      this.newTask = '';
      

    }
  }

  removeTask(index: number, name: string): void {
    
    this.service.removeTask(name).subscribe(x=>{
      console.log(x);
      this.taskList.splice(index, 1);
    })
    
  }
}

