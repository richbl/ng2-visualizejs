# Ang2-Visualizejs
A simple demonstration that draws a [Jaspersoft](http://www.jaspersoft.com/) report/dashboard resource with the [Visualize.js](http://community.jaspersoft.com/project/visualizejs) library using the [Angular Framework](https://angular.io/) (initial commit uses Angular 2.0.0-beta.17)

# Based on Angular 2 QuickStart
This repository is based on a great learning resource, the [Angular 2 QuickStart](https://github.com/angular/quickstart), which is the companion source code for the Angular 2 tutorial called the ["5 Min Quickstart](https://angular.io/docs/ts/latest/quickstart.html)."

> Note that this project has not been forked from the [Angular 2 QuickStart](https://github.com/angular/quickstart) project, so no updates made to that project will be reflected in this project.


## Prerequisites

Two sets of requirements are needed:

 - Jaspersoft resources
 - Angular Framework (*aka*, Angular 2) resources

### Jaspersoft
Required software and servers are well described on the [Jaspersoft website](http://community.jaspersoft.com/sites/default/files/wiki_attachments/main_1.html).

### Angular Framework
Node.js and npm are essential to Angular 2 development.
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v5.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

> This project was originally committed using Angular 2.0.0-beta.17.

## Getting Started

Clone this repo into new project folder (*e.g.*, `my-proj`).
```bash
git clone  https://github.com/richbl/ang2-visualizejs  my-proj
cd my-proj
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**.

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

> By default, the server will be running on http://localhost:3000. Open a browser page on this URL and you should see the application running.

Shut it down manually with Ctrl-C.

**You're ready to go!**
