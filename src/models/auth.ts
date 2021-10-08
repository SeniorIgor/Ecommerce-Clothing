export interface AuthField {
  id: string;
  name: string;
  type: string;
  required: boolean;
  label: string;
}

export interface FieldsForAuthRequest {
  email: string;
  password: string;
}
