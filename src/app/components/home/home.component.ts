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
import { ApiService } from '../../services/api.service';
import { ChangeDetectorRef } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { JellyBeanService } from '../../services/jellybean.service';
import { v4 as uuidv4 } from 'uuid';

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
    providers: [MessageService, ConfirmationService, ApiService],
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

  prefabJellies: IJellyBean[] = [];

  jellyBeansList: IJellyBean[] = [];
  jellyBean!: IJellyBean;
  selectedJellyBeans!: IJellyBean[] | null;

  loading: boolean = false;
  searchValue: string | undefined;

  constructor(
    private apiService: ApiService, 
    private fakeData: SweetsService,
    private jellyBeanService: JellyBeanService,
    private messageService: MessageService, 
    private confirmationService: ConfirmationService,
    private cdr: ChangeDetectorRef) { }
  
  ngOnInit() {  
    // Fetch jelly beans from the service
    this.loadJellyBeans();
    // so we not have to write them 
    this.prefabJellies = this.fakeData.getFakeJellyBeans();
  }

  loadJellyBeans(): void {
    this.loading = true;
    this.apiService.getAllJellyBeans().pipe(
        tap((jellyBeans: IJellyBean[]) => {
            this.jellyBeansList = jellyBeans;
            this.loading = false;
        }),
        catchError((error) => {
            console.error('Error fetching jelly beans:', error);
            this.loading = false;
            return of([]); // in case of error
        })
    ).subscribe();
    
    if(this.searchValue != undefined){
        this.dataTable.filterGlobal(this.searchValue, 'contains');
    }
}

  clear(table: Table): void {
        table.clear();
        this.searchValue = '';
  }

  openNew(): void {
        this.jellyBean = this.jellyBean = {
          id: '',
          name: '',
          description: '',
          quantity: 0,
          rating: 3,
          category: 'Sweet',
          isFeatured: false,
          image: '../../../assets/images/jbIcon.jpg',
        };
        this.submitted = false;
        this.jellyBeanDialog = true;
  }

  populated(): void {    
    // Check if we have beans to use
    if (this.prefabJellies.length > 0) {
        // Generate a random index within the range of the array length
        const randomIndex = Math.floor(Math.random() * this.prefabJellies.length);

        // Set this.jellyBean to the jelly at the random index
        this.jellyBean = this.prefabJellies[randomIndex];
        this.jellyBean.id = ''; // so we can create a real id
        this.submitted = false;
        this.jellyBeanDialog = true;
    } else {
        // If the array was empty
        this.openNew();
    }
}

  deleteselectedJellyBeans(): void {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected Jelly Beans?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                if (this.selectedJellyBeans) {
                    this.selectedJellyBeans.forEach(jellyBean => {
                        this.apiService.deleteJellyBeanById(jellyBean.id).pipe(
                            tap(() => {
                                this.jellyBeansList = this.jellyBeansList.filter(val => val.id !== jellyBean.id);
                                this.jellyBeanService.triggerJellyBeanUpdate(); // Observer subscription
                                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Jelly Beans Deleted', life: 3000 });
                            }),
                            catchError((error) => {
                                console.error('Error deleting jelly bean:', error);
                                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to delete jelly beans', life: 3000 });
                                return of(null);
                            })
                        ).subscribe();
                    });
                    this.selectedJellyBeans = null;
                }
            }
        });
    }

  edit(jellyBean: IJellyBean): void {
      this.jellyBean = { ...jellyBean };
      this.jellyBeanDialog = true;
  }

  delete(jellyBean: IJellyBean): void {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + jellyBean.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.apiService.deleteJellyBeanById(jellyBean.id).pipe(
                    tap(() => {
                        this.jellyBeansList = this.jellyBeansList.filter(val => val.id !== jellyBean.id);
                        this.jellyBeanService.triggerJellyBeanUpdate(); // Observer subscription
                        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Jelly Bean Deleted', life: 3000 });
                    }),
                    catchError((error) => {
                        console.error('Error deleting jelly bean:', error);
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to delete jelly bean', life: 3000 });
                        return of(null);
                    })
                ).subscribe();
            }
        });
    }

    save(): void {
        this.submitted = true;
        // We do not have an image uploader
        this.jellyBean.image = '../../../assets/images/jbIcon.jpg';
        
        if(this.jellyBean.id == ''){
            this.jellyBean.id = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        }
        this.searchValue = this.jellyBean.name;
        if (this.jellyBean.name?.trim() && this.jellyBean.id != '') {
                this.apiService.saveJellyBean(this.jellyBean).pipe(
                    tap(() => {
                        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Jelly Bean Updated', life: 3000 });
                        this.loadJellyBeans(); // Reload jelly beans after update
                        this.jellyBeanService.triggerJellyBeanUpdate();
                    }),
                    catchError((error) => {
                        console.error('Error updating jelly bean:', error);
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update jelly bean', life: 3000 });
                        return of(null);
                    })
                ).subscribe();
            }
            this.jellyBeanDialog = false;
            this.jellyBean = {} as IJellyBean;
    }

  hideDialog(): void {
      this.jellyBeanDialog = false;
      this.submitted = false;
  }
}
