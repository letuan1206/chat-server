angular.module('MyApp').run(['$templateCache', function($templateCache) {$templateCache.put('partials/404.html','<div class="container text-center home">\r\n  <h1>404</h1>\r\n  <p>Page Not Found</p>\r\n</div>\r\n');
$templateCache.put('partials/contact.html','<div class="container">\r\n  <h3>Contact Form</h3>\r\n  <div ng-if="messages.error" role="alert" class="text-danger">\r\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n  </div>\r\n  <div ng-if="messages.success" role="alert" class="text-success">\r\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\r\n  </div>\r\n  <form ng-submit="sendContactForm()">\r\n    <label for="name">Name</label>\r\n    <input type="text" name="name" id="name" ng-model="contact.name" autofocus>\r\n    <label for="email">Email</label>\r\n    <input type="email" name="email" id="email" ng-model="contact.email">\r\n    <label for="message">Body</label>\r\n    <textarea name="message" id="message" rows="7" ng-model="contact.message"></textarea>\r\n    <br>\r\n    <button type="submit">Send</button>\r\n  </form>\r\n</div>\r\n');
$templateCache.put('partials/footer.html','<div ng-controller="FooterCtrl" class="container">\r\n  <div ng-if="!isHide">\r\n    <!-- <footer>\r\n      <p>\xA9 2017 Vitamin hair, Inc. All Rights Reserved.</p>\r\n    </footer> -->\r\n  </div>\r\n</div>\r\n');
$templateCache.put('partials/forgot.html','<main class="main-content">\r\n  <div class="container">\r\n    <!-- <div ng-if="messages.error" role="alert" class="text-danger">\r\n      <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n    </div> -->\r\n    <!-- <div ng-if="messages.success" role="alert" class="text-success">\r\n      <div ng-repeat="success in messages.success">{{success.msg}}</div>\r\n    </div> -->\r\n    <div class="row justify-content-center">\r\n      <div class="col-4 width395 p-0">\r\n        <div ng-if="messages.error" role="alert" class="text-danger">\r\n          <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n        </div>\r\n        <div ng-if="messages.success">\r\n          <h3 class="h2 text-center fwb mb-4">Ki\u1EC3m tra Email</h3>\r\n          <p class=\'p mb-4\'>B\u1EA1n s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c email h\u01B0\u1EDBng d\u1EABn c\xE1ch \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u ch\u1EC9 v\u1EDBi m\u1ED9t v\xE0i b\u01B0\u1EDBc \u0111\u01A1n gi\u1EA3n.\r\n            <br>\r\n            <br>N\u1EBFu b\u1EA1n kh\xF4ng th\u1EA5y email, h\xE3y th\u1EED t\xECm \u1EDF th\u01B0 m\u1EE5c spam, social, th\u01B0 r\xE1c ho\u1EB7c c\xE1c th\u01B0 m\u1EE5c kh\xE1c.\r\n          </p>\r\n          <div>\r\n            <a href="/login">&lt; Quay l\u1EA1i trang \u0111\u0103ng nh\u1EADp</a>\r\n          </div>\r\n        </div>\r\n        <div ng-show="!messages.success">\r\n          <form ng-submit="forgotPassword()">\r\n            <h3 class="h2 text-center fwb mb-4">Qu\xEAn m\u1EADt kh\u1EA9u</h3>\r\n            <p class=\'p\'>Nh\u1EADp \u0111\u1ECBa ch\u1EC9 email c\u1EE7a b\u1EA1n v\xE0 ch\xFAng t\xF4i s\u1EBD g\u1EEDi h\u01B0\u1EDBng d\u1EABn \u0111\u1EC3 \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u.</p>\r\n            <div class="form-group">\r\n              <input type="email" name="email" id="email" ng-model="user.email" autofocus placeholder="Email" class="form-control">\r\n            </div>\r\n            <div class="form-group">\r\n              <button type="submit" class="form-btn btn btn-primary btn-lg btn-block">Ok</button>\r\n            </div>\r\n          </form>\r\n          <div>\r\n            <a href="/login">&lt; Quay l\u1EA1i trang \u0111\u0103ng nh\u1EADp</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n\r\n<!-- <div class="container">\r\n\r\n  <form ng-submit="forgotPassword()">\r\n    <h4>Forgot Password</h4>\r\n    <p>Enter your email address below and we\'ll send you password reset instructions.</p>\r\n    <label for="email">Email</label>\r\n    <input type="email" name="email" id="email" placeholder="Email" ng-model="user.email" autofocus>\r\n    <br>\r\n    <button type="submit">Reset Password</button>\r\n  </form>\r\n</div> -->\r\n');
$templateCache.put('partials/header.html','<div ng-controller="HeaderCtrl">\r\n  <!-- Default -->\r\n  <div class="container" ng-if="!isHide">\r\n    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">\r\n      <a class="navbar-brand" href="/">Vitamin hair</a>\r\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"\r\n        aria-expanded="false" aria-label="Toggle navigation">\r\n        <span class="navbar-toggler-icon"></span>\r\n      </button>\r\n      <div class="collapse navbar-collapse" id="navbarCollapse">\r\n        <ul class="navbar-nav mr-auto">\r\n          <li class="nav-item active">\r\n            <a class="nav-link" href="/">Home\r\n              <span class="sr-only">(current)</span>\r\n            </a>\r\n          </li>\r\n          <li class="nav-item">\r\n            <a class="nav-link" href="/order">Order</a>\r\n          </li>\r\n          <li class="nav-item" ng-if="!isAuthenticated()">\r\n              <a class="nav-link" href="/try-product">Try product</a>\r\n            </li>\r\n          <!-- <li class="nav-item">\r\n            <a class="nav-link" href="/contact">Contact</a>\r\n          </li> -->\r\n        </ul>\r\n        <ul ng-if="isAuthenticated()" class="navbar-nav">\r\n          <li class="nav-item">\r\n            <a href="/account" ng-class="{ active: isActive(\'/account\')}" class="nav-link">My Account</a>\r\n          </li>\r\n          <li class="nav-item">\r\n            <a href="#" ng-click="logout()" class="nav-link">Logout</a>\r\n          </li>\r\n        </ul>\r\n        <ul ng-if="!isAuthenticated()" class="navbar-nav">\r\n          <li class="nav-item">\r\n            <a href="/login" ng-class="{ active: isActive(\'/login\')}" class="nav-link">Log in</a>\r\n          </li>\r\n          <li class="nav-item">\r\n            <a href="/signup" ng-class="{ active: isActive(\'/signup\')}" class="nav-link">Sign up</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n    <!-- <ul class="list-inline">\r\n      <li>\r\n        <a href="/">Home</a>\r\n      </li>\r\n      <li>\r\n        <a href="/order">Order</a>\r\n      </li>\r\n      <li>\r\n        <a href="/contact">Contact</a>\r\n      </li>\r\n    </ul>\r\n    <ul ng-if="isAuthenticated()" class="list-inline">\r\n      <li>\r\n        <a href="/account" ng-class="{ active: isActive(\'/account\')}">My Account</a>\r\n      </li>\r\n      <li>\r\n        <a href="#" ng-click="logout()">Logout</a>\r\n      </li>\r\n    </ul>\r\n    <ul ng-if="!isAuthenticated()" class="list-inline">\r\n      <li>\r\n        <a href="/login" ng-class="{ active: isActive(\'/login\')}">Log in</a>\r\n      </li>\r\n      <li>\r\n        <a href="/signup" ng-class="{ active: isActive(\'/signup\')}" class="text-danger">Sign up</a>\r\n      </li>\r\n    </ul> -->\r\n  </div>\r\n  <!-- Use for Login, Signup, Forgot, Reset pages -->\r\n  <div ng-if="isHide && !isOrderPage">\r\n    <nav class="header navbar navbar-light bg-light">\r\n      <a class="navbar-brand d-inline-block" href="/">\r\n        <img src="images/Logo_vitaminshair.svg" alt="">\r\n      </a>\r\n      <a href="/signup" class="signin">\u0110\u0103ng k\xFD t\xE0i kho\u1EA3n</a>\r\n    </nav>\r\n  </div>\r\n  <!-- Use for Order page and Try Product page -->\r\n  <div ng-if="isOrderPage">\r\n    <nav class="header navbar d-block navbar-light bg-light text-center">\r\n      <a class="navbar-brand d-inline-block" href="/">\r\n        <img src="images/Logo_vitaminshair.svg" alt="" />\r\n      </a>\r\n    </nav>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('partials/home.html','<div class="container home">\r\n  <div class="row">\r\n    <div class="col-sm">\r\n      <h3>Heading</h3>\r\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\r\n        condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\r\n        Donec sed odio dui.</p>\r\n      <a href="#" role="button">View details</a>\r\n    </div>\r\n    <div class="col-sm">\r\n      <h3>Heading</h3>\r\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\r\n        condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\r\n        Donec sed odio dui.</p>\r\n      <a href="#" role="button">View details</a>\r\n    </div>\r\n    <div class="col-sm">\r\n      <h3>Heading</h3>\r\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\r\n        condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\r\n        Donec sed odio dui.</p>\r\n      <a href="#" role="button">View details</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('partials/login.html','<main class="main-content">\r\n  <div class="container">\r\n    <h3 class="h2 text-center fwb mb-2">\u0110\u0103ng nh\u1EADp</h3>\r\n    <div class="row justify-content-center">\r\n      <div class="col-4 width395 p-0">\r\n        <div ng-if="messages.error" role="alert" class="text-danger mb-3">\r\n          <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n        </div>\r\n        <form ng-submit="login()">\r\n          <div class="form-group">\r\n            <input type="text" name="email" id="email" ng-model="user.username" autofocus placeholder="Email ho\u1EB7c s\u1ED1 \u0111i\u1EC7n tho\u1EA1i" class="form-control">\r\n          </div>\r\n          <div class="form-group">\r\n            <input type="password" name="password" id="password" ng-model="user.password" placeholder="M\u1EADt kh\u1EA9u" class="form-control">\r\n          </div>\r\n          <div class="form-group">\r\n            <button type="submit" class="form-btn btn btn-primary btn-lg btn-block">\u0110\u0103ng nh\u1EADp</button>\r\n          </div>\r\n          <div class="text-center">\r\n            <a href="/forgot">Qu\xEAn m\u1EADt kh\u1EA9u</a>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n');
$templateCache.put('partials/maps.html','<div class="container home">\r\n  <ng-map id="map" center="[21.0278, 105.8342]" zoom="13">\r\n    <marker centered="true" position="[21.0278, 105.8342]" ></marker>\r\n  </ng-map>\r\n</div>\r\n');
$templateCache.put('partials/profile.html','<div class="container home">\r\n  <div ng-if="messages.error" role="alert" class="text-danger">\r\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n  </div>\r\n  <div ng-if="messages.success" role="alert" class="text-success">\r\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\r\n  </div>\r\n\r\n  <h4>Profile Information</h4>\r\n\r\n  <form ng-submit="updateProfile()">\r\n    <label for="email">Email</label>\r\n    <input type="email" name="email" id="email" ng-model="profile.email">\r\n    <label for="name">Name</label>\r\n    <input type="text" name="name" id="name" ng-model="profile.name">\r\n    <label>Gender</label>\r\n    <input type="radio" name="gender" id="male" value="male" ng-checked="profile.gender === \'male\'">\r\n    <label for="male">Male</label>\r\n    <input type="radio" name="gender" id="female" value="female" ng-checked="profile.gender === \'female\'">\r\n    <label for="female">Female</label>\r\n    <label for="location">Location</label>\r\n    <input type="text" name="location" id="location" ng-model="profile.location">\r\n    <label for="website">Website</label>\r\n    <input type="text" name="website" id="website" ng-model="profile.website">\r\n    <!-- <label>Gravatar</label>\r\n    <img ng-src="{{profile.gravatar}}" class="gravatar" width="100" height="100"> -->\r\n    <br>\r\n    <button type="submit">Update Profile</button>\r\n  </form>\r\n\r\n  <h4>Change Password</h4>\r\n\r\n  <form ng-submit="changePassword()">\r\n    <label for="password">New Password</label>\r\n    <input type="password" name="password" id="password" ng-model="profile.password">\r\n    <label for="confirm">Confirm Password</label>\r\n    <input type="password" name="confirm" id="confirm" ng-model="profile.confirm">\r\n    <br>\r\n    <button type="submit">Change Password</button>\r\n  </form>\r\n\r\n  <!-- <h4>Linked Accounts</h4>\r\n\r\n  <p>\r\n    <a href="#" ng-click="unlink(\'facebook\')" ng-if="currentUser.facebook" class="text-danger">Unlink your Facebook account</a>\r\n    <a href="#" ng-click="link(\'facebook\')" ng-if="!currentUser.facebook">Link your Facebook account</a>\r\n  </p> -->\r\n  <!-- <p>\r\n    <a href="#" ng-click="unlink(\'google\')" ng-if="currentUser.google" class="text-danger">Unlink your Google account</a>\r\n    <a href="#" ng-click="link(\'google\')" ng-if="!currentUser.google">Link your Google account</a>\r\n  </p> -->\r\n\r\n  <!-- <h4>Delete Account</h4>\r\n\r\n  <form ng-submit="deleteAccount()">\r\n    <p>You can delete your account, but keep in mind this action is irreversible.</p>\r\n    <button type="submit">Delete my account</button>\r\n  </form> -->\r\n</div>\r\n');
$templateCache.put('partials/reset.html','<main class="main-content">\r\n  <div class="container">\r\n    <div class="row justify-content-center">\r\n      <div class="col-4 width395 p-0">\r\n        <div ng-if="messages.error" role="alert" class="text-danger mb-3">\r\n          <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n        </div>\r\n        <div ng-if="messages.success" role="alert" class="text-success mb-3">\r\n          <div ng-repeat="success in messages.success">{{success.msg}}</div>\r\n        </div>\r\n        <h3 class="h2 text-center fwb mb-4">\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u</h3>\r\n        <form ng-submit="resetPassword()">\r\n          <div class="form-group">\r\n            <input type="password" name="password" id="password" ng-model="user.password" autofocus placeholder="M\u1EADt kh\u1EA9u m\u1EDBi" class="form-control">\r\n          </div>\r\n          <div class="form-group">\r\n            <input type="password" name="confirm" id="confirm" ng-model="user.confirm" placeholder="X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u m\u1EDBi" class="form-control">\r\n          </div>\r\n          <div class="form-group">\r\n            <button type="submit" class="form-btn btn btn-primary btn-lg btn-block">\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u</button>\r\n          </div>\r\n          <div class=\'text-center\'>\r\n            <a href="/signup">\u0110\u0103ng k\xED t\xE0i kho\u1EA3n m\u1EDBi</a>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n<!-- <div class="container">\r\n  <div ng-if="messages.error" role="alert" class="text-danger">\r\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n  </div>\r\n  <div ng-if="messages.success" role="alert" class="text-success">\r\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\r\n  </div>\r\n\r\n  <h4>Reset Password</h4>\r\n\r\n  <form ng-submit="resetPassword()">\r\n    <label for="password">New Password</label>\r\n    <input type="password" name="password" id="password" placeholder="New password" ng-model="user.password" autofocus>\r\n    <label for="confirm">Confirm Password</label>\r\n    <input type="password" name="confirm" id="confirm" placeholder="Confirm password" ng-model="user.confirm">\r\n    <br>\r\n    <button type="submit">Change Password</button>\r\n  </form>\r\n</div> -->\r\n');
$templateCache.put('partials/signup.html','<main class="main-content">\r\n  <div class="container">\r\n    <h3 class="h2 text-center fwb mb-2">\u0110\u0103ng k\xFD t\xE0i kho\u1EA3n</h3>\r\n    <div class="row justify-content-center">\r\n      <div class="col-4 width395 p-0">\r\n        <div ng-if="messages.error" role="alert" class="text-danger mb-3">\r\n          <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n        </div>\r\n        <form ng-submit="signup()">\r\n          <div class="form-group">\r\n            <input type="text" name="name" id="name" placeholder="H\u1ECD t\xEAn" ng-model="user.name" class="form-control">\r\n          </div>\r\n          <div class="form-group">\r\n            <input type="text" name="email" id="email" ng-model="user.email" autofocus placeholder="Email ho\u1EB7c s\u1ED1 \u0111i\u1EC7n tho\u1EA1i" class="form-control">\r\n          </div>\r\n          <div class="form-group">\r\n            <input type="password" name="password" id="password" ng-model="user.password" placeholder="M\u1EADt kh\u1EA9u" class="form-control">\r\n          </div>\r\n          <div class="form-group">\r\n            <input type="text" name="phone_number" id="phone_number" placeholder="S\u1ED1 \u0111i\u1EC7n tho\u1EA1i" ng-model="user.phone_number" class="form-control">\r\n          </div>\r\n          <div class="form-group">\r\n            <button type="submit" class="form-btn btn btn-primary btn-lg btn-block">\u0110\u0103ng k\xFD</button>\r\n          </div>\r\n          <div class="text-center">\r\n            Already have an account?\r\n            <a href="/login">\u0110\u0103ng nh\u1EADp</a>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div class="container">\r\n  <div ng-if="messages.error" role="alert" class="btext-danger">\r\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n  </div>\r\n\r\n  <h4>Create an account</h4>\r\n\r\n  <form ng-submit="signup()">\r\n    <label for="name">Name</label>\r\n    <input type="text" name="name" id="name" placeholder="Name" ng-model="user.name">\r\n    <label for="email">Email</label>\r\n    <input type="email" name="email" id="email" placeholder="Email" ng-model="user.email" autofocus>\r\n    <label for="password">Password</label>\r\n    <input type="password" name="password" id="password" placeholder="Password" ng-model="user.password">\r\n    <label for="name">Phone number</label>\r\n    <input type="text" name="phone_number" id="phone_number" placeholder="Phone" ng-model="user.phone_number">\r\n    <p>By signing up, you agree to the <a href="#">Terms of Service</a>.</p>\r\n    <button type="submit">Create an account</button>\r\n  </form>\r\n\r\n  <hr>\r\n\r\n  <button ng-click="authenticate(\'facebook\')">Sign in with Facebook</button>\r\n  <br>\r\n  <button ng-click="authenticate(\'google\')">Sign in with Google</button>\r\n  <br>\r\n\r\n  <p>Already have an account? <a href="/login">Log in</a></p>\r\n</div> -->\r\n');
$templateCache.put('partials/orders/order.html','<main class="main-content">\n  <div class="container" ng-show="!messages.success">\n    <form name="orderForm" ng-submit="orderForm.$valid && createOrder()" novalidate>\n      <h3 class="h2 text-center fwb mb-5">Ch\u1EC9 2 b\u01B0\u1EDBc l\xE0 xong. Ch\xFAng t\xF4i qu\xFD tr\u1ECDng th\u1EDDi gian c\u1EE7a b\u1EA1n.</h3>\n      <div ng-if="messages.error" role="alert" class="text-danger mb-3 text-center">\n          <div ng-repeat="error in messages.error"><h2>{{error.msg}}</h2></div>\n       </div>\n      <div class="row justify-content-center ">\n        <div class="col-5 col-xs-12">\n          <div class="form mb-3">\n            <div ng-if="!user">\n              <div class="h5">1. TH\xD4NG TIN GIAO H\xC0NG</div>\n              <div class="form-check check-style">\n                <div class="check-style-item d-inline-block mr-4">\n                  <label class="form-check-label">\n                    <input type="radio" id="gender" name="gender" ng-model="newUser.gender" value="male" class="form-check-input">\n                    <span class="form-check-style"></span>\n                  </label>\n                  Anh\n                </div>\n                <div class="check-style-item d-inline-block">\n                  <label class="form-check-label">\n                    <input type="radio" id="gender" name="gender" ng-model="newUser.gender" value="female" class="form-check-input">\n                    <span class="form-check-style"></span>\n                  </label>\n                  Ch\u1ECB\n                </div>\n              </div>\n              <div class="form-group">\n                <input type="text" id="name" name="name" ng-model="newUser.name" placeholder="H\u1ECD v\xE0 t\xEAn" class="form-control" required>\n                <span ng-show="orderForm.$submitted && orderForm.name.$invalid" class="error-message">B\u1EA1n ph\u1EA3i nh\u1EADp \u0111\u1EE7 h\u1ECD t\xEAn</span>\n              </div>\n              <div class="form-group">\n                <input type="text" name="phone_number" id="phone_number" ng-model="newUser.phone_number" ng-blur="checkUserIdentity(\'phone\')"\n                ng-minlength="10" ng-maxlength="11" placeholder="S\u1ED1 \u0111i\u1EC7n tho\u1EA1i" class="form-control" required>\n                <div ng-show="orderForm.$submitted || orderForm.phone_number.$touched">\n                  <span ng-show="orderForm.phone_number.$error.required" class="error-message">B\u1EA1n ph\u1EA3i nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i</span>\n                  <span ng-show="((orderForm.phone_number.$error.minlength || orderForm.phone_number.$error.maxlength) && orderForm.phone_number.$dirty)" class="error-message">S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ph\u1EA3i t\u1EEB 10 s\u1ED1</span>\n                  <span ng-show="phoneExisted" class="error-message">S\u1ED1 \u0111i\u1EC7n tho\u1EA1i n\xE0y \u0111\xE3 t\u1ED3n t\u1EA1i</span>\n                </div>\n              </div>\n              <div class="form-group">\n                <input type="email" name="email" id="email" ng-model="newUser.email" placeholder="Email" class="form-control" ng-blur="checkUserIdentity(\'email\')" required>\n                <div ng-show="orderForm.$submitted || orderForm.email.$touched">\n                  <span ng-show="orderForm.email.$error.required" class="error-message">B\u1EA1n ph\u1EA3i nh\u1EADp email.</span>\n                  <span ng-show="orderForm.email.$error.email" class="error-message">Email kh\xF4ng \u0111\xFAng \u0111\u1ECBnh d\u1EA1ng.</span>\n                  <span ng-show="emailExisted" class="error-message">Email n\xE0y \u0111\xE3 t\u1ED3n t\u1EA1i</span>\n                </div>\n              </div>\n              <div class="form-group mb-2">\n                <input type="password" name="password" id="password" ng-model="newUser.password" placeholder="M\u1EADt kh\u1EA9u v\u1EDBi \xEDt nh\u1EA5t 6 k\xFD t\u1EF1" class="form-control" required>\n                <span ng-show="orderForm.password.$touched && orderForm.password.$invalid" class="error-message">B\u1EA1n ph\u1EA3i nh\u1EADp m\u1EADt kh\u1EA9u</span>\n              </div>\n              <p class="p mb-0 fz12">H\xE3y ghi nh\u1EDB m\u1EADt kh\u1EA9u \u0111\u1EC3 thu\u1EADn ti\u1EC7n cho l\u1EA7n \u0111\u0103ng nh\u1EADp sau</p>\n            </div>\n            <div ng-if="user">\n              <div class="h5">1. TH\xD4NG TIN GIAO H\xC0NG</div>\n              <p> H\u1ECD t\xEAn:\n                <span>{{ user.name }}</span>\n              </p>\n              <p> Email:\n                <span>{{ user.email }}</span>\n              </p>\n              <p> Mobile:\n                <span>{{ user.phone_number }}</span>\n              </p>\n            </div>\n          </div>\n          <div class="form mb-3">\n            <div class="h5">2. \u0110\u1ECAA CH\u1EC8 V\xC0 TH\u1EDCI GIAN GIAO H\xC0NG</div>\n            <div class="form-row">\n              <div class="col form-group">\n                <div class="select-style">\n                  <select name="city" id="city" ng-model="selectedCity" ng-options="city.name for city in cities" ng-change="getDistricts(selectedCity)"\n                    class="form-control">\n                  </select>\n                </div>\n              </div>\n              <div class="col form-group">\n                <div class="select-style">\n                  <select name="district" id="district" ng-model="selectedDistrict" ng-options="district.name for district in districts" class="form-control">\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class="form-group">\n              <input type="text" id="orderAddress" name="orderAddress" ng-model="orderAddress" placeholder="S\u1ED1 nh\xE0, t\xEAn \u0111\u01B0\u1EDDng, ph\u01B0\u1EDDng/x\xE3"\n                class="form-control" required>\n              <span ng-show="orderForm.$submitted && orderForm.orderAddress.$invalid" class="error-message">B\u1EA1n ph\u1EA3i nh\u1EADp \u0111\u1ECBa ch\u1EC9 nh\u1EADn h\xE0ng</span>\n            </div>\n            <div class="form-group mb-2">\n              <textarea name="orderNote" id="orderNote" ng-model="orderNote" rows="2" class="form-control"  placeholder="Ghi ch\xFA th\xEAm (Kh\xF4ng b\u1EAFt bu\u1ED9c)"></textarea>\n            </div>\n            <p class="p fz12">Vui l\xF2ng ki\u1EC3m tra k\u1EF9 th\xF4ng tin tr\u01B0\u1EDBc khi \u0111\u1EB7t d\xF9ng th\u1EED.</p>\n          </div>\n        </div>\n        <div class="col-5 col-xs-12">\n          <div class="form form-order mb-3">\n            <div class="h5">GIAO H\xD4M NAY</div>\n            <table class=\'table\'>\n              <thead>\n                <tr>\n                  <th class=\'align-middle border-top-0 border border-right-0 border-left-0\'>\n                    <img class="checkout-img" src="images/checkout-product.jpg" alt="">\n                    <span>S\u1EA3n ph\u1EA9m m\u1EABu 3ml</span>\n                  </th>\n                  <th class=\'align-middle border-top-0 border border-right-0 border-left-0\'>\n                    <span>Mi\u1EC5n ph\xED</span>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td class=\'border-0\'>T\u1EA1m t\xEDnh:</td>\n                  <td class=\'border-0\'>Mi\u1EC5n ph\xED</td>\n                </tr>\n                <tr>\n                  <td class=\'border-0\'>Ph\xED v\u1EADn chuy\u1EC3n:</td>\n                  <td class=\'border-0\'>20.000 \u0111</td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <th class="fz20">Tr\u1EA3 h\xF4m nay:</th>\n                  <th class="fz20">20.000 \u0111</th>\n                </tr>\n              </tfoot>\n            </table>\n            <button type="submit" ng-disabled="inProcessing" class="form-btn btn btn-primary btn-lg btn-block">\u0110\u1EB7t d\xF9ng th\u1EED</button>\n            <p class="p mt-3 mb-3 fz12">Vui l\xF2ng thanh to\xE1n cho nh\xE2n vi\xEAn giao h\xE0ng khi nh\u1EADn </p>\n          </div>\n          <div class="form mb-3">\n            <div class="h5">GIAO V\xC0 THU TI\u1EC0N NG\xC0Y 11/10</div>\n            <table class="table">\n              <thead>\n                <tr>\n                  <th class=\'align-middle border-0 fw-nomal\'>\n                    <img class="checkout-img" src="images/checkout-product.jpg" alt="">\n                    <span>S\u1EA3n ph\u1EA9m ti\xEAu chu\u1EA9n 10ml</span>\n                  </th>\n                  <th class=\'align-middle border-0 fw-nomal\'>\n                    <span>Mi\u1EC5n ph\xED</span>\n                  </th>\n                </tr>\n              </thead>\n            </table>\n            <p class="mb-0 fz12">H\xE3y y\xEAn t\xE2m! Ch\xFAng t\xF4i s\u1EBD li\xEAn h\u1EC7 nh\u1EAFc nh\u1EDF tr\u01B0\u1EDBc khi giao s\u1EA3n ph\u1EA9m ti\xEAu chu\u1EA9n, b\u1EA1n c\xF3 th\u1EC3 quy\u1EBFt \u0111inh kh\xF4ng mua\n              v\u1EDBi b\u1EA5t k\u1EF3 l\xFD do g\xEC.</p>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div ng-show="messages.success" role="alert" class="text-success text-center">\n      <div ng-repeat="success in messages.success">\n        <h1>{{success.msg}}</h1>\n      </div>\n  </div>\n</main>\n<footer class="footer pt-3">\n  <div class="footer-content">\n    <div class="row align-items-center">\n      <p class=\'col\'>\n        <small>\xA9 2017.\n          <b>vitaminshair</b> l\xE0 nh\xE3n hi\u1EC7u \u0111\xE3 \u0111\u01B0\u1EE3c b\u1EA3o h\u1ED9 c\u1EE7a C\xF4ng ty C\u1ED5 Ph\u1EA7n Tinh D\u1EA7u Thi\xEAn Nhi\xEAn H\xE0 N\u1ED9i.\n          <br/>Gi\u1EA5y ch\u1EE9ng nh\u1EADn \u0110\u0103ng k\xFD Kinh doanh s\u1ED1 0107407609 do S\u1EDF K\u1EBF ho\u1EA1ch v\xE0 \u0110\u1EA7u t\u01B0 Th\xE0nh ph\u1ED1 H\xE0 N\u1ED9i c\u1EA5p.\n        </small>\n      </p>\n      <p class=\'col text-right\'>H\u1ED7 tr\u1EE3 kh\xE1ch h\xE0ng:\n        <a class="color-green" href="tel:0868855086">086.88.55.086</a> (\n        <b>8-18h</b> t\u1EEB\n        <b>Th\u1EE9 2-Th\u1EE9 7</b>)</p>\n    </div>\n  </div>\n</footer>\n');
$templateCache.put('partials/orders/tryProduct.html','<main class="main-content">\r\n  <div class="container">\r\n    <div class="row justify-content-center">\r\n      <div class="col-md-6 mb-5">\r\n        <div class="text-center">\r\n          <h3 class="h2 text-center fwb mb-5">Kh\xE1ch h\xE0ng m\u1EDBi</h3>\r\n          <p class=\'p mb-5\'>B\u1EA1n s\u1EBD \u0111\u0103ng k\xFD \u1EDF trang sau</p>\r\n          <div>\r\n            <a href="/order">Ti\u1EBFn h\xE0nh \u0111\u1EB7t h\xE0ng ></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-md-6 has-border">\r\n        <h3 class="h2 text-center fwb mb-2">\u0110\u0103ng nh\u1EADp</h3>\r\n        <div class="row justify-content-center">\r\n          <div class="col-4 width395">\r\n            <div ng-if="messages.error" role="alert" class="text-danger mb-3">\r\n              <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n            </div>\r\n            <form ng-submit="login()">\r\n              <div class="form-group">\r\n                <input type="text" name="email" id="email" ng-model="user.email" autofocus placeholder="Email ho\u1EB7c s\u1ED1 \u0111i\u1EC7n tho\u1EA1i" class="form-control">\r\n              </div>\r\n              <div class="form-group">\r\n                <input type="password" name="password" id="password" ng-model="user.password" placeholder="M\u1EADt kh\u1EA9u" class="form-control">\r\n              </div>\r\n              <div class="form-group">\r\n                <button type="submit" class="form-btn btn btn-primary btn-lg btn-block">\u0110\u0103ng nh\u1EADp</button>\r\n              </div>\r\n              <div class="text-center">\r\n                <a href="/forgot">Qu\xEAn m\u1EADt kh\u1EA9u</a>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n');}]);