import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProvinceOverviewSmartComponent } from './province-overview.smart-component';

describe('ProvinceOverviewSmartComponent', () => {
  let component: ProvinceOverviewSmartComponent;
  let fixture: ComponentFixture<ProvinceOverviewSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvinceOverviewSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProvinceOverviewSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
