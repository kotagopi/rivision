import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-agri-wrapper',
  templateUrl: './agri-wrapper.component.html',
  styleUrls: ['./agri-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgriWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
