import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../components/Task';
import {TASKS} from'../../components/tasks/mock-tasks'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
