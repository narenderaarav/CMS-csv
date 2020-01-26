from flask import Flask,jsonify
from flask_restful import Resource,Api
from flask import request
from flask_cors import CORS
import csv
import sys


app = Flask(__name__)
CORS(app)
api = Api(app)

class Csv(Resource):


    def post(self):
        try:
            csv_data = request.get_json()
            print(csv_data)
            
            env = sys.platform
            if env=="win32":
                mypath = r'C:\Users\maninder singh\Desktop\CSVfile.csv'
            else:
                mypath = ""

            keys = csv_data[0].keys()
            with open(mypath, 'w', newline='') as output_file:
                dict_writer = csv.DictWriter(output_file, keys)
                dict_writer.writeheader()
                dict_writer.writerows(csv_data)

            return jsonify({'message': 'success'})

        except:
            return jsonify({'message': 'failure'})

                
            

    
api.add_resource(Csv,'/writecsv/')


if __name__ == "__main__":
    app.run(debug=True,port=4999)


