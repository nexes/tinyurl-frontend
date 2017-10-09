import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { ErrorDialogComponent } from '../components/error/error.component';


@Injectable()
export class DialogWindowService {
    constructor(private dialog: MdDialog) {

    }

    openErrorDialog(title: string, message: string): Observable<any> {
        let dialogRef: MdDialogRef<ErrorDialogComponent>;

        dialogRef = this.dialog.open(ErrorDialogComponent, {
            data: {
                title: title,
                message: message
            }
        });

        return dialogRef.afterClosed();
    }
}
