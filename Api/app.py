from flask import Flask, jsonify, request

app = Flask(__name__)

medicos = [
    { 
      "id": "1",
      "nome": "Jose Geraldo",
      "area": "Dentista" 
    },
    { 
      "id": "2",
      "nome": "Henrique Lacerda",
      "area": "Neurologista" 
    },
    { 
      "id": "3",
      "nome": "Carlos Cardoso",
      "area": "Podologo" 
    },
    { 
      "id": "4",
      "nome": "Laura Dayana",
      "area": "Agronoma" 
    },
    { 
      "id": "5",
      "nome": "Ana Clara dos Santos",
      "area": "Pediatra" 
    }
]

#consultar medicos

@app.route('/medicos')
def obter_medicos():
    return jsonify(medicos)

@app.route('/medicos/<int:id>', methods=['GET'])
def obter_medico(id):
    for medico in medicos: 
        if medicos.get('id') == id:
            return jsonify(medico)

app.run(port=5000, host='localhost', debug=True)