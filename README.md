# Docker-Compose-without-manually-images-created-fixed

<br/>
<br/>

## First Applications Images created by Docker

<br/>

#### docker-compose ka fayda hai Ek Sath Multiple Container📦 ko Run🏃‍♀️ Kiya Ja sakta hai

#### docker-compose file Mein Sab Kuchh define Kiya Hua Hai

- 👇 yah command see docker compose ko run kar sakte hain

```sh
docker compose up -d
```

- 👇 Yah command watch Mein RUN kar sakte hain watch mod mein RUN karne se real time mein changes ko dekh sakte hain
- 👇 yah watch Mod basically development ke liye use Kiya jata hai

```sh
docker compose watch
```

<br/>

- 👇 yah command see docker compose ko stop kar sakte hain

```sh
docker compose dwon
```

## 👇 Yah Command Se Docker Volume Attach Karne ke sath hi mongo DB ko RUN kar sakte hain (Volume attach karne se Data loss Nahin Hota Hai)

```sh
docker run -d -p 27020:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodbDatabase -v customvolumecreate:/data/db mongo
```
