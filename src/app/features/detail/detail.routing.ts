import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from "./detail.component";
import {ModuleWithProviders} from "@angular/core";

export const detailRoutes: Routes = [
    {
        path: '',
        component: DetailComponent,
        data: {
            pageTitle: 'Detail'
        }
    }
];

export const detailRouting: ModuleWithProviders = RouterModule.forChild(detailRoutes);
