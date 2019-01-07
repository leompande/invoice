import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Receipt} from '../../../store/receipt/receipt.model';

@Component({
  selector: 'app-add-edit-receipt',
  templateUrl: './add-edit-receipt.component.html',
  styleUrls: ['./add-edit-receipt.component.css']
})
export class AddEditReceiptComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddEditReceiptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { object: Receipt, objects: Receipt[] },
  ) {
  }

  ngOnInit() {
  }

  onSave() {
    // this.loading.next(true);
    // this.userService.addChwUser(this.data.objects, this.data.object)
    //   .subscribe((data) => {
    //     if (data === 'Success') {
    //       this.loading.next(false);
    //       this.store.dispatch(new UpsertChwUser({chwUser: this.data.object}));
    //       this.dataService.showSuccess();
    //     } else {
    //       this.loading.next(false);
    //       this.dataService.showError();
    //     }
    //     this.dialogRef.close();
    //   });
  }

  onClose(errorOccured: boolean = false) {
    this.dialogRef.close(errorOccured);
  }

}
