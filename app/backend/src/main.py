from flask import Flask, request
import json
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#Set mysql access credentials 
config = {
    'host': 'db',
    'user': 'root',
    'password': 'root',
    'port': '3306',
    'database': 'WEBAPP'
}

@app.route("/bill", methods = ['POST'])
def addBill():
    if request.method == 'POST':
        data = (request.json)
        
        if data.get('titulo') is not None:
            titulo = data['titulo']
        if data.get('descricao') is not None:
            descricao = data['descricao']
        if data.get('amount') is not None:
            amount = float(data['amount'])

        cnx = mysql.connector.connect(**config)

        cursor = cnx.cursor()

        # enviar contas para a API do Gameiro Aqui

        cursor.execute(f"""
        INSERT INTO BILLS (title, description, amount) VALUES ('{titulo}', '{descricao}', {amount});
        """)

        cnx.commit()
        cursor.close()
        cnx.close()

        return "OK", 200

@app.route("/bills", methods = ['GET'])
def getBills():
    if request.method == 'GET':

        cnx = mysql.connector.connect(**config)
        cursor = cnx.cursor()

        cursor.execute(f"""
        select * from BILLS;
        """)

        result = cursor.fetchall()

        data = []

        for row in result:
            x = {
                'id': row[0],
                'titulo': row[1],
                'descricao': row[2],
                'publishedOn': row[4].strftime("%a, %d %b %Y"),
                'publishedBy': 'x',
                'amount': row[3]
            }
            data.append(x)

        cursor.close()
        cnx.close()

        response = jsonify(data)

        # Enable Access-Control-Allow-Origin
        response.headers.add("Access-Control-Allow-Origin", "*")

        return response


@app.route("/login", methods = ['GET'])
def login():
    if request.method == 'GET':

        return "OK", 200


if __name__ == "__main__":
    app.run()
