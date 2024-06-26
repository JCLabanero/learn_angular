export class AuthService {
  loggedIn = true;
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 0);
    });
    return promise;
  }
  login() {
    this.loggedIn = true;
    console.log(`isLogged ${this.loggedIn}`);
  }
  logout() {
    this.loggedIn = false;
    console.log(`isLogged ${this.loggedIn}`);
  }
}
