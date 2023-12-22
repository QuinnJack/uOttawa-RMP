import ratings from '@mtucourses/rate-my-professors';

function main() {
  return ratings.searchSchool('university of ottawa')
    .then(schools => {
      console.log(schools);
      // ... other operations ...
    })
    .catch(error => {
      console.error(error);
      // Handle errors if necessary
    });
}

main();
