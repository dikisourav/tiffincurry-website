FROM node:22.21.1
WORKDIR /app
#COPY package*.json ./
#RUN npm install
COPY . .
#test for run npm install after copying the files to ensure all dependencies are installed
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]