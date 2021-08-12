import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { de_DE } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { MaterialComponent } from './material/material.component';

import { AntComponent } from './ant/ant.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';


import { AntButtonsComponent } from './ant/ant-buttons/ant-buttons.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BootstrapButtonsComponent } from './bootstrap/bootstrap-buttons/bootstrap-buttons.component';
// import { MaterialNavigationComponent } from './material/material-navigation/material-navigation.component';

import { AntNavigationComponent } from './ant/ant-navigation/ant-navigation.component';
import { AntDatepickerComponent } from './ant/ant-datepicker/ant-datepicker.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AntProgressComponent } from './ant/ant-progress/ant-progress.component';
import { AntTableComponent } from './ant/ant-table/ant-table.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { AntCheckboxComponent } from './ant/ant-checkbox/ant-checkbox.component';
import { BootstrapNavigationComponent } from './bootstrap/bootstrap-navigation/bootstrap-navigation.component';
import { BootstrapDatepickerComponent } from './bootstrap/bootstrap-datepicker/bootstrap-datepicker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapTableComponent } from './bootstrap/bootstrap-table/bootstrap-table.component';
import { BootstrapCheckboxComponent } from './bootstrap/bootstrap-checkbox/bootstrap-checkbox.component';
import { BootstrapProgressComponent } from './bootstrap/bootstrap-progress/bootstrap-progress.component';
import { BootstrapModalComponent } from './bootstrap/bootstrap-modal/bootstrap-modal.component';
import { AntModalComponent } from './ant/ant-modal/ant-modal.component';


import { MaterialRoutingModule} from './material/material-routing.module'

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule}  from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import { AntStepsComponent } from './ant/ant-steps/ant-steps.component';
import { AntDownloadComponent } from './ant/ant-download/ant-download.component';
import {FrameworkComparisonComponent} from './material/framework-comparison/framework-comparison.component';
import { AntCollapseComponent } from './ant/ant-collapse/ant-collapse.component';


registerLocaleData(de);

const routes: Routes = [
  {path: 'material', loadChildren: () => import(`./material/material.module`).then(m => m.MaterialModule) },

  {path: 'ant', component: AntComponent, children: [
    {path: 'antbuttons', component: AntButtonsComponent},
    {path: 'antdatepicker', component: AntDatepickerComponent},
    {path: 'antprogress', component: AntProgressComponent},
    {path: 'anttable', component: AntTableComponent},
    {path: 'antcheckbox', component: AntCheckboxComponent},
    {path: 'antmodal', component: AntModalComponent},
    {path: 'antstep', component: AntStepsComponent},
    {path: 'antdownload', component: AntDownloadComponent},
    {path: 'antcollapse', component: AntCollapseComponent},
    {path: 'frameworkcomparison', component: FrameworkComparisonComponent}
  ]},
  {path: 'bootstrap', component: BootstrapComponent, children: [
    {path: 'bootstrapbuttons', component: BootstrapButtonsComponent},
    {path: 'bootstrapdatepicker', component: BootstrapDatepickerComponent},
    {path: 'bootstraptable', component: BootstrapTableComponent},
    {path: 'bootstrapcheckbox', component: BootstrapCheckboxComponent},
    {path: 'bootstrapprogress', component: BootstrapProgressComponent},
    {path: 'bootstrapmodal', component: BootstrapModalComponent},
    {path: 'frameworkcomparison', component: FrameworkComparisonComponent}
  ]},

  {path: '', redirectTo: '/material', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AntComponent,
    AntButtonsComponent,
    BootstrapComponent,
    BootstrapButtonsComponent,
    AntNavigationComponent,
    AntDatepickerComponent,
    AntProgressComponent,
    AntTableComponent,
    AntCheckboxComponent,
    BootstrapNavigationComponent,
    BootstrapTableComponent,
    BootstrapCheckboxComponent,
    BootstrapProgressComponent,
    BootstrapDatepickerComponent,
    BootstrapModalComponent,
    AntModalComponent,
    AntStepsComponent,
    AntDownloadComponent,
    AntCollapseComponent,
  ],
  imports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatChipsModule,
    BrowserModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    FormsModule,
    NzButtonModule,
    NzRadioModule,
    HttpClientModule,
    MatNativeDateModule,
    MatCheckboxModule,
    NzDatePickerModule,
    NzProgressModule,
    NzSpinModule,
    NzIconModule,
    NzTableModule,
    NzDividerModule,
    NzCheckboxModule,
    NzMessageModule ,
    NzModalModule,
    NzStepsModule,
    NzUploadModule,
    NzCollapseModule,
    BsDatepickerModule,
    NgbModule,
    NgbDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MaterialRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    RouterModule,
    MatRadioModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatCheckboxModule,
    NzDatePickerModule,
    NzProgressModule,
    NzSpinModule,
    NzModalModule,
    NzTableModule,
    NzMessageModule,
    NzIconModule,
    NzCollapseModule,
    NzDividerModule,
    NzCheckboxModule,
    BsDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: de_DE }, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
