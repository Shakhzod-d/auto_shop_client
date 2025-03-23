export type AuthFormType = { email: string; password: string };
export type ForgetPassFormType = { email: string };
export interface RegisterRes {
  status_code: number;
  data: RegisterData;
  message: any;
}

export interface RegisterData {
  id: string;
  email: string;
}

export type OTPData = {
  user_id: string;
  otp: string;
};

export interface OtpResType {
  data: OTPRes;
}

export interface OTPRes {
  status_code: number;
  data: OTPResData;
  message: string;
}

export interface OTPResData {
  id: string;
  is_active: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  role: string;
  password: string;
  hashed_token: string;
  email: string;
  otp: string;
  otp_expiration: any;
  otp_request_count: number;
  otp_blocked_until: any;
  otp_blocked_duration: number;
  access_token: string;
  refresh_token: string;
}
export interface ResetPassForm {
  new_password: string;
  confirm_password: string;
}

export type FormVariant = "register" | "login" | "forgetPassword";
