import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostFormularioComponent } from './create-post-formulario.component';

describe('CreatePostFormularioComponent', () => {
  let component: CreatePostFormularioComponent;
  let fixture: ComponentFixture<CreatePostFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePostFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
