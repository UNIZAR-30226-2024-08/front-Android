import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegConGoogleComponent } from "./reg-con-google/reg-con-google.component";

export const LOGIN_ROUTES: Routes = [
    {
        path:'',
        title: 'login',
        component: LoginComponent
    },
    {
        path: 'login-google',
        title: 'reg-con-google',
        component: RegConGoogleComponent
    }
];