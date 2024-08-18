FROM --platform=linux/amd64 nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/sites-available/default
COPY ./dist /usr/share/nginx/html