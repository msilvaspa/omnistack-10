const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect(
	'mongodb+srv://omnistack:omnistack@cluster0-t9ax3.gcp.mongodb.net/test?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	}
);

app.use(express.json());
app.use(routes);

const PORT = 3000;
app.listen(3000, console.log('Server running on port: ' + PORT));
