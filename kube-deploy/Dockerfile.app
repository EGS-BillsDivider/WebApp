#To build: sudo docker build -t registry.deti:5000/app-pabreu:v1 -f kube-deploy/Dockerfile.app .
#To add to registry: sudo docker push registry.deti:5000/app-pabreu:v1

FROM python:3.8-alpine

MAINTAINER Pedro Abreu

LABEL version="1.0"

RUN mkdir /app

COPY deploy/gunicorn_starter.sh gunicorn_starter.sh

WORKDIR /app

COPY app/backend/requirements.txt requirements.txt

RUN pip install -r requirements.txt

EXPOSE 8000/tcp

COPY app/backend/src/main.py main.py

WORKDIR ..

ENTRYPOINT ["./gunicorn_starter.sh"]
