import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { ErrorDialogComponent } from '../components/error/error.component';
import { InformationComponent } from '../components/information/information.component';


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

    openInformationDialog(title: string, url: string, count: number, expiration: Date): Observable<any> {
        let dialogRef: MdDialogRef<InformationComponent>;

        dialogRef = this.dialog.open(InformationComponent, {
            position: {top: '10%'},
            data: {
                title: title,
                url: url,
                expiration: expiration,
                count: count
            }
        });

        return dialogRef.afterClosed();
    }
}
