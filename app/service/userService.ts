import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { SuccessResponse } from '../utility/response';
import { UserRepository } from '../repository/userRepository';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class UserService {

    repository: UserRepository;

    constructor(repository: UserRepository) {
        console.log('UserService');
        this.repository = repository;
    }
    
    async CreateUser(event: APIGatewayProxyEventV2) {
        const body = event.body;
        await this.repository.CreateUserOperation();

        return SuccessResponse({message: 'User created'});
    }

    async UserLogin(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'User logged in'});
    }

    async VerifyUser(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'User verified'});
    }

    // User Profile
    async CreateProfile(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Profile created'});
    }
    
    async GetProfile(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Profile fetched'});
    }

    async UpdateProfile(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Profile updated'});
    }

    async DeleteProfile(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Profile deleted'});
    }

    // Cart
    async AddToCart(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Item added to cart'});
    }

    async GetCart(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Cart fetched'});
    }

    async UpdateCart(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Cart updated'});
    }

    // Payment 
    async AddPayment(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Payment added'});
    }

    async GetPayment(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Payment fetched'});
    }

    async UpdatePayment(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Payment updated'});
    }
}