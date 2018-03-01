from flask import Flask, render_template, Response
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users')
def users():
    data = [{'name': 'Bob'}, {'name': 'Larry'}, {'name': 'Bonnie'}]
    return Response(json.dumps(data), mimetype='application/json')
