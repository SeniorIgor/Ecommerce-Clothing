export interface AuthField {
  id: string;
  name: string;
  type: string;
  required: boolean;
  label: string;
}

export interface FieldsForSignInRequest {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  displayName: string;
  email: string;
  password: string;
}

export interface SignUpFields extends SignUpCredentials {
  confirmPassword: string;
}
