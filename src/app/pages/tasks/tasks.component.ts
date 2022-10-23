import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TaskFormComponent } from 'src/app/forms/task-form/task-form.component';
import { Task } from 'src/app/models/taks.model';
import { TaskService } from 'src/app/services/task.service';
import { TaskTableComponent } from 'src/app/tables/task-table/task-table.component';
import { Subscription } from 'rxjs';
declare var bootstrap: any;
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {

  @ViewChild(TaskFormComponent) taskFormComponent: TaskFormComponent;
  @ViewChild(TaskTableComponent) taskTableComponent: TaskTableComponent;

  public modal: any;
  public deleteModal: any;

  public mode: string = 'create'; // To manage if we are in a creation or edition

  public taskIdToDelete: number | null;

  public deleteSubscription: Subscription;

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.modal = new bootstrap.Modal(document.getElementById('task-modal'))
    this.deleteModal = new bootstrap.Modal(document.getElementById('delete-task-modal'))
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
  onDelete(id: number) {
    this.taskIdToDelete = id;
    this.openDeleteModal();    
  }
  store() {
    this.taskFormComponent.store();
  }
  update() {
    this.taskFormComponent.update();
  }
  delete() {
    if(this.taskIdToDelete) {
      this.deleteSubscription = this.taskService.delete(this.taskIdToDelete)
      .subscribe({
        next: (res: Task)=> {
          this.taskTableComponent.list();
          this.taskIdToDelete = null;
          this.hideDeleteModal();
          window.alert('Success operation'); // We could use a plugin for notifications (for example Noty.js)
        },
      });    
    }
    
  }
  onSuccess() {
    this.hideModal();
    this.taskTableComponent.list();
    window.alert('Success operation'); // We could use a plugin for notifications (for example Noty.js)
  }

  private openModal() {    
    this.modal.show();
  }
  private hideModal() {    
    this.modal.hide();
  }
  private openDeleteModal() {    
    this.deleteModal.show();
  }
  private hideDeleteModal() {    
    this.deleteModal.hide();
  }
  ngOnDestroy() {
    if(this.deleteSubscription) {
      this.deleteSubscription.unsubscribe();
    }    
  }
}
