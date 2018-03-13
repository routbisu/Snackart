// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAIjJyrkahpG7zrn7q6lCTQFOfZW5aDFB4',
    authDomain: 'snackartshop.firebaseapp.com',
    databaseURL: 'https://snackartshop.firebaseio.com',
    projectId: 'snackartshop',
    storageBucket: '',
    messagingSenderId: '40511028582'
  }
};
