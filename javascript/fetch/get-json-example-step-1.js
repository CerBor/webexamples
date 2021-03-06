
// A URL returns JSON data.
var url = "https://rawgit.com/o7planning/webexamples/master/_testdatas_/json-simple-data.json";


function doGetJSON()  {

  // Call fetch(url) with default options.
  // It returns a Promise object:
  var aPromise = fetch(url);

  // Work with Promise object:
  aPromise
    .then(function(response) {
        console.log("OK! Server returns a response object:");
        console.log(response);
    })
    .catch(function(error)  {
        console.log("Noooooo! Something error:");
        console.log(error);
    });

}
