import express from 'express';
import morgan from 'morgan';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import methodOverride from 'method-override';
import routes from '../api';

export default async (app) => {
    const __dirname = path.resolve("src");

    app.use(cors());
    app.enable('trust proxy');
    app.use(morgan("dev"));

    // app.set('view engine', 'html');
    // app.set('views', path.join(__dirname, '/views'));
    app.use('/static', express.static(path.join(__dirname, '/public')));

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use(methodOverride('_method'));

    app.use('/', routes());

    app.use(function (req, res, next) {
        next(createError(404));
    });

    app.use(function (err, req, res, next) {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        res.status(err.status || 500);
        res.render('error');
    });
    
    // app.use((req, res) => {
    //     const err = new Error('Not Found');
    //     err['status'] = 404;
    //     // next(err);

    //     res.status(404).render('error');
    // });

    app.use((err, req, res) => {
        console.error(err.stack);
        res.status(500).render('error');
    });
};