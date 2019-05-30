from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
import urllib.parse
import json 

app = Flask(__name__)

app.config["MONGO_DBNAME"] = "QuikTix"
app.config["MONGO_URI"] = "mongodb+srv://Orane:" + urllib.parse.quote("P@ssw0rd") + "@cluster0-x0gof.mongodb.net/QuikTix?retryWrites=true&w=majority"

mongo = PyMongo(app)

@app.route('/')
def home():
    return 'My home page '

@app.route('/fetch', methods=['GET'])
def get_frameworks():
    db = mongo.db.TestUsers
    output = []

    for q in db.find():
        output.append({'firstName': q['firstName'], 'lastName': q['lastName']})

    return jsonify({'result': output})

@app.route('/add', methods=['GET'])
def test_add():
    db = mongo.db.TestUsers
    db.insert({'firstName':'testName2','lastName':'testLastName2'})
    return 'added user'


@app.route('/Users', methods=['GET','POST'])
def Users():
    Users = mongo.db.Users
    if request.method == 'GET':
        result=[]
        for i in Users.find({},{'_id':False}):
            result.append(i)
        return jsonify({'Users': result})

    elif request.method == 'POST':
        try:
            jsonData = request.get_json()
            if jsonData['requestType']=='getUser':
                u = Users.find_one({'username': jsonData[username]})
                return jsonify({'user':u})
            elif jsonData['requestType']=='addUser':
                Users.insert(jsonData['data'])
                return jsonify({'status':200, 'message':'success'})
            elif jsonData['requestType']=='updateUser':
                user = Users.find_one({'username': jsonData['user']})
                user.update(jsonData['data'])
                Users.save(user)
                return jsonify({'status':200, 'message':'success'})
            elif jsonData['requestType']=='deleteUser':
                user = Users.find_one({'username': jsonData['user']})
                Users.remove(user)
                return jsonify({'status':200, 'message':'success'})
        except Exception as error:
            print ('error',error)
            return jsonify({"message":"something went wrong"})


@app.route('/Events', methods=['GET', 'POST'])
def Events():
    Events = mongo.db.Events
    if request.method == 'GET':
        result=[]
        for i in Events.find({}, {'_id': False}):
            result.append(i)
        return jsonify({'Events': result})

    elif request.method == 'POST':
        try:
            jsonData = request.get_json()
            if jsonData['requestType']=='getEvent':
                E = Events.find_one({'username': jsonData[username]})
                return jsonify({'user':u})
            elif jsonData['requestType']=='addEvent':
                Events.insert(jsonData['data'])
                return jsonify({'status':200, 'message':'success'})
            elif jsonData['requestType']=='updateEvent':
                event = Events.find_one({"$and": [{'eventName': jsonData['eventName']}, {'hostName': jsonData['hostName']}]})
                event.update(jsonData['data'])
                Events.save(user)
                return jsonify({'status':200, 'message':'success'})
            elif jsonData['requestType'] == 'deleteEvent':
                event = Events.find_one({"$and": [{'eventName': jsonData['eventName']}, {'hostName': jsonData['hostName']}]})
                Events.remove(user)
                return jsonify({'status':200, 'message':'success'})
        except Exception as error:
            print ('error',error)
            return jsonify({"message":"something went wrong"})


@app.route('/Comment', methods=['GET', 'POST'])
def Comment():
    Comments = mongo.db.Comments
    if request.method == 'GET':
        try:
            result = []
            for i in Comments.find({'eventId': jsonData['eventId']}, {'_id': False}):
                result.append(i)
            return jsonify({'Comments': result})
        except Exception as error:
            print('error', error)
            return jsonify({"message": "something went wrong"})

    elif request.method == 'POST':
        try:
            jsonData = request.get_json()
            Comments.insert(jsonData['data'])
            return jsonify({'status': 200, 'message': 'success'})
        except Exception as error:
            print('error', error)
            return jsonify({"message": "something went wrong"})


@app.route('/Likes', methods=['GET', 'POST'])
def Like():
    Likes = mongo.db.Likes
    if request.method == 'GET':
        try:
            result = []
            for i in Likes.find({'eventId': jsonData['eventId']}, {'_id': False}):
                result.append(i)
            return jsonify({'Likes': result})
        except Exception as error:
            print('error', error)
            return jsonify({"message": "something went wrong"})

    elif request.method == 'POST':
        try:
            jsonData = request.get_json()
            Likes.insert(jsonData['data'])
            return jsonify({'status': 200, 'message': 'success'})
        except Exception as error:
            print('error', error)
            return jsonify({"message": "something went wrong"})


@app.route('/Friends', methods=['POST'])
def Friends():
    Friends = mongo.db.Friends
    if request.method == 'GET':
        try:
            result = []
            for i in Likes.find({}, {'_id': False}):
                result.append(i)
            return jsonify({'Likes': result})
        except Exception as error:
            print('error', error)
            return jsonify({"message": "something went wrong"})
    elif request.method == 'POST':
        try:
            jsonData = request.get_json()
            Likes.insert(jsonData['data'])
            return jsonify({'status': 200, 'message': 'success'})
        except Exception as error:
            print('error', error)
            return jsonify({"message": "something went wrong"})

@app.route('/Purchase', methods=['GET', 'POST'])
def Purchase():
    Purchases = mongo.db.Purchases
    if request.method == 'GET':
        try:
            result = []
            purchase = Purchases.find_one({"$and": [{'eventId': jsonData['eventId']}, {'userId': jsonData['userId']}]}):
            return jsonify({'Purchase': purchase})
        except Exception as error:
            print('error', error)
            return jsonify({"message": "something went wrong"})

    elif request.method == 'POST':
        try:
            jsonData = request.get_json()
            Purchases.insert(jsonData['data'])
            return jsonify({'status': 200, 'message': 'success'})
        except Exception as error:
            print('error', error)
            return jsonify({"message": "something went wrong"})


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8080)
