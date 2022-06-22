import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import express from 'express';
var router = express.Router();
import request from 'request';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
    console.log("Richa");
    router.get('/', function(req, res, next) {
        request({
          uri: 'http://www.giantbomb.com/api/search',
          qs: {
            api_key: '123456',
            query: 'World of Warcraft: Legion'
          }
        }).pipe(res);
      });
      
};

export default httpTrigger;