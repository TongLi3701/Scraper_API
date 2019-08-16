# TeSsWriteApi.MaterialsApi

All URIs are relative to *https://tess.oerc.ox.ac.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**materialsJsonPost**](MaterialsApi.md#materialsJsonPost) | **POST** /materials.json | Add a new training material.
[**materialsMaterialIdJsonPut**](MaterialsApi.md#materialsMaterialIdJsonPut) | **PUT** /materials/{materialId}.json | Update a training material


<a name="materialsJsonPost"></a>
# **materialsJsonPost**
> Object materialsJsonPost(opts)

Add a new training material.

Users can add a new training material.

### Example
```javascript
var TeSsWriteApi = require('te_ss_write_api');

var apiInstance = new TeSsWriteApi.MaterialsApi();

var opts = { 
  'material': new TeSsWriteApi.Material() // Material | The information of the materials.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.materialsJsonPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **material** | [**Material**](Material.md)| The information of the materials. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="materialsMaterialIdJsonPut"></a>
# **materialsMaterialIdJsonPut**
> materialsMaterialIdJsonPut(materialId, opts)

Update a training material

update the properties of the material.

### Example
```javascript
var TeSsWriteApi = require('te_ss_write_api');

var apiInstance = new TeSsWriteApi.MaterialsApi();

var materialId = 56; // Number | 

var opts = { 
  'material': new TeSsWriteApi.Material() // Material | The information of the materials.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.materialsMaterialIdJsonPut(materialId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **materialId** | **Number**|  | 
 **material** | [**Material**](Material.md)| The information of the materials. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

