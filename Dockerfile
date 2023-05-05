FROM node:18.12.1

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

RUN npm install -g @angular/cli

EXPOSE 4200

CMD ng serve --host 0.0.0.0