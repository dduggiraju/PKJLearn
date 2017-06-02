import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the todo page', () => {
    expect(component).toBeTruthy();
  });

  describe('When I add a todo item', () => {
    beforeEach(() => {
      component.todoItemText = 'any comment';
      component.add();
    });
  
    it('should then be added to list', () => {
      expect(component.todos[0].TodoText).toBe('any comment');
    });
  });   
});