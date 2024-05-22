import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display an image', () => {
    const imgElement = fixture.debugElement.query(By.css('#header-img'));
    expect(imgElement).toBeTruthy();
    expect(imgElement.attributes['src']).toBe('../../../assets/images/beans-banner.png');
    expect(imgElement.attributes['alt']).toBe('Jelly Bean Thumnail');
  });
});
