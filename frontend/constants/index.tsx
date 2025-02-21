import {
  ProfilePasswordDataItem,
  RegisterFormDataItem,
  LoginFormDataItem,
  ApplicationFormDataItem,
  ProfileFormDataItem,
} from "./types";

// --------------------------- form Data List Start --------------------
export const ApplicationFormData: ApplicationFormDataItem[] = [
  {
    id: 4,
    name: "name",
    type: "text",
    text: "Please enter your Name",
    label: "Please enter your Name",
    required: true,
  },
  {
    id: 43,
    name: "username",
    type: "text",
    text: "Please enter your preferred Name",
    label: "Please enter your preferred Name",
    required: true,
  },
  {
    id: 1,
    name: "email",
    type: "email",
    text: "Please enter your Email",
    label: "Please enter your Email",
    required: true,
  },
  {
    id: 42,
    name: "linkedln",
    type: "text",
    text: "Please enter your Linkedin Profile",
    label: "Please enter your Linkedin Profile",
    required: true,
  },
  {
    id: 44,
    name: "salary",
    type: "text",
    text: "Please enter your Annual Expectation in USD?",
    label: "Please enter your Annual Expectation in USD?",
    required: true,
  },
];

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
export const PasswordFormData: ProfilePasswordDataItem[] = [
  {
    id: 4,
    name: "password",
    type: "password",
    text: "Change your Password",
    label: "my password",
    required: true,
  },
  {
    id: 43,
    name: "confirmpassword",
    type: "password",
    text: "Change your preferred Password",
    label: "Confirm your password",
    required: true,
  },
];



// --------------------------- form Data List End --------------------

// ------------- API REQUEST ROUTE -----------------
export const BASE_URL = ""
  // process.env.NODE_ENV === "development" ? "http://localhost:4000" : "";

export const MESSAGE_URL = "http://localhost:4000/api/v1/message";
export const USERS_URL = "http://localhost:4000/api/v1/users";
export const AUTH_URL = "http://localhost:4001/api/v1/auth";
export const UPLOAD_URL = "http://localhost:4000/api/v1/upload";
export const STORE_URL = "http://localhost:4003/api/v1/store";
export const PRODUCT_URL = "http://localhost:4002/api/v1/product";
export const CATEGORY_URL = "http://localhost:4000/api/v1/category";
export const COLOR_URL = "http://localhost:4000/api/v1/color";
export const SIZE_URL = "http://localhost:4000/api/v1/size";
export const CART_URL = "http://localhost:4000/api/v1/cart";
export const INVENTORY_URL = "http://localhost:4000/api/v1/inventory";
export const WISHLIST_URL = "http://localhost:4000/api/v1/wishlist";
export const PAYMENT_URL = "http://localhost:4000/api/v1/payment";
export const RECOMMENDATION_URL = "http://localhost:4000/api/v1/recommendation";

// ------------- API REQUEST ROUTE END -----------------
