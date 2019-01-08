import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../store';
import {Go} from '../store/router/router.action';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel, ActivatedRoute
} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, AfterViewInit {
  loading: boolean = false;

  constructor(
    private store: Store<ApplicationState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {

  }

  ngOnInit() {
  }

  logOut() {
    localStorage.removeItem('invoice-web-token');
    this.store.dispatch(new Go({path: ['login']}));
  }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        this.loading = false;
      }
    });
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route: any) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    ).subscribe((event) => this.titleService.setTitle(event['title']));
  }
}
