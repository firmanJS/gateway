## How To Use

```
- clone servie-barang https://github.com/firmanJS/service-barang.git 
- clone service auth https://github.com/firmanJS/Express-Restfull-API-.git
- create database db_api_express postgres
- install redis https://redis.io/download
```

```
# install dependencies
- run npm install

# server runing in port 2000
- run npm run dev

# test running
- run in postman localhost:2000 method post username:user password:user

- after login succesfully run in postman localhost:2000/barang with header `x-token-api <token>`
```

```
[GET] http://localhost:2000/barang 
[GET] http://localhost:2000/barang/:id
[POST] http://localhost:2000/barang/
[PATCH] http://localhost:2000/barang/:id
[DELETE] http://localhost:2000/barang/:id
