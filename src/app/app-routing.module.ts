import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { CommentsComponent } from './admin/dashboard/comments/comments.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MessageComponent } from './admin/dashboard/message/message.component';
import { PagesComponent } from './admin/dashboard/pages/pages.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { SettingsComponent } from './admin/dashboard/settings/settings.component';
import { HomeComponent } from './admin/home/home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
    children:[
      {path:'dashboard', component:DashboardComponent
      
    },
    {
      path:'posts',component:PostsComponent
    },
    
    {
      path:'comments',component:CommentsComponent
    },
    
    {
      path:'message',component:MessageComponent
    },
    
    {
      path:'pages',component:PagesComponent
    },
    
    {
      path:'settings',component:SettingsComponent
    }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
