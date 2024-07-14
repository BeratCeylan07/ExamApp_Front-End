import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Router servisini içe aktarın
import { AuthLoginService } from '../../Services/user-auth-services/auth-login.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj = { branchNo: '', userName: 'demo', userPassword: 'demo123' };
  isLoading = false;
  private _subSink = new SubSink();
  constructor(private authService: AuthLoginService,private router: Router) {}

  onLogin() {
    this.isLoading = true;
    this._subSink.sink = this.authService.getLogin(this.loginObj).subscribe((result) => {
      if(result.status === true){
        localStorage.setItem("_APIToken",result.token);
        localStorage.setItem("userUID",result.userUID);
        localStorage.setItem("subeID",result.subeID);
        localStorage.setItem("userID",result.userID);
        this.router.navigate(['examapp']);
      }
    },(error) => {
      console.log(error);
    });
   
  }
}
