#!/bin/bash

echo "building..."
sudo docker build -t registry.deti:5000/nginx-pabreu:$1 -f kube-deploy/Dockerfile.nginx .

echo "pushing..."
sudo docker push registry.deti:5000/nginx-pabreu:$1
