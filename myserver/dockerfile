#? 👇 Base image use ubuntu
FROM ubuntu

#? yah Sara Commands Sa Ubuntu machine Mein note.js ko install Karega
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

#?👇 Is WORKDIR 👈 ka matlab hai jo bhi files📄📁 copy Hoga ISI 📁directory mein jaega
WORKDIR /app     

#! 👇 Agar  [ COPY  . . ] 👈 use ho raha hai to isko use nahin kar sakte (Yah donon ko comment kar dena sahi hai)
COPY package.json package.json
COPY package-lock.json package-lock.json

#?👇 Is tarike se bhi kar sakte hain file ko copy 
#?👇 COPY . . <-- yah Sara & All files ko copy karta hai
# COPY  . . 

RUN npm install

COPY main.js main.js


ENTRYPOINT [ "node", "main.js" ]

















# FROM ubuntu

# RUN apt-get update
# RUN apt-get install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
# RUN apt-get upgrade -y
# RUN apt-get install -y nodejs

# COPY package.json package.json
# COPY package-lock.json package-lock.json

# RUN npm install

# COPY main.js main.js


# ENTRYPOINT [ "node", "main.js" ]