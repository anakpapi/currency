### 1. Clone the repo

Clone the repo locally. In a terminal, run:

```
$ git clone https://github.com/anakpapi/currency
```

### 2. Run the application
1. Install [Node.js](https://nodejs.org/en/)
2. Run the following commands in a terminal: 

```
$ yarn install

$ yarn start
```

Verify app is running and working correctly.

## Run the application using Docker
1. [Build the image](#1-build-the-image)
2. [Run the image](#2-run-the-image)

### 1. Build the image

In a terminal, run:
```
$ docker build -t react_currency .
```

Your image should be listed by running:

```
$ docker images
```

### 2. Run the image

In a terminal, run:

```
$ docker run -p 3000:3000 -d react_currency
```

You can now access the application at http://localhost:3000