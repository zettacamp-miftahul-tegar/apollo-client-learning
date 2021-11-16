import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apollo: Apollo) { }

  loginUser(email: string, password: string): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation {
          Login(email: "${email}", password: "${password}") {
            token
          }
        }
      `
      }).pipe(
        map((resp) => {
          this.userLogin(resp);
          return resp;
        }),
      );
  }

  userLogin(resp: any) {
    localStorage.setItem(environment.tokenKey, JSON.stringify(resp.token));
  }

  logOut() {
    localStorage.removeItem(environment.tokenKey);
  }
}
