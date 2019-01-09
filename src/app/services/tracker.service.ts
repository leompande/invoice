import {Injectable} from '@angular/core';
import {HttpClientService} from './http-client.service';
import * as _ from 'lodash';
import {combineLatest, Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../store';
import {LocalStorageService} from './localStorageService';

// import {TrackedEntityTypes} from '../store/metadata-mapping/programs';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  constructor(
    private http: HttpClientService,
    private store: Store<ApplicationState>,
    private localDbService: LocalStorageService
  ) {
  }

  // // save tracked entity
  // saveTrackedEntity(trackedEntity) {
  //   return this.http.post(`30/trackedEntityInstances`, trackedEntity);
  // }

  // save events
  saveEvent(event) {
    return this.http.post(`events`, event);
  }

  updateEvent(event, eventId) {
    return this.http.put(`events/${eventId}`, event);
  }

  deleteEvent(eventId) {
    return this.http.delete(`events/${eventId}`);
  }

  //
  // // update tracked entity
  // updateTrackedEntity(trackedEntity, trackedEntityInstanceId) {
  //   return this.http.put(
  //     `30/trackedEntityInstances/${trackedEntityInstanceId}`,
  //     trackedEntity
  //   );
  // }
  //
  // // cancel tracked entity
  // cancelTrackedEntity(trackedEntity, trackedEntityInstanceId) {
  //   return this.http.put(
  //     `30/trackedEntityInstances/${trackedEntityInstanceId}`,
  //     trackedEntity
  //   );
  // }
  //
  // // get enrollments tracked entity
  // getEnrollments(trackedEntityId, ouId) {
  //   return this.http.get(
  //     `30/enrollments.json?ou=${ouId}&ouMode=SELECTED&trackedEntity=${trackedEntityId}`
  //   );
  // }
  //
  // // delete tracked entity
  // deleteTrackedEntity(trackedEntity, trackedEntityInstanceId) {
  //   return this.http.put(
  //     `30/trackedEntityInstances/${trackedEntityInstanceId}`,
  //     trackedEntity
  //   );
  // }

  getEvents(ou, stageKey, ouMode = 'SELECTED', filter = ''): Observable<any> {
    return Observable.create(observer => {
      const eventRequest = this.http.get(
        `api/events.json?orgUnit=${ou}&programStage=${stageKey}&order=lastUpdated:desc&paging=false`
      );

      eventRequest.subscribe(
        (result: any) => {
          observer.next(result.events);
          observer.complete();
        },
        error => observer.error()
      );
    });
  }

  // getEvents(key, ou, stageKey, ouMode = 'SELECTED', filter = ''): Observable<any> {
  //   return Observable.create(observer => {
  //     const metadata = TrackedEntityTypes[key];
  //     if (!metadata) {
  //       observer.next([]);
  //       observer.complete();
  //     } else {
  //       const stage = metadata.stage[stageKey];
  //       const eventsRequest = this.http.get(
  //         `events.json?programStage=${
  //           stage.id
  //         }&orgUnit=${ou}&ouMode=${ouMode}&paging=false${filter}`
  //       );
  //       eventsRequest.subscribe(
  //         (result: any) => {
  //           const retunItem = result.events.map(event => {
  //             const dataObject = {};
  //             dataObject['id'] = event.event;
  //             dataObject['organisation_unit_id'] = event.orgUnit;
  //             dataObject['trackedEntityInstance'] = event.trackedEntityInstance;
  //             dataObject['enrollment'] = event.enrollment;
  //             dataObject['created'] = event.created;
  //             dataObject['programStage'] = event.programStage;
  //             stage.dataElements.forEach(element => {
  //               const attribute_name = this._getAttributeKeyId(
  //                 stage.dataElements,
  //                 element.key
  //               );
  //               const dataElement = _.find(event.dataValues, {
  //                 dataElement: attribute_name
  //               });
  //               if (dataElement) {
  //                 dataObject[element.key] = dataElement['value'];
  //               }
  //             });
  //             return dataObject;
  //           });
  //           observer.next(retunItem);
  //           observer.complete();
  //         },
  //         error => observer.error()
  //       );
  //     }
  //   });
  // }

}
