from flask import Flask,jsonify
from flask_restful import Resource,Api
import os
import sys                 
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

class Csv(Resource):

    def get(self):

        env = sys.platform
        print(env)
        

        if env=="win32":
            mypath = r'C:\Users\maninder singh\Desktop\CSVfile.csv'
        else:
            mypath = ""


        if os.path.exists(mypath):
            with open(mypath, 'r') as file:
                data = file.read()
                return jsonify({'data': data})
            
        else:
            return jsonify({'message': 'null'})


api.add_resource(Csv,'/csv/')


if __name__ == "__main__":
    app.run(debug=True)


