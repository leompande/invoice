import {CustomerEffects} from './customer/customer.effects';
import {RouterEffects} from './router/router.effect';
import {UserEffects} from './user/user.effects';

export const effects: any[] = [
  UserEffects,
  CustomerEffects,
  RouterEffects
];
