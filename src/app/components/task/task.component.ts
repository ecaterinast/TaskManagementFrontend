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
  taskList: string[] = [];
  newTask: string = '';

  constructor(private service:mainService) { }

  ngOnInit(): void {
  }


  addTask(): void {
    this.service.getTask().subscribe(x=>{
      console.log(x);
    })
    if (this.newTask.trim() !== '') {
      this.taskList.push(this.newTask);
      this.newTask = '';
    }
  }

  removeTask(index: number): void {
    this.taskList.splice(index, 1);
  }
}

