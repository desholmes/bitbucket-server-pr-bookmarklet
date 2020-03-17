# Bitbucket Server PR Template Bookmarklet

> **NOTICE**: This repo currently has a dependency on a fork [desholmes/gulp-bookmarklet](https://github.com/desholmes/gulp-bookmarklet/tree/feature/remove-gulp-util-dep) a [pr is open](https://github.com/Skylark95/gulp-bookmarklet/pull/1) for this.

[Bitbucket sever doesn't support PR templates](https://jira.atlassian.com/browse/BSERV-8663), unlike Bitbucket Cloud. This repo contains a bookmarklet to bring a common format to PR descriptions.

This project uses:

1. [Node.js](https://nodejs.org/)
1. [Gulp](https://gulpjs.com/)

## Usage guide

Chrome is recommended.

1. Create bookmark called `PR Template` in Chrome
1. Copy the contents from [./dist/bookmarlet.js](./dist/bookmarlet.js) into the URL field and press save
1. Now when you create a PR, click the `PR Template` bookmark and the template will be applied to your PR description

## Getting Started

### Prerequisites

1. A working knowledge of [git SCM](https://git-scm.com/downloads)
1. Installation of [node](https://nodejs.org/en/download/)

## Developing

1. Complete the 'Getting Started > Prerequisites' section
1. `npm i`: To install the packages
1. `npm install gulp-cli -g`: To install [gulp](https://gulpjs.com/) globally
1. Edit the `src/main.js` file
1. `npm run build`: To build the bookmarklet to `./dist/bookmarklet.js`
