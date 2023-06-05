import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { UserService } from '../service/userService';
import { ErrorResponse } from '../utility/response';
import middy from '@middy/core';
import bodyParser from '@middy/http-json-body-parser';
import { container } from 'tsyringe';

const service = container.resolve(UserService);

export const Signup = middy((event: APIGatewayProxyEventV2) => {
    return service.CreateUser(event);
}).use(bodyParser());

export const Login = async (event: APIGatewayProxyEventV2) => {
    return service.UserLogin(event);
}

export const Verify = async (event: APIGatewayProxyEventV2) => {
    return service.VerifyUser(event);
}

export const Profile = async (event: APIGatewayProxyEventV2) => {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if(httpMethod === 'post') {
        return service.CreateProfile(event);
    } else if(httpMethod === 'get') {
        return service.GetProfile(event);
    } else if(httpMethod === 'put') {
        return service.UpdateProfile(event);
    } else {
        return ErrorResponse(404, 'Requested method is not found');
    }
}

export const Cart = async (event: APIGatewayProxyEventV2) => {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if(httpMethod === 'post') {
        return service.AddToCart(event);
    } else if(httpMethod === 'get') {
        return service.GetCart(event);
    } else if(httpMethod === 'put') {
        return service.UpdateCart(event);
    } else {
        return ErrorResponse(404, 'Requested method is not found');
    }
}

export const Payment = async (event: APIGatewayProxyEventV2) => {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if(httpMethod === 'post') {
        return service.AddPayment(event);
    } else if(httpMethod === 'get') {
        return service.GetPayment(event);
    } else if(httpMethod === 'put') {
        return service.UpdatePayment(event);
    } else {
        return ErrorResponse(404, 'Requested method is not found');
    }
}