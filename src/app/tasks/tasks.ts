import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import { SlicePipe } from '@angular/common';
import { TaskModel } from './task-model';
import { TaskService } from './task-service';
@Component({
  selector: 'app-tasks',
  imports: [CommonModule,SlicePipe],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
today: Date;
  tasks: TaskModel[];
  taskService: TaskService;
  constructor() {
    this.taskService = new TaskService();
    this.tasks = this.taskService.taskStore;
    this.today = new Date();
  }
  ngOnInit(): void {  }

}
