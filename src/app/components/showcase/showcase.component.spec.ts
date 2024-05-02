import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseComponent } from './showcase.component';

describe('BannerComponent', () => {
  let component: ShowcaseComponent;
  let fixture: ComponentFixture<ShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
