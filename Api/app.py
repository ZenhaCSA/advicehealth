from flask import Flask, jsonify, request
from flask_cors import CORS
import json

with open("./Objects/medicos.json", encoding='utf-8') as listamedicos:
    medicos = json.load(listamedicos)

with open("./Objects/horarios.json", encoding='utf-8') as listahorarios:
    horarios = json.load(listahorarios)

with open("./Objects/agendamentoFeitos.json", encoding='utf-8') as listaagendamentos:
    agendamentos = json.load(listaagendamentos)

app = Flask(__name__)
CORS(app)

# consultar medicos


@app.route('/medicos')
def obter_medicos():
    return jsonify(medicos)


@app.route('/medicos/<int:id>', methods=['GET'])
def obter_medico(id):
    for medico in medicos:
        if medicos.get('id') == id:
            return jsonify(medico)

@app.route('/horarios', methods=['GET'])
def obter_horarios():
    return jsonify(horarios)

@app.route('/agendamentos', methods=['GET'])
def obter_agendamentos():
    return jsonify(agendamentos)


app.run(port=5000, host='localhost', debug=True)
