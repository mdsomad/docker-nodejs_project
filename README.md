## build & Run

```sh
docker build -t somadev-server.
```

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## 👇 Docker MongoDB Documentation Websit link

https://hub.docker.com/_/mongo

## 👇 Docker MongoDb run Command

```sh
docker run -d --name mymongo -p 27020:27017 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=scecret mongo
```

<br/>

## 👇 Is Url Se Connect kar sakte hain MongoDB ko MongoDB Compass se

```sh
mongodb://mongoadmin:scecret@localhost:27020/
```

<br/>

## 👇 Same network Mein Ho Na chahie mongoDB and nodejsServer ko Ek Sath connect kar payega donon

- Yah command Se Khud ka custom network create kar sakte hain

```sh
docker network create -d bridge my-custom-network
```

<br/>

- 👇 Yah Command sa ek hi network & Custom network Mein mangoDB Run kar sakte hain ( MongoDB and Node.js Server image Mein Ek Sath connect ho sakta hai)

```sh
docker run -d -p 27020:27017 --net my-custom-network -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodockerwala mongo

```

<br/>

- 👇 Yah Command se server ko MongoDB Continer📦 ke sath Run Kar sakte Hain

```sh
docker run -d -p 4444:4444 -e PORT=4444 -e MONGO_URL=mongodb://admin:password@mongodockerwala --net my-custom-network somadev-server
```

- 👇 Yah Command Sa container📦 ko logs dekh sakte hain

```sh
# Example Name --> docker logs funny_fermat
# Example id --> docker logs 5abc9ee2ed05

docker logs container_name Ya Fir container_id
```

- 👇 Yah Command Sa container📦 ko inspect Kar sakte hain

```sh
# Example Name -->  docker inspcet funny_fermat
# Example id -->  docker inspcet 5abc9ee2ed05

docker inspect container_name Ya Fir container_id
```

- 👇 Yah Command Sa network ko inspect Kar sakte hain

```sh
# Example --> docker network inspect my-custom-network

docker network inspect network_name
```
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# Docker Compose Run Command

- First build imges
```sh
docker build -t auth .
docker build -t somadev-server.
# 👇 Run Command Check Images 
docker images
```

#### docker-compose ka fayda hai Ek Sath Multiple Container📦 ko Run🏃‍♀️ Kiya Ja sakta hai
#### docker-compose file Mein Sab Kuchh define Kiya Hua Hai
- 👇 yah command see docker compose ko run kar sakte hain
```sh
docker compose up -d
```
<br/>

- 👇 yah command see docker compose ko stop kar sakte hain
```sh
docker compose dwon
```