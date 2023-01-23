import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
  ɵElement
} from "@angular/forms";
import {PlatformService} from "../../../services/platformService/platform.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {

  private _loginForm = this.formBuilder.nonNullable.group({
    login:['',[Validators.required, Validators.minLength(1)]],
    motDePasse:['',[Validators.required, Validators.minLength(1)]]
  });
  private _authRequest = {
    motDePasse: undefined,
    login: undefined
  };

  private _hide = true;
  private _isSubmited = false;
  private _currentPlatform: "browser" | "native" | undefined;

  get loginForm(): FormGroup<{ [K in keyof { motDePasse: (string | (((control: AbstractControl) => (ValidationErrors | null)) | ValidatorFn)[])[]; login: (string | (((control: AbstractControl) => (ValidationErrors | null)) | ValidatorFn)[])[] }]: ɵElement<{ motDePasse: (string | (((control: AbstractControl) => (ValidationErrors | null)) | ValidatorFn)[])[]; login: (string | (((control: AbstractControl) => (ValidationErrors | null)) | ValidatorFn)[])[] }[K], never> }> {
    return this._loginForm;
  }

  get authRequest(): { motDePasse: undefined; login: undefined } {
    return this._authRequest;
  }


  get currentPlatform(): "browser" | "native" | undefined {
    return this._currentPlatform;
  }

  get hide(): boolean {
    return this._hide;
  }

  get isSubmited(): boolean {
    return this._isSubmited;
  }


  set hide(value: boolean) {
    this._hide = value;
  }

  constructor(private formBuilder :FormBuilder, private _platform:PlatformService,
              private router:Router) {
    if (sessionStorage.getItem("userData")){
      sessionStorage.removeItem("userData")
    }
    if (sessionStorage.getItem("connectedUser")){
      sessionStorage.removeItem("connectedUser")
    }

    this._currentPlatform=this._platform.currentPlatform
  }

  ngOnInit(): void {
  }

  formSubmit() {

    this._isSubmited = true;
    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!')

    } else {
      console.log(this.loginForm.value);
      this.router.navigate(["acceuil"]);
    }
    // if (this.loginForm.valid){
    //
    //   // this.authRequest.login = this.loginForm.value.login;
    //   // this.authRequest.motDePasse = this.loginForm.value.motDePasse;
    //
    //   // this.authService.login(this.authRequest)
    //   //   .subscribe(
    //   //     data =>{
    //   //       this.error=false;
    //   //       this.authService.setConnectedUser(data);
    //   //       if (this.authService.isUserLogedAndTokenValid()){
    //   //         this.authService.loadRegister(this.authRequest);
    //   //       }
    //   //     },
    //   //     error =>{
    //   //       this.error = true
    //   //       console.log(error);
    //   //     }
    //   //   );
    // }
  }

}
