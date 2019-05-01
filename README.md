# TimelineTools
[![Build Status](https://travis-ci.com/SubJunk/TimelineTools.svg?branch=master)](https://travis-ci.org/UniversalMediaServer/UniversalMediaServer) [![Greenkeeper badge](https://badges.greenkeeper.io/SubJunk/TimelineTools.svg)](https://greenkeeper.io/)

## General

This is a web page for displaying the order of comics in the Uncanny X-Men series including some tie-ins and spin-offs, mostly ones from collections.

## Marvel API integration

This project is designed to interact with the Marvel API to let you click the "Read online" link on comics and read them using your Marvel Unlimited subscription.

If you are browsing online (URL starts with `http://` or `https://`), this will work with no configuration.

If you are viewing the project locally (URL starts with `file://`) you will need to use your own Marvel API keys by adding them to `config.js`. The keys are free and can be retrieved from https://developer.marvel.com/account

## Developer notes

There's no build/compile step and no development packages are needed.

Each push will trigger a Travis build which will run ESLint and stylelint. If either of them report errors, any Pull Request related to the branch will be prevented from being merged.

Optionally you can also run them locally to help with development. To do this, run `yarn install` to install the tools, and you will probably also want to install the relevant extensions in your IDE.

There is a garbage collection functionality built-in to check the database for orphans. It can be run by adding `gc` to the URL, e.g. `index.html#!?id=ThorVol1373&gc` and looking in the browser console.