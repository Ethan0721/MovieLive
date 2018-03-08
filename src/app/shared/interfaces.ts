export interface IUserLogin {
    // grant_type: string;
    username: string;
    password: string;
}

export interface ITokenResponse {
    userName: string;
    // role: Array<string>;
    expires_in: string;
    token_type : string;
    // lastName: string;
    // firstName: string;
    // isAdmin: boolean;
    access_token : string;
}

export interface ISignUpResponse{
    Message : string;
}