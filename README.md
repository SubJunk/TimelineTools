# TimelineTools

## General

This is a web page for displaying the order of comics in the Uncanny X-Men series including most tie-ins and spin-offs, mostly ones from collections.

## Developer notes

You can install the dependencies by running `npm i`, then launch the server locally with `npm dev`. It will open itself in your default web browser.

Each push will trigger a Travis build which will run ESLint and stylelint. If either of them report errors, any Pull Request related to the branch will be prevented from being merged. A Heroku Review App is created for each Pull Request.  To check linting run `npm lint`.

To run tests locally run `npm e2e`

There is a garbage collection functionality built-in to check the database for orphans. It can be run by adding `gc=1` to the URL, e.g. `http://localhost:4200/?gc=1` and looking in the browser console.
