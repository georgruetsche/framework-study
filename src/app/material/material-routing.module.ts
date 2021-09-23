import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrameworkComparisonComponent} from './framework-comparison/framework-comparison.component';
import {MaterialButtonsComponent} from './material-buttons/material-buttons.component';
import {MaterialCheckboxComponent} from './material-checkbox/material-checkbox.component';
import {MaterialDatepickerComponent} from './material-datepicker/material-datepicker.component';
import {MaterialModalComponent} from './material-modal/material-modal.component';
import {MaterialProgressComponent} from './material-progress/material-progress.component';
import {MaterialTableComponent} from './material-table/material-table.component';
import {MaterialComponent} from './material.component';
import {MaterialSnackBarComponent} from './material-snack-bar/material-snack-bar.component';
import {MaterialChipsComponent} from './material-chips/material-chips.component';
import {MaterialTextareaComponent} from './material-textarea/material-textarea.component';
import {MaterialTreeComponent} from './material-tree/material-tree.component';
import {MaterialSidebarComponent} from './material-sidebar/material-sidebar.component';
import {MaterialPanelComponent} from './material-panel/material-panel.component';
import {MaterialMultiselectComponent} from './material-multiselect/material-multiselect.component';
import {MaterialNavsidebarComponent} from './material-navsidebar/material-navsidebar.component';
import {MaterialFormComponent} from './material-form/material-form.component';


const routes: Routes = [
   {path: 'material', component: MaterialComponent, children: [

   ]},
    {path: 'materialsnackbar', component: MaterialSnackBarComponent  },
    {path: 'materialbuttons', component: MaterialButtonsComponent},
    {path: 'materialdatepicker', component: MaterialDatepickerComponent},
    {path: 'materialprogress', component: MaterialProgressComponent},
    {path: 'materialtable', component: MaterialTableComponent},
    {path: 'materialcheckbox', component: MaterialCheckboxComponent},
    {path: 'materialmodal', component: MaterialModalComponent},
    {path: 'materialchips', component: MaterialChipsComponent},
    {path: 'frameworkcomparison', component: FrameworkComparisonComponent},
    {path: 'materialtextarea', component: MaterialTextareaComponent},
    {path: 'materialtree', component: MaterialTreeComponent},
    {path: 'materialpanel', component: MaterialPanelComponent},
    {path: 'materialmultiselect', component: MaterialMultiselectComponent},
    {path: 'materialnavsidebar', component: MaterialNavsidebarComponent},
    {path: 'materialform', component: MaterialFormComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
