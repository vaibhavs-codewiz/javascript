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
we add query string in api to add additional information, example below (ex is for url but similar on api also):
https://google.com/search?q=india+election
here after .com we added query (key value)
/search?name=vaibhav&branch=cs

* we can also use this api to fetch further information about api .
 the common methods for adding information into an API endpoint:

1. POST Requests: This is the most widely used method for creating new resources within an API. It involves sending a payload of data in the request body to the endpoint. This payload typically follows a structured format like JSON (JavaScript Object Notation) or XML (Extensible Markup Language).

2. PUT Requests: PUT requests are for updating existing resources completely. They also use a request body containing the entire updated data for the resource being modified.

3. PATCH Requests: PATCH requests provide a more granular way to update specific aspects of a resource. Unlike PUT, which replaces the entire resource data, PATCH allows for targeted modifications. The request body in PATCH specifies the changes to be made using formats like JSON Patch or MERGE.

4. URL Parameters:  While not ideal for large amounts of data, URL parameters can be used to add specific information to an endpoint. Parameters are appended to the endpoint URL after a question mark (?), with each parameter taking the format of key=value. This method is suitable for sending concise data like filter criteria or sorting options.

Choosing the Right Method:

The appropriate method depends on the specific action you intend to perform on the API resource:

Use POST to create a new resource entirely.
Use PUT to entirely replace an existing resource.
Use PATCH to modify specific parts of a resource.
Use URL parameters for concise data additions like filtering or sorting.
Remember, API documentation is your best friend. It will detail the supported methods for each endpoint and the expected data format for requests.
# request and reponse headers :-
* In the world of APIs, request and response headers act like mini-messages attached to the actual data being exchanged. They provide crucial context and instructions for a smooth interaction between your application and the API server.