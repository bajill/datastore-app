# DatastoreApp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## To use mockdata.py script to fill datastore and userdatastore
The script depends on a HTTP library for python called Requests,
get Requests by doing this:
```
pip install requests
```

To run the python script follow instructions below:
```
python mockdata.py [argument]
```
Use --ds to fill only the datastore
Use --uds to fill only the userdatastore
Use --both to fill both