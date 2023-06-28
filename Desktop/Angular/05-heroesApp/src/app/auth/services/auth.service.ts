import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "../interfaces/user.interface";
import { TypeModifier } from "@angular/compiler";
import { throttleTime } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {

    private baseUrl = environment.baseUrl;
    private user?: User;

    constructor(private http: HttpClient) { }

    get currentUser(): User | undefined {
        if (!this.user) return undefined;
        return structuredClone(this.user);
    }


}