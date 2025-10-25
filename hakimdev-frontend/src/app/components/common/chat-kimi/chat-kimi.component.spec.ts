import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatKimiComponent } from './chat-kimi.component';

describe('ChatKimiComponent', () => {
  let component: ChatKimiComponent;
  let fixture: ComponentFixture<ChatKimiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatKimiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatKimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
