from flask import Flask, Response
from flask_restful import Resource, Api
from flask_cors import CORS
from pybaseball import batting_stats
import pandas as pd

app = Flask(__name__)
cors = CORS(app)
api = Api(app)
# cache.enable()

class TeamBatting(Resource):
  def get(self):
    data = batting_stats(2020, qual=20)
    data = data.query('Team == "Royals"').iloc[:, list(range(24))]
    df = pd.DataFrame(data)
    dfjson = df.to_json(orient='records')
    # json_data = json.dumps(dfjson)
    # print(dfjson)
    # return {dfjson}
    return Response(dfjson, mimetype='application/json')

api.add_resource(TeamBatting, '/teambatting/')

if __name__ == '__main__':
  app.run(debug=True)
