FROM iron/node:4.2-dev

WORKDIR /app
COPY ./ /app

RUN npm install
RUN npm run build

CMD /bin/bash -c "exit 0;"
