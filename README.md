# Docker
### Build
This image was built using the following commands:
```
// This will build the app, compiling SCSS and TypeScript into a single JS bundle 
$ webpack
```

```
// Builds the Docker image
docker build -t dffull0245/bs .
```
### Running the image
Use the following command to start the application on port 8080 on your machine:
```
docker run -p 8080:8080 dffull0245/bs
```
# GitHub
You may view this repository's source code on [GitHub](https://github.com/danielfullerton/binary-search-visual).
