#TODO add a requirements doc: pip freeze > requirements.txt
#Install using: pip install -r requirements.txt
#See here: https://stackoverflow.com/questions/48941116/does-python-pip-have-the-equivalent-of-nodes-package-json
from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
  def get(self):
    return {'about':'Hello World'}

class Multi(Resource):
  def get(self,num):
    return {'result': num*10}

api.add_resource(HelloWorld, '/')
api.add_resource(Multi, '/multi/<int:num>')

if __name__ == '__main__':
  app.run(debug=True)