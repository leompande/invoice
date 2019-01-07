import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  fadeSmooth,
  ROUTE_ANIMATIONS_ELEMENTS
} from '../animations/router-animation';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  animations: [
    fadeSmooth,
    trigger('fadeOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('300ms ease-in'))
    ])
  ]
})
export class DataTableComponent implements OnInit, OnChanges {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  /** Table Inputs */
  @Input()
  tableConfigurations: {
    tableList: any[];
    tableColumns: Array<{ name: string; label: string }>;
    tableCaption: string;
    allowPagination: boolean;
    tableNotifications: any;
    actionIcons: any;
    doneLoading: any;
    deleting: any;
    showSearch: boolean;
    showBorder: boolean;
    empty_msg: string;
  } = {
    tableList: [],
    tableColumns: [],
    tableCaption: '',
    allowPagination: true,
    tableNotifications: null,
    actionIcons: {
      edit: false,
      delete: false,
      more: false,
      print: false
    },
    doneLoading: false,
    deleting: {},
    showSearch: true,
    showBorder: true,
    empty_msg: 'No Data'
  };
  @Input()
  loading: boolean;

  /** Table Events */
  @Output()
  rowUpdate: EventEmitter<any> = new EventEmitter();
  @Output()
  rowDelete: EventEmitter<any> = new EventEmitter();
  @Output()
  rowPreview: EventEmitter<any> = new EventEmitter();
  @Output()
  rowPrint: EventEmitter<any> = new EventEmitter();

  @Input()
  loadingMessage: string = null;
  searchQuery: string;

  /** list of fields that are searchable */
  searchFields: string;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[] = [];
  pageSize = 10;
  currentPage = 1;

  pageSizeChanger = [
    {
      item: '3',
      count: 3,
      className: ''
    },
    {
      item: '10',
      count: 10,
      className: 'active'
    },
    {
      item: '100',
      count: 100,
      className: ''
    },
    {
      item: 'Show all',
      count: null,
      className: ''
    }
  ];
  showDelete: any = {};
  constructor() {}

  ngOnInit() {
    if (this.tableConfigurations) {
      this.tableConfigurations.showSearch =
        this.tableConfigurations.showSearch !== null
          ? this.tableConfigurations.showSearch
          : true;
      this.tableConfigurations.allowPagination =
        this.tableConfigurations.allowPagination !== null
          ? this.tableConfigurations.allowPagination
          : true;
      this.tableConfigurations.showBorder =
        this.tableConfigurations.showBorder !== null
          ? this.tableConfigurations.showBorder
          : false;
      this.searchFields = this.tableConfigurations.tableColumns
        .map(column => column.name)
        .join(',');
      this.tableConfigurations.actionIcons = this.tableConfigurations
        .actionIcons
        ? this.tableConfigurations.actionIcons
        : {
            edit: false,
            delete: false,
            more: false,
            print: false
          };
    } else {
      this.tableConfigurations.showSearch = true;
      this.tableConfigurations.allowPagination = true;
      this.tableConfigurations.showBorder = false;
      this.tableConfigurations.actionIcons = {
        edit: false,
        delete: false,
        more: false,
        print: false
      };
    }
  }

  ngOnChanges() {
    this.setPage(this.currentPage);
  }

  setPage(page: number) {
    if (this.tableConfigurations) {
      // get pager object from service
      this.pager = this.getPager(
        this.tableConfigurations.tableList.length,
        page,
        this.pageSize
      );
      this.pageSizeChanger[3].count = this.tableConfigurations.tableList.length;
      // get current page of items
      if (this.tableConfigurations.allowPagination) {
        this.pagedItems = this.tableConfigurations.tableList.slice(
          this.pager.startIndex,
          this.pager.endIndex + 1
        );
      } else {
        this.pagedItems = this.tableConfigurations.tableList;
      }
    }
  }

  /**
   * Go to previous Page
   */
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.setPage(this.currentPage);
    }
  }

  /**
   * Go to Next Page
   */
  nextPage() {
    if (this.currentPage < this.pager.totalPages) {
      this.currentPage++;
      this.setPage(this.currentPage);
    }
  }

  /**
   * React to page size changes
   */
  changePageSize(pageSize) {
    this.pageSize = pageSize.item;
    this.pageSizeChanger = this.pageSizeChanger.map(pager => {
      // pageSize.item = pager.item ? pager.className = 'active' : pager.className = '';
      pager.className = '';
      if (pager.item === pageSize.item) {
        pager.className = 'active';
        this.pageSize = pager.count;
      }
      return pager;
    });
    this.setPage(1);
  }

  viewItemDetails(itemId) {
    this.rowPreview.emit(itemId);
  }

  editItem(itemId) {
    this.rowUpdate.emit(itemId);
  }

  printItem(itemId) {
    this.rowPrint.emit(itemId);
  }

  deleteItem(itemId) {
    this.rowDelete.emit(itemId);
  }

  /**
   * This method is used to prepare current visible items
   * @param totalItems
   * @param currentPage
   * @param pageSize
   */
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      i => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}
