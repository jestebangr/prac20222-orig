import os
import pymysql
from flask import Flask, jsonify, render_template
from flaskext.mysql import MySQL
from datetime import datetime


app = Flask(__name__)

# MySQL configurations
try:
  app.config['MYSQL_DATABASE_USER'] = os.environ['MYSQL_USER']
  app.config['MYSQL_DATABASE_PASSWORD'] = os.environ['MYSQL_PASSWORD']
  app.config['MYSQL_DATABASE_DB'] = os.environ['MYSQL_DATABASE']
  app.config['MYSQL_DATABASE_HOST'] = 'mysql'
except KeyError:
  print("[!] Environment variable does not exist")

mysql = MySQL()
mysql.init_app(app)


@app.route('/db')
def users():
  try:
    conn = mysql.connect()

    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute("SELECT * FROM usuario")

    rows = cursor.fetchall()
    resp = jsonify(users=rows, student=app.config['MYSQL_DATABASE_USER'], created=datetime.now())
    resp.status_code = 200  
  except Exception as e:
    print(e)
    resp = jsonify(error="Cannot connect to database")
    resp.status_code = 404 

  return resp


@app.route('/', methods=('GET', 'POST'))
@app.route('/index')
def index():
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
