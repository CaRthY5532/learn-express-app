//var router = express.Router();

/*AWS Dynamo specific Config -- begins */
var AWS = require("aws-sdk");
AWS.config.update({
    region: "us-east-2",
    endpoint: "http://dynamodb.us-east-2.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

/*AWS Dynamo specific Config -- begins */

exports.getUserList = function(req, res) {
  var params = {
    TableName: 'userdata',
    IndexName: 'username',
  }
  Select: 'ALL_ATTRIBUTES'
};
  res.send("List of users are: UNIMPLEMENTED");
};

exports.addUser = function (req, res) {
  var params = {
    TableName: "userdata",
    Item: {
      "username": req.body.username,
      "movies": req.body.movies
    }
  }
  docClient.put(params, function (err, data) {
    if (err) {
      console.error(JSON.stringify(err));
      throw new Error('User cannot be added');
    }else {
      console.log(data);
    }
  });
  res.send(req.body.username + ' added successfully: UNIMPLMENTED');
}
