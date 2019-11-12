FROM node:latest as build

WORKDIR /app

# Add '/app/node_modules/.bin' to $PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli

COPY . /app

# Build the app
RUN ng build --output-path=dist

FROM nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html

COPY ./config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./config/nginx/sites/ /etc/nginx/sites-available/
COPY ./config/nginx/conf.d/ /etc/nginx/conf.d/

EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]

