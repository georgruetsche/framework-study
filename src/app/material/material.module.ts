import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialComponent} from './material.component';
import { MaterialNavigationComponent } from './material-navigation/material-navigation.component';
import { MaterialProgressComponent } from './material-progress/material-progress.component';
import { MaterialDatepickerComponent } from './material-datepicker/material-datepicker.component';
import { MaterialModalComponent } from './material-modal/material-modal.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { MaterialCheckboxComponent } from './material-checkbox/material-checkbox.component';
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { MaterialRoutingModule } from './material-routing.module';
import { FrameworkComparisonComponent } from './framework-comparison/framework-comparison.component'
import {DialogOverviewExampleDialog} from './material-modal/material-modal.component';


import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule}  from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MaterialSnackBarComponent } from './material-snack-bar/material-snack-bar.component';
import { MaterialChipsComponent } from './material-chips/material-chips.component';
import {MatChipsModule} from '@angular/material/chips';
import { MaterialTextareaComponent } from './material-textarea/material-textarea.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialTreeComponent } from './material-tree/material-tree.component';
import {MatTreeModule} from '@angular/material/tree';
import { MaterialSidebarComponent } from './material-sidebar/material-sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MaterialPanelComponent } from './material-panel/material-panel.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SimpleDatepickerComponent } from './material-datepicker/simple-datepicker/simple-datepicker.component';
import { MaterialMultiselectComponent } from './material-multiselect/material-multiselect.component';
import { MaterialNavsidebarComponent } from './material-navsidebar/material-navsidebar.component';
import { MaterialFormComponent } from './material-form/material-form.component';

@NgModule({
  declarations: [
    MaterialComponent,
    MaterialNavigationComponent,
    MaterialProgressComponent,
    MaterialDatepickerComponent,
    MaterialModalComponent,
    MaterialTableComponent,
    MaterialCheckboxComponent,
    MaterialButtonsComponent,
    FrameworkComparisonComponent,
    DialogOverviewExampleDialog,
    MaterialSnackBarComponent,
    MaterialChipsComponent,
    MaterialTextareaComponent,
    MaterialTreeComponent,
    MaterialSidebarComponent,
    MaterialPanelComponent,
    SimpleDatepickerComponent,
    MaterialMultiselectComponent,
    MaterialNavsidebarComponent,
    MaterialFormComponent

  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatTreeModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }
