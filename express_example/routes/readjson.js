app.route('/', function (req, res) {
  // Your code to get the response, and for example's sake, I'll say it's assigned to 'view_data'.
  if (typeof view_data === 'string') {
    // If you know for sure if your data is going to be an object or a string, 
    // you can leave the if statement out, and instead just parse it (or not if 
    // it's already an object.
    view_data = JSON.parse(view_data);
  }
  res.render('layout', view_data);
});