import { Pipe, PipeTransform } from '@angular/core';
import * as Moment from 'moment';

@Pipe({
  name: 'expiredWarning'
})
export class ExpiredWarningPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const date = new Date(value).toISOString().substring(0, 10);
    const given = Moment(date, 'YYYY-MM-DD');
    const current = Moment().startOf('day');
    if (args && args === 'negate') {
      return Math.abs(Moment.duration(given.diff(current)).asDays());
    }
    return Moment.duration(given.diff(current)).asDays();
  }
}
