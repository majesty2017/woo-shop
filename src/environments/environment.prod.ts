const url1 = 'https://urhitechweb.xyz/wp-json/wc/v3';
const authUrl1 = 'https://urhitechweb.xyz/wp-json/jwt-auth/v1/token';
const tokenVerifyUrl1 = 'https://urhitechweb.xyz/wp-json/jwt-auth/v1/token/validate';


export const environment = {
  production: true,
  backend_api_url: url1,
  auth_url: authUrl1,
  token_verify_url: tokenVerifyUrl1,
  readOnlyKeys: {
    consumer_key: 'ck_86e3dce6a84ac70eab0555adbbe8b4f3b731aa8e',
    consumer_secret: 'cs_859336de0a94328954b7edde3829206fe84ea826',
  },
  writableKeys: {
    consumer_key: 'ck_0329967546260011e37b02a78f79c903d5481c48',
    consumer_secret: 'cs_7e6b5042f423d919dcea05939f408a0080226621',
  }
};
