FROM node:25.6-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

# Usage : echo "<FA_TOKEN>" > .fa-token && docker build --secret id=FONTAWESOME_TOKEN,src=.fa-token -t portfolio . ; rm .fa-token
RUN --mount=type=secret,id=FONTAWESOME_TOKEN \
    FONTAWESOME_TOKEN=$(cat /run/secrets/FONTAWESOME_TOKEN) \
    echo "@fortawesome:registry=https://npm.fontawesome.com/" > .npmrc && \
    echo "//npm.fontawesome.com/:_authToken=$(cat /run/secrets/FONTAWESOME_TOKEN)" >> .npmrc && \
    yarn install --frozen-lockfile && \
    rm -f .npmrc

COPY . .

RUN yarn build:vercel

FROM node:25.6-alpine

RUN npm install -g serve

COPY --from=build /app/dist /app

EXPOSE 3000

CMD ["serve", "-s", "/app", "-l", "3000"]
