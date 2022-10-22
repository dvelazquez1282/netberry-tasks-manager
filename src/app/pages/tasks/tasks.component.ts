import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskFormComponent } from 'src/app/forms/task-form/task-form.component';
import { Task } from 'src/app/models/taks.model';
import { TaskTableComponent } from 'src/app/tables/task-table/task-table.component';
declare var bootstrap: any;
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @ViewChild(TaskFormComponent) taskFormComponent: TaskFormComponent;
  @ViewChild(TaskTableComponent) taskTableComponent: TaskTableComponent;

  public modal: any;

  public mode: string = 'create'; // To manage if we are in a creation or edition

  constructor() { }

  ngOnInit(): void {
    this.modal = new bootstrap.Modal(document.getElementById('task-modal'))
  }

  onCreate() {
    this.mode = 'create';
    this.openModal();
    this.taskFormComponent.create();
  }
  onEdit(task: Task) {
    this.mode = 'edit';
    this.openModal();
    this.taskFormComponent.edit(task);
  }
  store() {
    this.taskFormComponent.store();
  }
  update() {
    this.taskFormComponent.update();
  }
  onSuccess() {
    this.hideModal();
    this.taskTableComponent.list();
  }

  private openModal() {    
    this.modal.show();
  }
  private hideModal() {    
    this.modal.hide();
  }
  

}
