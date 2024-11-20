#  devDependencies ---
    FROM node:18-alpine3.17 as dev-deps

    WORKDIR /usr/src/app
    
    # Unless one of these two files are changed, this build step will be skipped
    COPY package.json yarn.lock  ./
    RUN yarn --pure-lockfile --non-interactive
    
    #  node dependencies ---
    FROM node:18-alpine3.17 as deps
    WORKDIR /usr/src/app
    
    # Unless one of these two files are changed, this build step will be skipped
    COPY package.json yarn.lock  ./
    RUN yarn --pure-lockfile --non-interactive --production
    
    
    # Typescript build
    FROM node:18-alpine3.17 as ts-build
    WORKDIR /usr/src/app
    
    # Note that we need "devDependencies" in this step, whereas we just need "dependencies" in the next one.
    COPY --from=dev-deps /usr/src/app /usr/src/app
    
    # Copy needed files that aren't in the /src folder.
    COPY index.ts ./
    COPY tsconfig.json ./
    
    # This is what we'll be building:
    COPY ./src ./src
    
    RUN yarn build
    # /Typescript
    
    
    # --- Node ------------------------ 
    FROM node:18-alpine3.17
    RUN apk add --no-cache bash
    
    WORKDIR /usr/src/app
    
    # Get the deps from both Typescript (ts-build) and yarn install (deps)
    COPY --from=deps /usr/src/app /usr/src/app
    COPY --from=ts-build /usr/src/app/build /usr/src/app/build
    
    COPY ecosystem.config.js ./
    
    # wait-for-it helps us wait for services
    # maybe do entire folder copy?
    COPY ./scripts/wait-for-it.sh ./scripts/wait-for-it.sh
    COPY ./docker-entrypoint.sh ./docker-entrypoint.sh
    RUN chmod +x ./scripts/wait-for-it.sh ./docker-entrypoint.sh
    
    
    EXPOSE 3010
    ENTRYPOINT ["./docker-entrypoint.sh"]
    CMD ["yarn", "start"]
    
    