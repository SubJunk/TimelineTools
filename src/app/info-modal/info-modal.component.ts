import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  imports: [
    MatDialogModule,
  ],
  selector: 'app-info-modal',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: 'info-modal.component.html',
})
export class InfoModalComponent {
  dialogRef = inject<MatDialogRef<InfoModalComponent>>(MatDialogRef);
  data = inject(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
