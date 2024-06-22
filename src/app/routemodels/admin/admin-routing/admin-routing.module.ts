import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../../../layers/app-layout/app-layout.component';
import { DashboardComponent } from '../../../layers/dashboard/dashboard.component';
import { StudentComponent } from '../../../layers/student/student.component';
import { ExamComponent } from '../../../layers/exam/exam.component';
import { TeacherComponent } from '../../../layers/teacher/teacher.component';
import { LessonComponent } from '../../../layers/lesson/lesson.component';


const routes: Routes = [
  { path:'', component:AppLayoutComponent, children:
  [
    { path:'', component:DashboardComponent},
    { path:'student', component: StudentComponent },
    { path:'exam', component: ExamComponent },
    { path:'teacher', component: TeacherComponent },
    { path:'lessons', component: LessonComponent },

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
