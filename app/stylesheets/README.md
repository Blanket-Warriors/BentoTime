Stylesheets
=========

This is where all of our base styles are housed, and also serves as the entrypoint for our stylesheets!

#### style.scss
This is the base of all of our styles. Everything starts here.

#### _components.scss
This file just links to all of our component stylesheets. This is the only overhead for creating a component that exists outside the component itself, and lets us reach all of our styles. Order of loading should NOT matter with these stylesheets, so namespace well!

#### base
Contains color, position, and typography defaults and variables. Definitely reference these while you're making a component so that you can just use something like `$blue` instead of `rgba(0, 216, 255, .5)`.

#### Helpers
These are for reusable processes and shortcuts that we can use everywhere to make things more convenient. We should be using this folder for things like reusable animations and calculations.

#### Vendor
This folder is for things we essentially ripped off from other people. These are slowly being modified to be consistent with our needs.
