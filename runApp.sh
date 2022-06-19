#!/bin/bash

echo "building..."
sudo docker build -t registry.deti:5000/app-pabreu:$1 -f kube-deploy/Dockerfile.app .

echo "pushing..."
sudo docker push registry.deti:5000/app-pabreu:$1
