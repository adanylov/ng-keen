# ng-keen
Sample application to evaluate Angular 4 usage for Keen.com


Environment
-------------

####Setup nodejs

####Install angular-cli
```
$ npm install -g @angular/cli
```

####Create New Project
```
$ ng new ng-keen --style=scss --ng4=true
```

####Adjust .angular-cli.json
```
  "defaults": {
    "styleExt": "scss",
    "component": {
      "flat": true
    },
    "serve": {
      "flat": true
    },
    "pipe": {
      "flat": true
    },
    "directive": {
      "flat": true
    },
    "class": {
      "flat": true
    }
  }
```

####Install Bootstrap 4
```
$ npm install bootstrap@4.0.0-alpha.6
```

####Install Angular Components for Bootstrap 4
```
$ npm install --save @ng-bootstrap/ng-bootstrap
```

####Create folder styles to host all scss file there
