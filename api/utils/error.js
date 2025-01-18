// Middle wear function to handle the error 2/2
export const errorHandler=(statusCode,message)=>{
    const error =new Error()
    error.statusCode=statusCode
    error.message=message
    return error;
}