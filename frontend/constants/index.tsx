import {
  TaskFormDataItem,
  RegisterFormDataItem,
  LoginFormDataItem,
} from "./types";

export const LoginFormData: LoginFormDataItem[] = [
  {
    id: 1,
    name: "email",
    type: "email",
    text: "Email",
    label: "hello@example.com",
    required: true,
  },
  {
    id: 4,
    name: "password",
    type: "password",
    text: "Password",
    label: "my password",
    required: true,
  },
];
export const RegisterFormData: RegisterFormDataItem[] = [
  {
    id: 23,
    name: "name",
    type: "text",
    text: "name",
    label: "John Doe",
    required: true,
  },
  {
    id: 1,
    name: "email",
    type: "email",
    text: "Email",
    label: "hello@example.com",
    required: true,
  },
  {
    id: 32,
    name: "password",
    type: "password",
    text: "Password",
    label: "Strong Password",
    required: true,
  },

  {
    id: 33,
    name: "password_confirmation",
    type: "password",
    text: "Password Confirmation",
    label: "Confirm your Password",
    required: true,
  },
];

export const TaskFormData: TaskFormDataItem[] = [
  {
    id: 34,
    type: "text",
    placeholder: "Task title",
    name: "title",
    label: "Task Title",
  },
  {
    id: 14,
    type: "textarea",
    placeholder: "Task description",
    name: "description",
    label: "Task Description",
  },
];

// --------------------------- form Data List End --------------------

// ------------- API REQUEST ROUTE -----------------
export const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000" : "";

export const TASK_URL = "/api/tasks";
export const AUTH_URL = "/api/auth";
export const USERS_URL = "/api/users";

// ------------- API REQUEST ROUTE END -----------------
