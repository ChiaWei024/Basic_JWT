# Description

This is a practice of basic JWT(JSON Web Token).

Following the tutorial: https://www.youtube.com/watch?v=f2EqECiTBL8

Following previous practice: Basic_Auth - https://github.com/ChiaWei024/Basic_Auth.git

# Content

1. Using note to create random crypto (for token secret in env)

   - require('crypto').randomBytes(64).toString('hex')

1. Access Token and Refresh Token

   - From: https://www.izertis.com/en/-/refresh-token-with-jwt-authentication-in-node-js
   - Access Token: It contains all the information the server needs to know if the user / device can access the resource you are requesting or not. They are usually expired tokens with a short validity period.
   - Refresh Token: The refresh token is used to generate a new access token. Typically, if the access token has an expiration date, once it expires, the user would have to authenticate again to obtain an access token. With refresh token, this step can be skipped and with a request to the API get a new access token that allows the user to continue accessing the application resources.

1. XSS/ XSRF

   - XSS: Cross-site Scripting
     - https://zh.wikipedia.org/zh-tw/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC
   - XSRF: Cross-site Request Forgery
     - https://zh.wikipedia.org/zh-tw/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0

1. array.filter()

   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

1. req.header["authorization"] what is that?

1. Single route protecting

   - router
     .route("/")
     .get(verifyJWT, empolyeesControllers.getAllEmployees)
     .post(empolyeesControllers.createNewEmplyees)
     .put(empolyeesControllers.updateNewEmployees)
     .delete(empolyeesControllers.deleteEmployees);

1. All route protection
   - All the routes below app.use(verifyJWY) are protected (cause script reads from top to down (waterfall))
