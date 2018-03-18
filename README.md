#To run application in localhost follow these steps
1. npm run server
2. npm run dev will generate development 'build' folder which has
    1. index.js -> application file
    2. index.js.map -> ES6 sourcemap file for index.js file
    3. lib.js -> library file
    4. lib.js.map -> ES6 sourcemap file for lib.js
    5. styles.min.css -> CSS file
3. open http://localhost:8080/ in browser to see the application

#To run unit test coverage follow these steps
1. npm run test
2. launch 'app\tests\__tests__\coverage\lcov-report\index.html' in browser to see code coverage

#To generate prod build follow these steps
1. npm run prod will generate production 'build' folder which has
    1. index-{hashcode for cache busting}.js minified application code
    2. libs-{hashcode for cache busting}.js minified vendor code
    3. styles-{hashcode for cache busting}.min.css minified css
