import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tour-of-heroes',
  templateUrl: './tour-of-heroes.component.html',
  styleUrls: ['./tour-of-heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourOfHeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
