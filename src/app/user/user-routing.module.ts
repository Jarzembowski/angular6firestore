import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserDetailsResolverService } from "./resolvers/user-details-resolver.service";

const userRoutes: Routes = [
 {path : '', component: UserComponent,
 children: [
    {path : 'details/:id', component: UserDetailsComponent
    , resolve: {user: UserDetailsResolverService}
    }
  ]
}
]

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [RouterModule]
})
export class UserRoutingModule{}