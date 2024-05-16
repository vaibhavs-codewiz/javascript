# HTTP verbs
HTTP verbs, also known as HTTP methods or request methods, are a set of keywords included in an HTTP request to indicate the desired action on a specific resource. They essentially function like instructions for the web server, telling it what to do with the requested data.

Here's a breakdown of some common HTTP verbs and their purposes:

GET: This is the most common verb. It's used to retrieve data from a specified resource. Imagine you're requesting a webpage or data from an API.

POST: Used to create new data on the server. Typically, POST requests include data in the request body that the server uses to create the new resource.

PUT: This verb is for updating existing data on the server. The request typically includes the entire updated data in the body.

PATCH: Similar to PUT, but designed for partial updates of a resource. The request only specifies the changes to be made, not the entire data.

DELETE: As the name suggests, DELETE removes a specified resource from the server.
Here's an analogy to solidify the concept:

Imagine you're at a library. You would use:

GET to request a specific book (retrieve data).
POST to submit a request for a new book (create data).
PUT to update your borrowing status for a book (update data entirely).
PATCH to extend the borrowing period for a book (partial update).
DELETE to return a borrowed book (delete data).
By understanding HTTP verbs, you can effectively interact with web servers and APIs, making informed decisions when building your own web applications.
# status code 
HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

examples : 
200 OK 
404 not found
400 bad request 
500 internal server error
# adding information in urls
we add query sting in url to add information example below :
https://google.com/search?q=india+election
here after .com we added quert (key value)

* we can also use this api to get further information about api .