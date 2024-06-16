import { Component, Inject } from '@angular/core';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-new-user-set',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    NgxMaskDirective
  ],
  providers: [
    provideNgxMask()
  ],
  templateUrl: './new-user-set.component.html',
  styleUrl: './new-user-set.component.scss'
})
export class NewUserSetComponent {
  newStudentData = {
    ad: '',
    soyad: '',
    telefon: '',
    eposta: '',
    subeID: 1,
    studentUID:'',
    role:this.userRole,
    userID: Number(localStorage.getItem("userID")),
  };

  phoneMask = "000 000 00 00";
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;
  constructor(
    private _studentService: AppExamApiService,
    public dialogRef: MatDialogRef<NewUserSetComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public userRole: number,
  ) {}
  ngOnInit(): void {
    this.progressBarMode = 'determinate';
    this.progressBarValue = 100;
  }
  postUserData() {
    this.progressBarMode = 'indeterminate';
    this.progressBarValue = 40;
    this._studentService.post_Student(this.newStudentData).subscribe(
      (result) => {
        console.log(result);
        this.dialogRef.close();

        this.progressBarMode = 'determinate';
        this.progressBarValue = 100; // Change to desired value
      },
      (error) => {
        this.dialog.open(ResultMessageBoxDialogComponent,{
          data:{
            title:"hata oluştu",
            message:error.message
          },
          width:"auto",
          height:"auto",
          autoFocus:true,
        })
        this.progressBarMode = 'determinate';
        this.progressBarValue = 100; // Change to desired valu
      }
    );
  }
}
