import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookigsComponent } from './get-bookigs.component';

describe('GetBookigsComponent', () => {
  let component: GetBookigsComponent;
  let fixture: ComponentFixture<GetBookigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetBookigsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetBookigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
