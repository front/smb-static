# SMB 2013 Prototype

##### Details:

* Powered by Jekyll
* Using yeomam generator-jekyll
* Sass, Compass, SMACSS
* Singularitygs


##### Setup Instructions:

* Make sure you have node and npm on your system
* Install yeoman (npm install -g yeoman)
* Install yeoman jekyll generator (npm install -g generator-jekyllrb)
* Install gems (Ruby): bundle install
* Run Project with: grunt server


##### Github Pages Deployment

Link: [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control)

Given the problems with deployment on Github Pages found this grunt plugin which with some additional settings on Gruntfile.js provide us a way to deploy on Githhub and other services (e.g Heroku).
Beware that we can't do our  development on the gh-pages branch since this plugin uses our settings to push the content of the compiled  files from dist folder and  messes up our development.


Commands to deplyoy:

* grunt build
* grunt buildcontrol:pages


##### More info later ...
