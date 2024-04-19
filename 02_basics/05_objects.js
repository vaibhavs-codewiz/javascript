//destructuring of objects ::
const course = {
  courseName: "js",
  duration: "51 lectures",
};
console.log(course.courseName);

//this long syntax can be shorten by destructuring of objects

const { courseName } = course;

console.log(courseName); // same output with less typing

const { courseName: CN } = course;

console.log(CN); // again same output
