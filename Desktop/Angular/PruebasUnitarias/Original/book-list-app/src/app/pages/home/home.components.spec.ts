import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BookService } from "src/app/services/book.service";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Pipe, PipeTransform } from "@angular/core";
import { Book } from "src/app/models/book.model";;
import { of } from "rxjs";

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

@Pipe({ name: 'reduceText' })
class ReduceTextPipeMock implements PipeTransform {
    transform(): string {
        return '';
    }
}

const bookServiceMock = {
    getBooks: () => of(listBook)
};

describe('Home component', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            declarations: [
                HomeComponent,
                ReduceTextPipeMock
            ],
            providers: [
                //BookService
                {
                    provide: BookService,
                    useValue: bookServiceMock
                }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents();
    });


    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    //el codigo que se haga dentro solo se va a llamar al principio del todo
    beforeAll(() => { });

    //salta despues de cada test
    afterEach(() => { });

    //salta despues de terminar todos los test
    afterAll(() => { });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('getbook get books from the subcription', () => {
        const bookService = fixture.debugElement.injector.get(BookService);
        //esto lo que hace es primero espiar el metodo y luego lo que hace es devolver un observable 
        //const spy1 = spyOn(bookService, 'getBooks').and.returnValue(of(listBook));

        component.getBooks();

        //expect(spy1).toHaveBeenCalled();
        expect(component.listBook.length).toBe(3);
    })



})