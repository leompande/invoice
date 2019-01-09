import {Component, OnInit} from '@angular/core';
import {ApplicationState} from '../../store';
import {LoginUser} from '../../store/user/user.actions';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {getIsLogginState, getLoginFailureState, getLoginSuccessState} from '../../store/user/user.selector';
import {Go} from '../../store/router/router.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: { username: string, password: string } = {username: '', password: ''};
  $isLoggingIn: Observable<any>;
  $loginSuccess: Observable<boolean>;
  $loginFailure: Observable<boolean>;

  constructor(private store: Store<ApplicationState>) {
    this.$isLoggingIn = this.store.pipe(select(getIsLogginState));
    this.$loginSuccess = this.store.pipe(select(getLoginSuccessState));
    this.$loginFailure = this.store.pipe(select(getLoginFailureState));
  }

  ngOnInit() {
    const token = localStorage.getItem('invoice-web-token');
    if (token) {
      this.store.dispatch(new Go({path: ['', 'page', 'dashboard']}));
    }
  }

  login() {
    this.store.dispatch(new LoginUser({
      credential: {
        username: this.user.username, password: this.user.password
      }
    }));
  }

}
