from flask import Flask, request
import json
import mysql.connector
from flask_cors import CORS
from flask import jsonify
import ast

app = Flask(__name__)
CORS(app)

current_user_id = 0


#Set mysql access credentials 
file = open("/tmp/secrets/credentials", "r")
content = file.read()
config = ast.literal_eval(content)
file.close()

@app.route("/register", methods= ['POST'])
def savename():
    if request.method == 'POST':
        data = (request.json)

        if data.get('id') is not None:
            id = data['id']
        if data.get('name') is not None:
            name = data['name']

        cnx = mysql.connector.connect(**config)
        cursor = cnx.cursor()
        
        cursor.execute(f"""
        INSERT INTO USERS (idauth, username) VALUES ('{id}', '{name}');
        """)

        cnx.commit()
        cursor.close()
        cnx.close()

        return "OK", 200
    

@app.route("/bill", methods = ['POST'])
def addBill():
    if request.method == 'POST':
        data = request.get_json()

        print(data, flush=True)
        
        titulo = data['titulo']
        descricao = data['descricao']
        amount = float(data['amount'])
        publishBy = data['name']

        cnx = mysql.connector.connect(**config)
        cursor = cnx.cursor()

        # enviar contas para a API do Gameiro Aqui

        print('prints:\n')
        print(titulo)
        print(descricao)
        print(amount)
        print(publishBy)

        cursor.execute(f"""
        INSERT INTO BILLS (title, description, amount, publishBy) VALUES ('{titulo}', '{descricao}', {amount}, '{publishBy}');
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
                'publishedBy': row[5],
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
