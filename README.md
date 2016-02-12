# Project-Portal
Portal for purchasing project equipment

### Get started with Developing
Install [docker-toolbox](https://www.docker.com/products/docker-toolbox) for your platform and familiarize yourself with docker. Get a docker environment up that you can access. The project portal is a compose app, so from the root of the repo you can run `docker-compose up` with a `docker-compose.override.yml` with approprate keys to start all the services.

Most likely you'll be working on one of the services at a time. With compose start up the servies you're not developing for and run the one you are with the necessary environment variables to link to the rest of the app.

```
docker-compose up pgapi gateway db cache
```
