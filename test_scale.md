## Testing and Scalability ##

### Testing ###
Testing of this application can be done in following ways -

### End user's view point

This would be actually testing the features from the end user's perspective 

### Correctness
The details which we are show to end user is correct or not i.e should match with source data.

### Easy to interpret and present
End result should be displayed in the format which is quite easy to grasp e.g in form of table or charts.

### Dynamic, plug and play
End user can change the source of data and should get the updated result based on new data.

### Responsive
User-interface is responsive as per the consumer's media devices, also user-interface send notifications or alert during or after performing some long running task and is non-blocking.

### Unit testing

This would be actually testing the application's actual component individually in isolation. But to achieve perfect unit testing there must not be too much dependency in between modules i.e each module has well defined single responsibility and module behaves like a system in itself.

 * Test the module which fetches the data e.g data may be on some other website or network, or local file. In case data is not received or empty, data received, application should provide proper fallback with error message to end user and application must not crash.

* Application handles missing or null values properly on the data set

* Data which we have received it may not be in correct format so it needs to be transformed in proper format as required by the requirement. To do this the transformation unit or code module needs to be tested properly with some dummy data. 

* Passing dummy data to View elements such as composite ( container component) or functional components render's the output as expected.

* Utility methods or functions when passed dummy data returned expected values.


### Scalability ###

In current application all the data computation happens on the client side, due to which it could be quite problem to scale for millions of records. But it can be improved if some load is shared by server side and using some form of caching ( to avoid re-computation), suppose client requested same data again then result can be sent to client either from client side cache or server side.

Now data computation, transformation happens on server side ( which can be multi threaded or non-blocking server) and results are sent to client then client renders it on the user-interface.
