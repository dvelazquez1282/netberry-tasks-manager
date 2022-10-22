import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SelectInputComponent } from 'src/app/inputs/select-input/select-input.component';
import { TextAreaInputComponent } from 'src/app/inputs/text-area-input/text-area-input.component';
import { TextInputComponent } from 'src/app/inputs/text-input/text-input.component';
import { Task } from 'src/app/models/taks.model';
import { TextInputComponentConfigType } from 'src/app/models/text-component-config.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { TaskService } from 'src/app/services/task.service';
import { TypeService } from 'src/app/services/type.service';
import { Type } from 'src/app/models/type.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @ViewChild('title') titleTextInput: TextInputComponent;
  @ViewChild('description') descriptionTextAreaInput: TextAreaInputComponent;
  @ViewChild('deadline') deadlineTextInput: TextInputComponent;
  @ViewChild('typeId') typeIdSelectInput: SelectInputComponent;

  @Output() success = new EventEmitter<any>();

  public debug: boolean;

  public task: Task;

  public formConfig: any = {
    title: {
      id: "title",
      label: "Title",
      rules: {
        required: true
      },
      type: TextInputComponentConfigType.text
    },
    description: {
      id: "description",
      label: "Description",
      rules: {
        required: true
      },      
    },
    deadline: {
      id: "deadline",
      label: "Deadline",
      rules: {
        required: true
      },
      type: TextInputComponentConfigType.text
    },
    typeId: {
      id: "typeId",
      label: "Type",
      rules: {
        required: true
      },      
    },
  }

  public types: Type[];

  public subscription: Subscription;
  public typeSubscription: Subscription;
  
  public error: string | null;
  

  constructor(public taskService: TaskService, public typeService: TypeService) { 
    
  }

  ngOnInit(): void {
    this.debug = environment.debug;    
    this.listTypes();
  }

  create() {
    this.task = new Task();
    this.task.typeId = null;
    this.task.createdAt = new Date().toString(); // We could use momentjs for format
  }
  edit(task: Task) {
    this.task = task;
  }

  isValidForm(): boolean {
    return this.titleTextInput?.valid() 
      && this.descriptionTextAreaInput?.valid()
      && this.deadlineTextInput?.valid()
      && this.typeIdSelectInput?.valid();
  }
  store(): void {
    if(this.isValidForm()) {
      this.typeSubscription = this.taskService.store(this.task)
        .subscribe({
          next: (res: Task)=> {
            this.success.emit(); // To notify to the page that the table must be refreshed
          },
          error: (error) => {
            this.error = error;            
          }
        });

    }    
  }
  update(): void {
    if(this.isValidForm()) {
      this.typeSubscription = this.taskService.update(this.task)
        .subscribe({
          next: (res: Task)=> {
            this.success.emit(); // To notify to the page that the table must be refreshed
          },
          error: (error) => {
            this.error = error;            
          }
        });

    }    
  }

  listTypes() {
    this.subscription = this.typeService.list()
      .subscribe({
        next: (res: Type[])=> {                    
          this.types = res; // For the moment we have not pagination
          this.formConfig.typeId.options = [];
          this.types.forEach((type) => {
            this.formConfig.typeId.options.push({label: type.title, value: type.id});
          })
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.typeSubscription.unsubscribe();
  }
}
