# USER API SPEC

## Register USER

Endpoint : POST /api/users

Request Body :

```json
{
   "username": "Muhammad Fauzi",
   "password": "fauzibelajar123",
   "name": "fauzi ganz"
}
```

Response Body (Success) :

```json
{
   "statusCode": 200,
   "message": "Success Create Data",
   "additionalData": {
      "username": "Muhammad Fauzi",
      "name": "fauzi ganz"
   }
}
```

Response Body (Failed) :

-  Field ada yang tidak diisi

```json
{
   "statusCode": 400,
   "message": error.message,
   "additionalData": {
   }
}
```

-- Internal Server Error

```json
{
   "statusCode": 500,
   "message": error.message,
   "additionalData": {
   }
}
```

## Login USER

Endpoint : POST /api/users

Request Body :

```json
{
   "username": "Muhammad Fauzi",
   "password": "fauzibelajar123"
}
```

Response Body (Success) :

```json
{
   "statusCode": 200,
   "message": "Success Create Data",
   "additionalData": {
      "username": "Muhammad Fauzi",
      "name": "fauzi ganz",
      "token": "uuid token"
   }
}
```

Response Body (Failed) :

-  Field ada yang tidak diisi

```json
{
   "statusCode": 400,
   "message": error.message,
   "additionalData": {
   }
}
```

-- Internal Server Error

```json
{
   "statusCode": 500,
   "message": error.message,
   "additionalData": {
   }
}
```

## Get USER

Endpoint : GET /api/users/current

Request Header :

-  X-API-TOKEN : token

Request Body :

```json
{
   "username": "Muhammad Fauzi",
   "password": "fauzibelajar123"
}
```

Response Body (Success) :

```json
{
   "statusCode": 200,
   "message": "Success Get Data",
   "additionalData": {
      "username": "Muhammad Fauzi",
      "name": "fauzi ganz",
      "token": "uuid token"
   }
}
```

Response Body (Failed) :

```json
{
   "statusCode": 500,
   "message": error.message,
   "additionalData": {
   }
}
```

## Update USER

Endpoint : PATCH /api/users/current

Request Header :

-  X-API-TOKEN : token

Request Body :

```json
{
   "username": "Muhammad Fauzi", // tidak wajib
   "password": "fauzibelajar123" // tidak wajib
}
```

Response Body (Success) :

```json
{
   "statusCode": 200,
   "message": "Success Get Data",
   "additionalData": {
      "username": "Muhammad Fauzi",
      "name": "fauzi ganz"
   }
}
```

Response Body (Failed) :

```json
{
   "statusCode": 500,
   "message": error.message,
   "additionalData": {
   }
}
```

## Delete USER

Endpoint : DELETE /api/users/current

Request Header :

-  X-API-TOKEN : token

Response Body (Success) :

```json
{
   "statusCode": 200,
   "message": "Success Logout Data",
   "additionalData": {}
}
```

Response Body (Failed) :

```json
{
   "statusCode": 500,
   "message": error.message,
   "additionalData": {
   }
}
```
