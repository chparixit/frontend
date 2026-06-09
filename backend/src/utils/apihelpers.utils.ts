export class ApiResponseHelper {
  static success(res: any, data: any, message = "Success") {
    return res.status(200).json({
      success: true,
      message,
      data,
    });
  }

  static error(res: any, message = "Error", status = 500) {
    return res.status(status).json({
      success: false,
      message,
    });
  }
}