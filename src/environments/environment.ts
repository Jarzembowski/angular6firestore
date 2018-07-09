// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBbqoCwStebFN987vcI-VI70IkSMtzSC4Y",
    authDomain: "employee-85ec4.firebaseapp.com",
    databaseURL: "https://employee-85ec4.firebaseio.com",
    projectId: "employee-85ec4",
    storageBucket: "employee-85ec4.appspot.com",
    messagingSenderId: "539492848883"
  },
  firebaseDocs: {
      user: 'users/khgobr9uzmHPlQ7Y2kWu'
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
