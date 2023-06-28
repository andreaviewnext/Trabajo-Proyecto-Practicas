import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { BookService } from "./book.service"
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { Book } from '../models/book.model';
import { environment } from "src/environments/environment";
import swal from 'sweetalert2';

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

const book: Book = {
    name: '',
    author: '',
    isbn: '',
    price: 15,
    amount: 2
};

describe('book service', () => {
    let service: BookService;
    let httpMock: HttpTestingController;
    let storage = {};

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                BookService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        service = TestBed.inject(BookService);
        httpMock = TestBed.inject(HttpTestingController);
        //se resete el storage para que en cada test se tenga uno totalmente limpio 
        storage = {};
        spyOn(localStorage, 'getItem').and.callFake((key: string) => {
            return storage[key] ? storage[key] : null;
        });
        spyOn(localStorage, 'setItem').and.callFake((key: string, value: string) => {
            return storage[key] = value;
        })
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('getbook return a list of book and does a get method', () => {
        service.getBooks().subscribe((resp: Book[]) => {
            expect(resp).toEqual(listBook);
        });
        const req = httpMock.expectOne(environment.API_REST_URL + `/book`);
        expect(req.request.method).toBe('GET');
        //simular que la peticion se ha hecho y nos devuelva una lista de libros 
        req.flush(listBook);
    });

    it('getbooksfromcart return empty array when localstorage is empty', () => {
        const listbook = service.getBooksFromCart();
        expect(listbook.length).toBe(0);
    });

    it('addbooktocart add a book successfully when the list does not exist in the localstorage', () => {
        const toast = {
            fire: () => null
        } as any; //no nos verifica el tipo 
        const spy1 = spyOn(swal, 'mixin').and.callFake(() => {
            return toast;
        });
        let listbook = service.getBooksFromCart();
        expect(listbook.length).toBe(0);
        service.addBookToCart(book);
        listbook = service.getBooksFromCart();
        service.addBookToCart(book);
        expect(spy1).toHaveBeenCalled();
    });

    xit('removebookfromcart removes the list from the localstorage', () => {
        service.addBookToCart(book);
        let listbook = service.getBooksFromCart();
        expect(listBook.length).toBe(1);
        service.removeBooksFromCart();
        listbook = service.getBooksFromCart();
        expect(listBook.length).toBe(0);
    });


 










})