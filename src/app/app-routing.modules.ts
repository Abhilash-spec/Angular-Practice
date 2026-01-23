import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentComponent } from "./student/student.component";
import { ProfileComponent } from "./profile/profile.component";
import { ErrorComponent } from "./error/error.component";


const routes: Routes = [
    {path: '', component: StudentComponent},
    {path: 'student', component: StudentComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }