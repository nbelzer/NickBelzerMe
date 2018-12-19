<h2 align="center">NickBelzer.Me</h2>

This repo contains the code for my personal website which can be found at [nickbelzer.me](https://nickbelzer.me).

The website is used as both a portfolio and way for me to play with new libraries or technologies.

### Getting Started
The website is bundled using [parcel](https://github.com/parcel-bundler/parcel). Parcel takes care of the optimisation and bundling of the images, javascript, css and html. 

To install the required packages to bundle the website together, either for 
testing or build purposes the required packages have to be installed:

```bash
# install dependencies
npm install
```

To run the development version using parcel:
```bash
# start a hot-reloading development build
npm run start
```

To package the files together in a bundle:
```bash
# build for production with minification
npm run build
```

### Docker
As can be seen in the `./Dockerfile` the final build produced by parcel will 
be hosted in an nginx docker image. This image is meant to run using the 
[reverse-proxy images by jwilder](https://github.com/jwilder/nginx-proxy).
