import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import { SlicePipe } from '@angular/common';
import { TaskModel } from './task-model';
import { TaskService } from './task-service';
import { TasksIcons } from './tasks-icons/tasks-icons';
import { FormattedTimePipe } from "./formatted-time-pipe";
@Component({
  selector: 'app-tasks',
  imports: [CommonModule,SlicePipe,TasksIcons,FormattedTimePipe],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
today: Date;
  tasks: TaskModel[];
  taskService: TaskService;
  queued!: number;
   queuedTasks!: number;
  queuedHeaderMapping: any = {
    '=0': 'No tasks',
    '=1': 'One task',
    'other': '# tasks'
  };
  timerMinutes: number=25;
  constructor() {
    this.taskService = new TaskService();
    this.tasks = this.taskService.taskStore;
    this.today = new Date();
  }
   ngOnInit(): void {
    this.updateQueuedTasks();
  }
 toggleTask(task: TaskModel): void {
    task.queued = !task.queued;
    this.updateQueuedTasks();
  }
    private updateQueuedTasks() {
    this.queuedTasks = this.tasks
      .filter((task: TaskModel) => task.queued)
      .reduce((no: number, queuedTask: TaskModel) => {
        return no + queuedTask.noRequired;
      }, 0)
  }
}
