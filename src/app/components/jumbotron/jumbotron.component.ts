import { Component, OnInit } from '@angular/core';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.sass']
})
export class JumbotronComponent implements OnInit {
  faVideo = faVideo;
  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
