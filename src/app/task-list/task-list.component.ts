import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from './task.interface';
import { Task } from './task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskID: number;
  taskName: string;
  taskStatus: false;
  tasks: Array<ITask> = [];


  constructor() { }

  ngOnInit() {
  }

  addTask() {
    const newTask: ITask = new Task(1, this.taskName, this.taskStatus);
    if (this.tasks.length > 0) {
      newTask.id = this.tasks.slice(-1)[0].id + 1;
    }
    this.tasks.push(newTask);
    this.taskName = '';
  }

  edit(task: ITask) {
    this.taskName = task.taskName;
    this.taskID = task.id;

  }

  delete(task: ITask) {
    const index = this.tasks.findIndex(p => p.id === task.id);
    this.tasks.splice(index, 1);

  }

  onChecked(task) {
    task.status = !task.status


  }

}
