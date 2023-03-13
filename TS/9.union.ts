interface ErrorResponse {
    success: false;
    error: string;
}

interface SuccessResponse {
    success: true;
    payload: string;
}

type ApiResponse = ErrorResponse | SuccessResponse;

const successResponse: ApiResponse = {
    success: true,
    payload: 'Sukces!'
}

const errorResponse: ApiResponse = {
    success: false,
    error: 'Błąd!'
}
