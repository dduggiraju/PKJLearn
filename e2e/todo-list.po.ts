import { browser, element, by, ElementFinder } from "protractor";
import { promise } from "@types/selenium-webdriver";

export class TodoListPage {
    constructor() {
    }
    navigateTo() {
        return browser.get('todos');
    }
    getTodoList(): string[] {
        let list: string[] = [];
        element.all(by.css('todoListItem')).each((e: ElementFinder, i: Number) => {

        });
        return list;
    }
    saveNewTodo(itemText: string = 'a comment') {
        // add new item to list
        let elements = element.all(by.name('txtTodo'));
        let todoText: ElementFinder = elements.first();
        todoText.sendKeys(itemText);
        element.all(by.buttonText('Add Todo')).click();
    }

    getLastTodoItem(): promise.Promise<string> {
        return element.all(by.css('.todoListItem')).last().getText();
    }
}