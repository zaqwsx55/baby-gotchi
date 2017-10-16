// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  // Firebase configuration
  firebase: {
    apiKey: 'AIzaSyDFL76YOusDceZYYRuEpjmtyNE3UmV4Ulc',
    authDomain: 'baby-gotchi-dbca4.firebaseapp.com',
    databaseURL: 'https://baby-gotchi-dbca4.firebaseio.com',
    projectId: 'baby-gotchi-dbca4',
    storageBucket: '',
    messagingSenderId: '475056967084'
  }
};
