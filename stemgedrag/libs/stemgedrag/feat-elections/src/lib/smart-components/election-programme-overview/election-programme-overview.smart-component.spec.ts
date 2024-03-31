import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectionProgrammeOverviewSmartComponent } from './election-programme-overview.smart-component';

describe('ElectionProgrammeOverviewSmartComponent', () => {
  let component: ElectionProgrammeOverviewSmartComponent;
  let fixture: ComponentFixture<ElectionProgrammeOverviewSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectionProgrammeOverviewSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElectionProgrammeOverviewSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
