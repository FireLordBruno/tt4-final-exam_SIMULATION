import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: any[] = [];
  newTask = { title: '', description: '', completed: false };
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  createTask(): void {
    this.taskService.createTask(this.newTask).subscribe(() => {
      this.fetchTasks();  // Refresh tasks after creation
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.fetchTasks();  // Refresh tasks after deletion
    });
  }

  updateTask(id: number): void {
    const updatedTask = { ...this.newTask, completed: !this.newTask.completed };
    this.taskService.updateTask(id, updatedTask).subscribe(() => {
      this.fetchTasks();  // Refresh tasks after update
    });
  }
}
