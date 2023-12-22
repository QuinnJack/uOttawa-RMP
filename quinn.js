"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rate_my_professors_1 = require("@mtucourses/rate-my-professors");
function main() {
    return rate_my_professors_1.default.searchSchool('university of ottawa')
        .then(function (schools) {
        console.log(schools);
        // ... other operations ...
    })
        .catch(function (error) {
        console.error(error);
        // Handle errors if necessary
    });
}
main();
