import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CartComponent } from "./cart.component";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookService } from "src/app/services/book.service";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, inject } from "@angular/core";
import { Book } from "src/app/models/book.model";

const listBook: Book[] = [
    {
        name: '',
        author: '',
        isbn: '',
        price: 15,
        amount: 2
    },
    {
        name: '',
        author: '',
        isbn: '',
        price: 20,
        amount: 1
    },
    {
        name: '',
        author: '',
        isbn: '',
        price: 8,
        amount: 5
    }
];


describe('cart component', () => {
    //con el que vamos hacer los test
    let component: CartComponent;
    //del que vamos a sacar los componentes 
    let fixture: ComponentFixture<CartComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            declarations: [
                CartComponent
            ],
            providers: [
                BookService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should creat', () => {
        expect(component).toBeTruthy();
    });

    it('total del precio', () => {
        const totalPrice = component.getTotalPrice(listBook);
        expect(totalPrice).toBeGreaterThan(0);
        //expect(totalPrice).not.toBe(0);

    });

    it('cuando ingrementamos el num de libros correctamente', () => {
        const action = 'plus';
        const book = {
            name: '',
            author: '',
            isbn: '',
            price: 15,
            amount: 2
        };

        const service = fixture.debugElement.injector.get(BookService);
        //para espiar al metodo que queramos del servicio
        const spy1 = spyOn(service, 'updateAmountBook').and.callFake(() => null);
        const spy2 = spyOn(component, 'getTotalPrice').and.callFake(() => null);

        //antes de incrementar el num de libros de [0] es 2
        expect(book.amount).toBe(2);

        component.onInputNumberChange(action, book);

        //despues de incrementar el num de libros de [0] comprobamos que +1 y es 3 el num de libros 
        expect(book.amount).toBe(3);

        expect(spy1).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();

    });

    it('cuando decrementamos el num de libros correctamente', () => {
        const action = 'minus';
        const book = {
            name: '',
            author: '',
            isbn: '',
            price: 15,
            amount: 3
        };

        const service = fixture.debugElement.injector.get(BookService);
        //para espiar al metodo que queramos del servicio
        const spy1 = spyOn(service, 'updateAmountBook').and.callFake(() => null);
        const spy2 = spyOn(component, 'getTotalPrice').and.callFake(() => null);

        expect(book.amount).toBe(3);

        component.onInputNumberChange(action, book);

        expect(book.amount).toBe(2);

        expect(spy1).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();

    });

    it('onClearBooks _clearListCartBook', () => {
        const service = fixture.debugElement.injector.get(BookService);

        const spy1 = spyOn((component as any), '_clearListCartBook').and.callThrough();
        const spy2 = spyOn(service, 'removeBooksFromCart').and.callFake(() => null);
        component.listCartBook = listBook;
        component.onClearBooks();

        expect(component.listCartBook.length).toBe(0);
        expect(spy1).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();

    });

    //esto es otra forma de como llamar a un metodo privado, la mejor forma es la anterior
    it('_clearListCartBook _clearListCartBook', () => {
        const service = fixture.debugElement.injector.get(BookService);

        const spy2 = spyOn(service, 'removeBooksFromCart').and.callFake(() => null);
        component.listCartBook = listBook;
        component["_clearListCartBook"]();
        expect(component.listCartBook.length).toBe(0);
        expect(spy2).toHaveBeenCalled();
    })

})