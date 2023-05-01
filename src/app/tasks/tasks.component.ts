import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  magic:any;
  1 = "green";
  index = "green";
  onSelect ($event:any) {
    // console.log($event.target.name);
    // console.log($event.target.value);
    this.magic = document.getElementById($event.target.name);
    this.magic.style.backgroundColor = $event.target.value;
  };
}
