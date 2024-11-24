//IT IS A CUSTOM ERROR HANDLER 

export const errorHandler = (statusCode, message) => {
    const error = new Error();//java script error consructor
    error.statusCode = statusCode;// this code we are giving manully 
    error.message = message;// same message  we  get from the error
    return error;
  };