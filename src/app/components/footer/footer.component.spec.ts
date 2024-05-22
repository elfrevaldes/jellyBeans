import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display an image', () => {
    const imgElement = fixture.debugElement.query(By.css('#footer-img'));
    expect(imgElement).toBeTruthy();
    expect(imgElement.attributes['src']).toBe('../../../assets/images/bean-botton.png');
    expect(imgElement.attributes['alt']).toBe('Jelly Bean Thumnail');
  });
});
