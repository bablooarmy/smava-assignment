#To run application in localhost follow these steps
1. npm run server
2. npm run dev will generate development 'build' folder which has
    a. index.js -> application file
    b. index.js.map -> ES6 sourcemap file for index.js file
    c. lib.js -> library file
    d. lib.js.map -> ES6 sourcemap file for lib.js
    e. styles.min.css -> CSS file
3. open http://localhost:8080/ in browser to see the application

#To run unit test coverage follow these steps
1. npm run test
2. launch 'app\tests\__tests__\coverage\lcov-report\index.html' in browser to see code coverage

#To generate prod build follow these steps
1. npm run prod will generate production 'build' folder which has
    a. index-{hashcode for cache busting}.js minified application code
    b. libs-{hashcode for cache busting}.js minified vendor code
    c. styles-{hashcode for cache busting}.min.css minified css
    
