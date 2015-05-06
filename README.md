# Framer `NSButton` module

OS X `NSButton`s for your prototyping pleasure.

## Usage
```shell
$ git clone https://github.com/peteschaffner/framercli.git myProject
$ cd myProject
$ npm install --save peteschaffner/framer-nsbutton
```

app.coffee:
```coffeescript
NSButton = require "framer-nsbutton"

myButton = new NSButton
  type: "push"
```
