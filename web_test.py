from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/pi10million.txt")
def pi_data():
    basedir = os.path.abspath(os.path.dirname(__file__))
    with open(basedir + "/pi10million.txt", "r") as f:
        return f.read()

@app.route("/functionality.js")
def js_data():
    basedir = os.path.abspath(os.path.dirname(__file__))
    with open(basedir + "/functionality.js", "r") as f:
        return f.read()
    
@app.route("/index.css")
def css_data():
    basedir = os.path.abspath(os.path.dirname(__file__))
    with open(basedir + "/index.css", "r") as f:
        return f.read()
    
@app.route("/big_int_helper.js")
def big_js_data():
    basedir = os.path.abspath(os.path.dirname(__file__))
    with open(basedir + "/big_int_helper.js", "r") as f:
        return f.read()