import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, delay, of, subscribeOn } from "rxjs";


@Injectable({ providedIn: 'root' })
export class EmailValidatorsService implements AsyncValidator {

    /* validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
         const email = control.value;
         console.log({ email })
 
         return of({
             emailTaken: true
         }).pipe(delay(2000))
     }*/
    validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
        const email = control.value;
        console.log({ email })

        const httpCallObservable = new Observable<ValidationErrors | null>((suscriber) => {
            console.log({ email });
            if (email === 'andrea@gmail.com ') {
                suscriber.next({ emailTaken: true });
                suscriber.complete();
            }

            suscriber.next(null);
            suscriber.complete()
        }).pipe(delay(3000));

        return httpCallObservable;
    }

    




}