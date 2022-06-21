import { getURL } from "next/dist/shared/lib/utils";

const prod = {
   BASE_URL: 'production url',
   USER_INFO: 'users/me',
   SIGN_IN: 'Users/sign-in'
};

const dev = {
   BASE_URL: 'http://localhost:5000/',
   USER_INFO: 'users/me',
   SIGN_IN: 'Users/sign-in'
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
