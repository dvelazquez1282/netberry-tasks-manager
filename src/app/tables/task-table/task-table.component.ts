import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/taks.model';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit, OnDestroy {

  public tasks: Task[] | null

  public subscription: Subscription;

  @Output() create = new EventEmitter<any>();
  @Output() edit = new EventEmitter<Task>();

  constructor(public taskService: TaskService) { }
  

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.subscription = this.taskService.list()
      .subscribe({
        next: (res: Task[])=> {                    
          this.tasks = res; // For the moment we have not pagination
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCreate() {
    this.create.emit();
  }
  onEdit(task: Task) {
    this.edit.emit(task);
  }

}
