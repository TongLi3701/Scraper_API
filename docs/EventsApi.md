# TeSsWriteApi.EventsApi

All URIs are relative to *https://tess.oerc.ox.ac.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsEventIdJsonPut**](EventsApi.md#eventsEventIdJsonPut) | **PUT** /events/{eventId}.json | Update an event
[**eventsJsonPost**](EventsApi.md#eventsJsonPost) | **POST** /events.json | Add a new event.


<a name="eventsEventIdJsonPut"></a>
# **eventsEventIdJsonPut**
> eventsEventIdJsonPut(eventId, opts)

Update an event

Ppdate the properties of the event.

### Example
```javascript
var TeSsWriteApi = require('te_ss_write_api');

var apiInstance = new TeSsWriteApi.EventsApi();

var eventId = 56; // Number | 

var opts = { 
  'event': new TeSsWriteApi.Event() // Event | The information of the event.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsEventIdJsonPut(eventId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**|  | 
 **event** | [**Event**](Event.md)| The information of the event. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="eventsJsonPost"></a>
# **eventsJsonPost**
> Object eventsJsonPost(opts)

Add a new event.

Users can add a new event.

### Example
```javascript
var TeSsWriteApi = require('te_ss_write_api');

var apiInstance = new TeSsWriteApi.EventsApi();

var opts = { 
  'event': new TeSsWriteApi.Event() // Event | The information of the event.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsJsonPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event** | [**Event**](Event.md)| The information of the event. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

