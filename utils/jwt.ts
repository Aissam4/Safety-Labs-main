import fs from 'fs';
const KEY = fs.readFileSync('./utils/jwtRS256.key', 'utf8');

import jwt from 'jsonwebtoken';
interface user {
	id: number
	username: String;
	password: String;
}

function create_token({ id }: user) {
	let token = jwt.sign({sub: id, iat: Date.now()}, KEY, {algorithm: 'RS256'});
    return token;
}

function verify_token(token: string) {
	try {
		const verify = jwt.verify(token, KEY, { algorithms: ['RS256'] });
		return [null, verify];
		
	} catch (err) {
		return [(String(err)), null];
	}
}

export { create_token, verify_token };
