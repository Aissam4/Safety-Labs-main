import express, { Express, Request, Response } from 'express';
const app: Express = express();

// .env configuration
import dotenv from 'dotenv';
dotenv.config();

// cors configuration
import cors from 'cors';
const options: cors.CorsOptions = {
	origin: "*",
};
app.use(cors(options));
// to allow Express server to use the cors middleware
app.use(express.json());

//importing routes
import { Buyers } from './routes/buyers/Buyers';
import { admin } from './routes/users/admin'

// passport js 
//import passport from 'passport';
import { create_token, verify_token } from './utils/jwt';

//passport.use(JwtStrategy)

const token = create_token({
	id: 2,
	username: String(process.env.ADMIN_USERNAME),
	password: String(process.env.ADMIN_PASSWORD),
})
// console.log(token)
// console.log(verify_token(token))


// api routes
app.use('/api/', Buyers);
app.use('/api/', admin);

app.get('/', (req: Request, res: Response) => {
	res.json({
		message: 'Welcome to the SafteyLabs API',
	});
});

app.listen(process.env.PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT}`);
});
