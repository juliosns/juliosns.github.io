import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  private url:string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.url = this.activatedRoute.url['value'][0].path;
      var el: HTMLElement = document.getElementById(this.url);
      el.classList.add('active');
  } 

}
