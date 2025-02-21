import {
  TaskFormDataItem,
  RegisterFormDataItem,
  LoginFormDataItem,
  ProfileFormDataItem,
} from "./types";

export const ProfileFormData: ProfileFormDataItem[] = [
  {
    id: 4,
    name: "name",
    type: "text",
    text: "Change your Name",
    label: "Alfred Dow",
    required: true,
  },
  {
    id: 43,
    name: "username",
    type: "text",
    text: "Change your preferred Name",
    label: "JohnDoe123",
    required: true,
  },
  {
    id: 1,
    name: "email",
    type: "email",
    text: "Change your Email",
    label: "hello@example.com",
    required: true,
  },
  {
    id: 42,
    name: "linkedln",
    type: "text",
    text: "Change your Linkedin Profile",
    label: "linkedin.com/in/johndoe3",
    required: true,
  },
];
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
    name: "fullname",
    type: "text",
    text: "fullname",
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
  {
    id: 24,
    type: "text",
    placeholder: "Task status",
    name: "status",
    label: "Task Status",
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
