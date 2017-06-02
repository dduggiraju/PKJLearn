import { TodoListPage } from './todo-list.po';


describe('Given I am posting a new commnet.', () => {
    let page: TodoListPage;
    beforeEach((done) => {
        page = new TodoListPage();
        page.navigateTo();
        page.saveNewTodo();
        done();
    });

    describe('Clicking submit button', () => {
        it('should then add the comment', () => {
            expect(page.getLastTodoItem()).toBe('a comment 0')
        });

        // it('Should then clear todo text box', () => {
        //     expect(page.getTodoTextValue()).toBe('');
        // });            
    });
});
describe('When I like a comment', () => {
    let page: TodoListPage;
    beforeEach((done) => {
        page = new TodoListPage();
        page.navigateTo();
        page.saveNewTodo();
        page.likeTodoItem();
        done();
    });
    it('Like count should increase', () => {
        expect(page.getLikeNumber()).toBeGreaterThan(0);
    });
});

