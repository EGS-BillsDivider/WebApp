!/bin/sh
echo "Waiting for DB"

echo "" | nc -w 1 mysql-pabreu 3306

while [ ! $? -eq 0 ]; do
    sleep 1
    echo "" | nc -w 1  mysql-pabreu 3306
done
echo "DB Up"
sleep 5
echo "Starting"
gunicorn --chdir app main:app -w 2 --threads 2 -b 0.0.0.0:8000