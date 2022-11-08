import { verify_token } from './jwt';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function checkAuth(req: any, res: any, next: any) {
    try {
        const token = req.headers.authorization?.split(' ')[1] || '';
        const decoded = await verify_token(token);

        if (decoded[0]) {
            res.status(401).json({
                message: 'Auth failed'
            })
        }
        else {
            await prisma.user.findUnique({
                where: {
                    id: Number(decoded[1]?.sub)
                }
            }).then((data: any) => {
                if (data) {
                    req.user = data;
                    next();
                } else {
                    res.status(401).json({
                        message: 'Auth failed'
                    })
                }
            }).catch((err: any) => {
                res.status(401).json({
                    message: 'Auth failed',
                    err
                })
            })
        }
    } catch (err) {
        res.status(401).json({
            message: 'Auth failed',
            err
        })
    }
}

export default checkAuth;