import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

const routes = [
 {path : '', redirectTo: '/home', pathMatch: "full"},
 {path : 'user', loadChildren: './user/user.module#UserModule'},
 {path : 'home', component: HomeComponent},
 {path : 'about', component: AboutComponent}
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{

}