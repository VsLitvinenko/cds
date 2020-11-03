import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'cds-info',
        loadChildren: () => import('../cds-info/cds-info.module').then(m => m.CdsInfoPageModule)
      },
      {
        path: 'studios-info',
        loadChildren: () => import('../studios-info/studios-info.module').then(m => m.StudiosInfoPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('../events/events.page.module').then(m => m.EventsPageModule)
      },
      {
        path: 'menu-other',
        loadChildren: () => import('../menu-other/menu-other-page.module').then(m => m.MenuOtherPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/cds-info',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/cds-info',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
