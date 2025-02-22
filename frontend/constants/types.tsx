export type ProfileFormDataItem = {
  id: number;
  name: keyof FormValueType; // It ensures the name corresponds to keys in FormValueType
  text: string;
  label: string;
  type: string;
  required: boolean;
};
export type FormValueType = {
  name: string;
  username: string;
  email: string;
  linkedln: string;
  country: string;
  password: string;
  salary?: string;
};

// -------- Login form Data Type Start ----------------------
export type LoginValueType = {
  email: string;
  password: string;
};
export type LoginFormDataItem = {
  id: number;
  name: keyof LoginValueType; // It ensures the name corresponds to keys in FormValueType
  text: string;
  label: string;
  type: string;
  required: boolean;
};
// -------- Login form Data Type End ----------------------

// -------- Register form Data Type Start ----------------------
export type RegisterValueType = {
  email: string;
  password: string;
  name: string;
  password_confirmation:string;
};
export type RegisterFormDataItem = {
  id: number;
  name: keyof RegisterValueType; // It ensures the name corresponds to keys in FormValueType
  text: string;
  label: string;
  type: string;
  required: boolean;
};

//// Task Form Data

export type TaskFormValueType = {
  title: string;
  description: string;
};
export type TaskFormDataItem = {
  id: number;
  name: keyof TaskFormValueType; // It ensures the name corresponds to keys in FormValueType
  label: string;
  type: string;
  placeholder: string;
};
