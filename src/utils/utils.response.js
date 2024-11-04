// Function to format success response
const successResponse = (data = null, message = "Success") => {
    return {
      success: true,
      message: message,
      data: data,
    };
  };
  
  // Function to format error response
  const errorResponse = (message = "Internal Server Error", statusCode = 500, data = {}) => {
    return {
      success: false,
      message: message,
      status_code: statusCode,
      data: data,
    };
  };
  
  module.exports = {
    successResponse,
    errorResponse,
  };  