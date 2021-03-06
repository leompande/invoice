import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularIndexedDB} from './angular2-indexeddb';
import { objectLiteralExpression } from 'codelyzer/util/astQuery';


@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  db;
  constructor() {
    this.db = new AngularIndexedDB('tanpay_invoce_metadata', 1);
  }

  /**
   * Initiate the store
   * @returns {Promise<any>}
   * @private
   */
  _initiateStoreObjects() {
    return this.db.createStore(2, (evt) => {
      console.log(`creating Offline invoices table`);
      this.createStore(evt, 'invoices', 'id');
      console.log(`creating Offline customers table`);
      this.createStore(evt, 'customers', 'id');
      console.log(`creating Offline Payments table`);
      this.createStore(evt, 'payments', 'id');
      console.log(`creating Offline Users table`);
      this.createStore(evt, 'users', 'id');
    });
  }

  createStore( evt, key: string, index: string ) {
    const objectStore = evt.currentTarget.result.createObjectStore(
      key, { keyPath: index });
    objectStore.createIndex(index, index, { unique: false });
  }

  /**
   * Add item to store in existing table
   * @param table
   * @param value
   * @returns {any}
   */
  add(table: string, value: any): Observable<any> {
    return Observable.create(observer => {
      this._initiateStoreObjects().then(() => {
        this.db.add(table, value).then(() => {
          observer.next(value);
          observer.complete();
        }, (error) => {
          console.log('an error occuers', error);
          observer.error(error);
        });
      });
    });
  }

  /**
   * Update existing value in store
   * @param table
   * @param value // this should have the id same as one in system
   * @returns Observable{any}
   */
  update( table: string, value: any ): Observable<any> {
    return Observable.create(observer => {
      this._initiateStoreObjects().then(() => {
        this.db.update(table, value).then(() => {
          observer.next(value);
          observer.complete();
        }, (error) => {
          console.log(error);
        });
      });
    });
  }

  /**
   * get a single item by using index
   * @param table
   * @param index
   * @param index_value
   * @returns {any}
   */
  getByIndex( table: string, index: string, index_value: string ): Observable<any> {
    return Observable.create(observer => {
      this._initiateStoreObjects().then(() => {
        this.db.getByIndex(table, index, index_value ).then((item) => {
          observer.next(item);
          observer.complete();
        }, (error) => {
          observer.error(error);
        });
      });
    });
  }


  /**
   * get an item by key
   * @param table
   * @param key_value
   * @returns {any}
   */
  getByKey( table: string, key_value: any ): Observable<any> {
    return Observable.create(observer => {
      this._initiateStoreObjects().then(() => {
        this.db.getByKey(table, key_value).then((item) => {
          observer.next(item);
          observer.complete();
        }, (error) => {
          observer.error(error);
        });
      });
    });
  }

  getByKeys( table: string, keys: Array<any> ): Observable<any> {
    return Observable.create(observer => {
      this._initiateStoreObjects().then(() => {
        this.db.getByKeys(table, keys).then((items) => {
          observer.next(items);
          observer.complete();
        }, (error) => {
          observer.error(error);
        });
      });
    });
  }


  /**
   * get all items in a store
   * @param store_key
   * @returns {any}
   */
  getAll( store_key: string ): Observable<any> {
    return Observable.create(observer => {
      this._initiateStoreObjects().then(() => {
        this.db.getAll(store_key).then((values) => {
          observer.next(values);
          observer.complete();
        }, (error) => {
          observer.error(error);
        });
      });

    });
  }

  /**
   * delete all items in a store
   * @param store_key
   * @returns {any}
   */
  clearAll( store_key: string ): Observable<any> {
    return Observable.create(observer => {
      this._initiateStoreObjects().then(() => {
        this.db.clear(store_key).then(() => {
          observer.next('Values cleared');
          observer.complete();
        }, (error) => {
          observer.error(error);
        });
      });

    });
  }

  /**
   * delete a single item in a store
   * @param store_key
   * @param index
   * @returns {any}
   */
  delete( store_key: string, index: string ): Observable<any> {
    return Observable.create(observer => {
      this._initiateStoreObjects().then(() => {
        this.db.remove(store_key, index).then(() => {
          observer.next( index + 'Values cleared' );
          observer.complete();
        }, (error) => {
          observer.error( error );
        });
      });

    });
  }

  /**
   * delete a single item in a store
   * @param store_key
   * @param index
   * @returns {any}
   */
  deleteDB(): Observable<any> {
    return Observable.create(observer => {
      const req = indexedDB.deleteDatabase('vvsmetadata');
      req.onsuccess = () => {
        console.log('Deleted database successfully');
        observer.next('success');
        observer.complete();
      };
      req.onerror = () => {
        console.log('Couldnt delete database');
        observer.next('success');
        observer.complete();
      };
      req.onblocked =  () => {
        console.log('delete database due to the operation being blocked');
        observer.error();
      };
    });
  }

}
