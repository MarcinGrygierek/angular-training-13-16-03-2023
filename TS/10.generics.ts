interface ErrorResponse {
    success: false;
    error: string;
}

interface SuccessResponse<T> {
    success: true;
    payload: T;
}

type ApiResponse<T = {}> = ErrorResponse | SuccessResponse<T>;

const successResponse: ApiResponse<string> = {
    success: true,
    payload: 'Sukces!'
}

const errorResponse: ApiResponse = {
    success: false,
    error: 'Błąd!'
}

interface User {
    name: string;
    surname: string;
}

const userResponse: ApiResponse<User> = {
    success: true,
    payload: {
        name: 'Marcin',
        surname: 'Grygierek'
    }
}

console.log(userResponse.payload.name);