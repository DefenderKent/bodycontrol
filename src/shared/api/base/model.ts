export type ApiError = {
  success: false;
  data: null;
  error: {
    code: string;
    message: string;
    debug: string;
  };
};
