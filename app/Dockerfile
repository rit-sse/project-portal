FROM iron/node:4.2-dev

WORKDIR /app
COPY ./ /app

RUN npm install
RUN npm run build
RUN ls dist
RUN mkdir -p /usr/share/nginx/html
RUN cp -avr ./dist/ /usr/share/nginx/html/

CMD /bin/bash -c "while true; do sleep 60; done;"
