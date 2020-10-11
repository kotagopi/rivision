import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit {
  viewNav = false;
  sideNavList = [{name: 'example 1'}, {name: 'example 2'}, {name: 'example 3'}];
  constructor() { }

  ngOnInit(): void {
  }
  open() {
    this.viewNav = !this.viewNav;
  }
}
