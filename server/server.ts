
import * as express from 'express';
import {Application} from "express";
import {getAllCourses, getCourseById} from "./get-courses.route";
import {searchLessons} from "./lessons.route";
import {saveCourse} from './course.route';
import {getAllUsers, getUserById} from './get-users.route';
import {createUser } from './create-user-route'

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').get(getCourseById);

app.route('/api/lessons').get(searchLessons);

app.route('/api/courses/:id').put(saveCourse);


app.route('/api/users').get(getAllUsers);

app.route('/api/user/:id').get(getUserById);

app.route('/api/signup')
    .post(createUser);



const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



