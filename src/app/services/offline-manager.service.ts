import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store';
import { LocalStorageService } from './localStorageService';

@Injectable({
  providedIn: 'root'
})
export class OfflineManagerService {

  constructor(
    private store: Store<ApplicationState>,
    private localDbService: LocalStorageService
  ) { }


  updateInformation(ouId = null) {

  }

  /**
   * Will pull updates for all events in the system [to exclude event just ignore the storage key in metadata
   * @param ouId
   */
  updateEventInformation(ouId = null) { }

  /**
   * This will update the programs to skip a program just skip the storage key
   * @param ouId
   */
  updateProgramInformation(ouId = null) { }

  clearAllLocalData() {
    // Object.keys(DataStoreKeys).forEach(
    //   key => {
    //     this.localDbService.clearAll(DataStoreKeys[key]).subscribe();
    //   }
    // );
  }

  updateStore(ouId, key) {}

}
