FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

# RUN npm run sync-db

EXPOSE 9000

CMD npm run start:dev && npx sequelize-cli db:seed:all
# RUN npm run start:prod
# RUN npx sequelize-cli seed:generate --name nombre_del_seeder