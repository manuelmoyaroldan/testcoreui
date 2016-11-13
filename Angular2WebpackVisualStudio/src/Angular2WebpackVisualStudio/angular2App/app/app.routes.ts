import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

//import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    //{
    //    path: '',
    //    redirectTo: 'dashboard',
    //    pathMatch: 'full',
    //},
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'test',
                component: HomeComponent
                //loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'dashboard',
                //component: HomeComponent
                //loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./dashboard/dashboard.module')['DashboardModule']); }); })
            },
            {
                path: 'components',
                //loadChildren: 'app/components/components.module#ComponentsModule'
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./components/components.module')['ComponentsModule']); }); })
            },
            {
                path: 'icons',
                //loadChildren: 'app/icons/icons.module#IconsModule'
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./icons/icons.module')['IcosModule']); }); })
            },
            {
                path: 'widgets',
                //loadChildren: 'app/widgets/widgets.module#WidgetsModule'
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./widgets/widgets.module')['WidgetsModule']); }); })
            },
            {
                path: 'charts',
                //loadChildren: 'app/chartjs/chartjs.module#ChartJSModule'
                loadChildren: () => new Promise(function (resolve) { (require as any).ensure([], function (require: any) { resolve(require('./chartjs/chartjs.module')['ChartJSModule']); }); })
            }
        ]
    },
    {
        path: 'pages',
        component: SimpleLayoutComponent,
        data: {
            title: 'Pages'
        }//,
        //children: [
        //    {
        //        path: '',
        //        loadChildren: 'app/pages/pages.module#PagesModule',
        //    }
        //]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
//import { NgModule } from '@angular/core';//coreui
//import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';
//import { TestDataService } from './services/testDataService';
////Layouts
//import { FullLayoutComponent } from './layouts/full-layout.component';
//import { SimpleLayoutComponent } from './layouts/simple-layout.component';

//export const appRoutes: Routes = [
//    //{ path: '', component: HomeComponent },
//    //{ path: 'home', component: HomeComponent },
//    //{ path: 'about', component: AboutComponent }
//    {
//        path: '',
//        redirectTo: 'dashboard',
//        pathMatch: 'full',
//    },
//    {
//        path: '',
//        component: FullLayoutComponent,
//        data: {
//            title: 'Home'
//        },
//        children: [
//            {
//                path: 'dashboard',
//                loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
//            },
//            {
//                path: 'components',
//                loadChildren: 'app/components/components.module#ComponentsModule'
//            },
//            {
//                path: 'icons',
//                loadChildren: 'app/icons/icons.module#IconsModule'
//            },
//            {
//                path: 'widgets',
//                loadChildren: 'app/widgets/widgets.module#WidgetsModule'
//            },
//            {
//                path: 'charts',
//                loadChildren: 'app/chartjs/chartjs.module#ChartJSModule'
//            }
//        ]
//    },
//    {
//        path: 'pages',
//        component: SimpleLayoutComponent,
//        data: {
//            title: 'Pages'
//        },
//        children: [
//            {
//                path: '',
//                loadChildren: 'app/pages/pages.module#PagesModule',
//            }
//        ]
//    }
//];

//@NgModule({
//    imports: [RouterModule.forRoot(appRoutes)],
//    exports: [RouterModule]
//}) //coreui

//export class AppRoutingModule { }
////export const routing = RouterModule.forRoot(appRoutes); //deleted by coreui