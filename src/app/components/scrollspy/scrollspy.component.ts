import { Component, OnInit } from '@angular/core';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scrollspy',
  templateUrl: './scrollspy.component.html',
  styleUrls: ['./scrollspy.component.sass']
})
export class ScrollspyComponent implements OnInit {
  faCogs = faCogs;
  constructor() { }

  ngOnInit(): void {
  }

}
