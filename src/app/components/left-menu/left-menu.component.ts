import {Component, ViewChild, HostListener, AfterViewInit, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { MatSidenav } from '@angular/material';
import {ApplicationState} from '../../store';
import {Store} from '@ngrx/store';
import {Go} from '../../store/router/router.action';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftMenuComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'app';
  private selected: any;

  private data = [{"id": "LK", "text": "Sri Lanka"},
    {"id": "AE", "text": "United Arab Emirates"},
    {"id": "UK", "text": "United Kingdom"},
    {"id": "US", "text": "United States"}];

  ngAfterViewInit() {
    this.setSideNave(window);
  }

  setSideNave(target) {
    if (target.innerWidth < 960) {
      if (this.sidenav.opened)
        this.sidenav.close();
    }
    else {
      if (!this.sidenav.opened)
        this.sidenav.open();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setSideNave(event.target);
  }

  @HostListener('window:ready', ['$event'])
  onLoad(event) {
    this.setSideNave(event.target);
  }

  routeNavigate(routeName) {
    this.store.dispatch(new Go({path: [routeName]}));
  }
  constructor(private store: Store<ApplicationState>) { }
  //
  // ngOnInit() {
  // }

}
