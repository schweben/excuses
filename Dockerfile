FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY excuses.json /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
COPY dist/ .
