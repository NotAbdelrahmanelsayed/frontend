/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/

console.log(location.href);

// location.href = "/#my-div";

console.log(location.host); // the name of the website, and the port
console.log(location.hostname); // The name of the website.

console.log(location.protocol); // http or https

// console.log(location.reload()); // reload the page

// location.replace("") // Remove the current page from the session history.
// location.assign("") // Gives a new url without removing the current url from the browsing queue.
