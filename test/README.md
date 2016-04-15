Testing
==========

The test directory includes test-related configuration files, testing utilities, and fake data that we can use for testing in Bentotime. If you're looking for our actual tests, they are found in each module's folder!

#### Fixtures
Fixtures are static data that we can use for fake api responses and other pieces of data. This helps our tests remain independent and unaffected by changes in data, letting us further distiguish where bugs are coming from.

#### Stubs
Stubs, similar to fixtures, help us by making previously dynamic content into static content.  As opposed to fixtures, which focus on data, stubs should focus on fake functions. Using stubs makes it easier to test the expected functionality of one file at a time by forcing dependencies to complete an expected function 100% of the time.

#### Karma Configuration
Karma Test Runner is a tool that simply opens a browser and runs our tests using that browser's environment. To do that, our Karma configuration has to do a few other steps as well.  Basically, it'd look like this:

1. Compile our javascript using our Webpack Configurations
2. Open our browser (Chrome in this case).
3. Make sure that Chai, Mocha, and Sinon are available globally (these are our testing libraries)
4. Run our tests and display the results

There are a few other things in our `.karma.conf.js` file, since we also run our tests on Travis CI. But this is essentially everything that our configuration does. It's also fully commented, so check it out!
