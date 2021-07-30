var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");

require("./db")


var indexRouter = require('./routes/index');

const AdminRouter = require("./routes/admin");
const productRouter = require("./routes/products");

const orderRouter = require("./routes/order");

const UserRouter = require("./routes/users");
const HomepageRouter = require("./routes/homepage");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  "Access-Control-Allow-Origin":false
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use("/api/v1/admin", AdminRouter)
app.use("/api/v1/products", productRouter);

app.use("/api/v1/users", UserRouter);
app.use("/api/v1/homepage", HomepageRouter);
app.use("/api/v1/order", orderRouter);

// app.use("/api/v1/home", HomepageRouter)

// Create middle for Admin users.
// app.use("/api/v1/admin/products", ADMIN_MIDDLEWARE, AdminProductRouter)
// app.use("/api/v1/admin/products", AdminProductRouter)
// app.use("/api/v1/admin/orders", AdminOrdersRouter)
// app.use("/api/v1/admin.users", AdminUsersRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
