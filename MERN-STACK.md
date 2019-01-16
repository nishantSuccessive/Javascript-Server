# What is MERN Stack? #
![](https://image.slidesharecdn.com/07-andrew-morgan-mongodb-eur-3639c792-a794-41c2-8f6b-35842ccc43ba-194500826-171116223453/95/developing-with-the-modern-app-stack-mean-and-mern-with-angular2-and-reactjs-35-638.jpg?cb=1510871713)

 **MERN** stack is the name given to a set of _JavaScript_ based technologies used in developing web applications. 

 MERN is the acronym name given to the set of technologies including _"Mongo DB, Express JS, React JS/ Redux and Node JS"_. 

Among these technologies **Mongo DB** is a database system, **Node JS** is a back-end runtime environment, **Express JS** is a back-end web framework and **React** is a front-end framework.

 Let us understand each one of the following in details:-

## Mongo DB 

MongoDB is a "_cross-platform, document oriented database that provides, high performance, high availability, and easy scalability_".


MongoDB works on concept of collection and document.

Collection is a group of MongoDB documents. It is the equivalent of an RDBMS table. 

A document is a set of **key-value pairs**. Documents have _dynamic schema_. Dynamic schema means that documents in the same collection do not need to have the same set of fields or structure.


#Express JS #
 Express is a minimal and flexible **Node.js** web application framework that provides a robust set of features for web and mobile applications.
  
It is an open source framework developed and maintained by the Node.js foundation.

ExpressJS is a web application framework that provides you with a simple API to build websites, web apps and back ends.
  
With ExpressJS, you need not worry about low level protocols, processes, etc.


#### For Example-

var express = require('express');

       var app = express();
       app.get('/', function(req, res){
       res.send("Hello world!");
    app.listen(3000);


#### app.get(route, callback) 

This function tells what to do when a get request at the given route is called. The callback function has 2 parameters, request(req) and response(res). The request object(req) represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc. Similarly, the response object represents the HTTP response that the Express app sends when it receives an HTTP request.

####res.send()

 This function takes an object as input and it sends this to the requesting client. Here we are sending the string "Hello World!".

#### app.listen(port, [host], [backlog], [callback]])
This function binds and listens for connections on the specified host and port. Port is the only required parameter here.

 # 3. React JS #

 React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. 

ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.

#### React Features ####

**JSX** − JSX is JavaScript syntax extension. It isn't necessary to use JSX in React development, but it is recommended.

 **Components** − React is all about components. You need to think of everything as a component. This will help you maintain the code when working on larger scale projects.

**Unidirectional data flow and Flux** − React implements one-way data flow which makes it easy to reason about your app. Flux is a pattern that helps keeping your data unidirectional.

#### React Advantages ####

1. Uses virtual DOM which is a JavaScript object. This will improve apps performance, since JavaScript virtual DOM is faster than the regular DOM.

2. Can be used on client and server side as well as with other frameworks.

3. Component and data patterns improve readability, which helps to maintain larger apps.

# 4. Node JS #

A common task for a web server can be to open a file on the server and return the content to the client.

 Here is how Node.js handles a file request:

1. Sends the task to the computer's file system.

2. Ready to handle the next request.

3. When the file system has opened and read the file, the server returns the content to the client.

Node.js eliminates the waiting, and simply continues with the next request.

Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.

Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
