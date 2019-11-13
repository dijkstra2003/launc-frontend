FROM node:latest as build

WORKDIR /app

# Set route for the API
ARG API_ROUTE

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli

COPY . /app

RUN chmod +x "./scripts/create_prod.sh"
RUN /bin/bash -c "./scripts/create_prod.sh $API_ROUTE"

# Build the app
RUN ng build --prod --output-path=dist

FROM nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html

COPY ./config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./config/nginx/sites/ /etc/nginx/sites-available/
COPY ./config/nginx/conf.d/ /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
