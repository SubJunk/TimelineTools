# TimelineTools

## General

This is a web page for displaying the order of comics in the Uncanny X-Men series including some tie-ins and spin-offs, mostly ones from collections.

## Marvel API integration

This project is designed to interact with the Marvel API to let you click the "Read online" link on comics and read them using your Marvel Unlimited subscription.

If you are browsing online (URL starts with `http://` or `https://`), this will work with no configuration.

If you are viewing the project locally (URL starts with `file://`) you will need to use your own Marvel API keys by adding them to `config.js`. The keys are free and can be retrieved from https://developer.marvel.com/account

## Developer notes

There's no build/compile step and no development packages are needed.

Optionally you can run `yarn install` to install ESLint and related plugins to help with development. 