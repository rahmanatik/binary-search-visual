FROM node:alpine
WORKDIR /
COPY ./ ./

# run
EXPOSE 8080
CMD ["npm", "start"]
