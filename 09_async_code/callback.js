//understanding call back functions and callback hell
//this is the example of call back , look how complicated it has become to understand
//the code .
function getDataFromAPI(callback) {
  setTimeout(() => {
    const data = { name: "Alice" };
    callback(data);
  }, 1000);
}

function processData(data, callback) {
  setTimeout(() => {
    const message = "Welcome, " + data.name;
    callback(message);
  }, 500);
}

function displayData(message) {
  console.log(message);
}

getDataFromAPI(function (data) {
  processData(data, function (message) {
    displayData(message);
  });
});

