import { Routes } from '@angular/router';
import { NotaComponent } from './nota/nota.component';

export const routes: Routes = [
    {
        path:'',
        component: NotaComponent,
        title:'home'
    },
    {
        path:'nota',
        component: NotaComponent,
        title:'coche'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }

];
