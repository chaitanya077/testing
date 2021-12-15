// /* tslint:disable:no-unused-variable */
// import { LoginComponent } from './login.component';
// import { AuthService } from './auth.service';

import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';

// describe('Component: Login', () => {
//   let component: LoginComponent;
//   let service: AuthService;
//   let spy: any;

//   beforeEach(() => {
//     service = new AuthService();
//     component = new LoginComponent(service);
//   });

//   afterEach(() => {
//     // localStorage.removeItem('token');
//     service = null;
//     component = null;
//   });

//   it('needsLogin returns true when the user has not been authenticated', () => {
//     spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
//     expect(component.needsLogin()).toBeTruthy();
//     expect(service.isAuthenticated).toHaveBeenCalled();
//   });

//   it('needsLogin returns false when the user has been authenticated', () => {
//     spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
//     expect(component.needsLogin()).toBeFalsy();
//     expect(service.isAuthenticated).toHaveBeenCalled();
//   });
// });
/////its not isolated
/////to test we need innerworking of auth service so we set dats in localstorage to change the benaviour of needslogin function
//// if login Component needs other dependencies so its bit tricky to set before each and after each results in tight coupling and brittle result(likely to break)
// describe('login Component', () => {
//   let loginComponent: LoginComponent;
//   let authService: AuthService;

//   beforeEach(() => {
//     authService = new AuthService();
//     loginComponent = new LoginComponent(authService);
//   });
//   afterEach(() => {
//     authService = null;
//     loginComponent = null;
//   });

//   it('if its not  authenticated should retrun false', () => {
//     expect(loginComponent.needsLogin()).toBeTruthy();
//   });
//   it('if its authenticated  should be true', () => {
//     localStorage.setItem('token', '57893475');
//     expect(loginComponent.needsLogin()).toBeFalsy();
//   });
// });
//// we are doing this with mocked class means fake classes and we are not using the AuthService

// class MockedAuthService {
//   authenticated: boolean = false;

//   isAuthenticated() {
//     return this.authenticated;
//   }
// }

// describe('login component', () => {
//   let authService: MockedAuthService;
//   let loginComponent: LoginComponent;
//   beforeEach(() => {
//     authService = new MockedAuthService();
//     loginComponent = new LoginComponent(authService);
//   });
//   afterEach(() => {
//     authService = null;
//     loginComponent = null;
//   });

//   it('if its authenticated should return false', () => {
//     authService.authenticated = false;
//     expect(loginComponent.needsLogin()).toBeTruthy();
//   });
//   it('if its authenticated should be true', () => {
//     authService.authenticated = true;
//     expect(loginComponent.needsLogin()).toBeFalsy();
//   });
// });

//// overriding functions
// class MockAuthService extends AuthService {
//   authenticated = false;
//   isAuthenticated() {
//     return this.authenticated;
//   }
// }

// describe('login component', () => {
//   let authService: MockAuthService;
//   let loginComponent: LoginComponent;

//   beforeEach(() => {
//     authService = new MockAuthService();
//     loginComponent = new LoginComponent(authService);
//   });

//   afterEach(() => {
//     authService = null;
//     loginComponent = null;
//   });
//   it('if its authenticated should return false', () => {
//     authService.authenticated = false;
//     expect(loginComponent.needsLogin()).toBeTruthy();
//   });
//   it('if its not authenticated should return true', () => {
//     authService.authenticated = true;
//     expect(loginComponent.needsLogin()).toBeFalsy();
//   });
// });

//// Spy testing means we are forcing a function to return (output )what we want

describe('login Component', () => {
  let authService: AuthService;
  let loginComponent: LoginComponent;

  beforeEach(() => {
    authService = new AuthService();
    loginComponent = new LoginComponent(authService);
  });
  afterEach(() => {
    authService = null;
    loginComponent = null;
  });

  it('if its suthenticated should return false', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(loginComponent.needsLogin()).toBeTruthy();
  });
  it('if its not authenticated should return true', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(loginComponent.needsLogin()).toBeFalsy();
  });
});
