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
            expect(page.getLastTodoItem()).toBe('a comment')
        });
    });

    describe('When I like a comment', () => {
        it('should be liked', () => {

        });
    });
});

