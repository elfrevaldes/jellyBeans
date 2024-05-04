import { Component, ViewChild } from '@angular/core';
import { ShowcaseComponent } from "../showcase/showcase.component";
import { Table, TableModule } from 'primeng/table';
import { IJellyBean } from '../../../interfaces/sweets';
import { SweetsService } from '../../services/sweets.service';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
      ShowcaseComponent, 
      TableModule, 
      DialogModule,
      InputTextModule,
      IconFieldModule, 
      InputIconModule,
      FormsModule,
      RatingModule,
      ButtonModule,
      ToastModule,
      ToolbarModule,
      CommonModule,
      ConfirmDialogModule,
      RadioButtonModule,
      InputNumberModule, 
    ],
    providers: [MessageService, ConfirmationService, SweetsService],
    styles: [
        `:host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }`
    ],
})
export class HomeComponent {
  @ViewChild('dt') dataTable!: Table; // Reference to the PrimeNG table
  jellyBeanDialog: boolean = false;
  submitted: boolean = false;


  jellyBeansList: IJellyBean[] = []; // Filtered data
  selectedJellyBeans!: IJellyBean[] | null;

  jellyBean!: IJellyBean;

  statuses!: any[];

  loading: boolean = false;
  searchValue: string | undefined;

  constructor(private sweetService: SweetsService, private messageService: MessageService, private confirmationService: ConfirmationService) {}
  
  ngOnInit() {  
    // Mocking the data for now until I connect with AWS S3
    this.jellyBeansList = this.sweetService.getFakeJellyBeans();
    this.loading = false;
  }

  clear(table: Table) {
        table.clear();
        this.searchValue = '';
  }

  openNew() {
        this.jellyBean = this.jellyBean = {
          id: '',
          name: '',
          description: '',
          quantity: 0,
          rating: 3,
          category: 'Sweet',
          isFeatured: false
        };
        this.submitted = false;
        this.jellyBeanDialog = true;
  }

  deleteselectedJellyBeans() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected Jelly Beans?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.jellyBeansList = this.jellyBeansList.filter((val) => !this.selectedJellyBeans?.includes(val));
            this.selectedJellyBeans = null;
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Jelly Beans Deleted', life: 3000 });
        }
    });
  }

  edit(jellyBean: IJellyBean) {
      this.jellyBean = { ...jellyBean };
      this.jellyBeanDialog = true;
  }

  delete(jellyBean: IJellyBean) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + jellyBean.name + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.jellyBeansList = this.jellyBeansList.filter((val) => val.id !== jellyBean.id);
              this.jellyBean = {
                id: '',
                name: '',
                description: '',
                quantity: 0,
                rating: 0,
                category: '',
                isFeatured: false
              };
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Jelly Bean Deleted', life: 3000 });
          }
      });
  }

  save() {
      this.submitted = true;
      console.log(JSON.stringify(this.jellyBean), "calling");
      if (this.jellyBean.name?.trim()) {
          if (this.jellyBean.id && this.jellyBean.id != '') {
              this.jellyBeansList[this.findIndexById(this.jellyBean.id)] = this.jellyBean;
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Jelly Bean Updated', life: 3000 });
          } else {
              this.jellyBean.id = this.createId();
              this.jellyBean.image = '../../../assets/images/jbIcon.jpg';
              this.jellyBeansList.push(this.jellyBean);
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Jelly Bean Created', life: 3000 });
          }

          this.jellyBeansList = [...this.jellyBeansList];
          this.jellyBeanDialog = false;
          this.jellyBean = {
            id: this.createId(),
            name: '',
            description: '',
            quantity: 0,
            rating: 0,
            category: '',
            isFeatured: false
          };
      }
  }

  findIndexById(id: string): number {
      let index = -1;
      for (let i = 0; i < this.jellyBeansList.length; i++) {
          if (this.jellyBeansList[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }

  createId(): string {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (var i = 0; i < 5; i++) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }

  hideDialog() {
      this.jellyBeanDialog = false;
      this.submitted = false;
  }
}
