## build & Run 

docker  build -t example-nodejs-use-docker . 


docker run -it -e PORT=4000 -p 4000:4000 example-nodejs-use-docker