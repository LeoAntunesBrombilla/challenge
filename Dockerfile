FROM node:14

WORKDIR /usr
RUN ls -a
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN npm install
RUN npm run build
RUN ls -a

FROM node:14
WORKDIR /usr
COPY package.json ./
RUN npm install --only=production
COPY --from=0 /usr/dist ./dist

EXPOSE 8000
CMD NODE_URLS=http://*:$PORT npm start


