import { Router, Request, Response } from 'express';
export const Buyers = Router();
import { buyers_data } from './Buyers.type';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import checkAuth from '../../utils/auth';

Buyers.post('/Buyers/add', (req: Request, res: Response) => {
	try {
		let data: buyers_data = req.body;
		if (data.Twitterusername && data.DiscordUsername && data.DiscordInvite && data.DiscordBot && data.Reference) {
			// add user to database
			prisma.buyer
				.create({
					data: {
						Twitterusername: data.Twitterusername,
						DiscordUsername: data.DiscordUsername,
						DiscordInvite: data.DiscordInvite,
						DiscordBot: data.DiscordBot,
						Reference: data.Reference,
					},
				})
				.then((result: any) => {
					res.status(200).json({
						message: 'User added successfully',
						data: result,
					});
				})
				.catch((err: any) => {
					res.status(500).json({
						message: 'Error adding user',
						error: err.code,
					});
				});
		} else {
			res.status(400).json({
				message: 'Invalid data',
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

Buyers.get('/Buyers', checkAuth, (req: Request, res: Response) => {
	try {
        //const size: number = +(req.query.size as string) || 5;
        //const page: number = +(req.query.page as string) || 0;

		prisma.buyer
			.findMany({
				//take: size,
                //skip: page * size,
				orderBy: {
					id: 'desc',
				},
			})
			.then((result) => {
				res.status(200).json({
					data: result,
				});
			})
			.catch((err) => {
				res.status(500).json({
					error: err.code,
				});
			});
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

Buyers.get('/Buyers/:id', checkAuth, (req: Request, res: Response) => {
    try {
        const id: number = +(req.params.id);
        prisma.buyer
            .findUnique({
                where: {
                    id: id,
                },
            })
            .then((result) => {
                res.status(200).json({
                    data: result,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    error: err.code,
                });
            });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

Buyers.put('/Buyers/:id', checkAuth, (req: Request, res: Response) => {
    try {
        const id: number = +(req.params.id);
        let data: buyers_data = req.body;
        prisma.buyer
            .update({
                where: {
                    id: id,
                },
                data: {
                    Twitterusername: data.Twitterusername,
                    DiscordUsername: data.DiscordUsername,
                    DiscordInvite: data.DiscordInvite,
                    DiscordBot: data.DiscordBot,
                    Reference: data.Reference,
                },
            })
            .then((result) => {
                res.status(200).json({
                    message: 'User updated successfully',
                    data: result,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    message: 'Error updating user',
                    error: err.code,
                });
            });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

Buyers.delete('/Buyers/:id', checkAuth, (req: Request, res: Response) => {
    try {
        const id: number = +(req.params.id);
        prisma.buyer
            .delete({
                where: {
                    id: id,
                },
            })
            .then((result) => {
                res.status(200).json({
                    message: 'User deleted successfully',
                    data: result,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    message: 'Error deleting user',
                    error: err.code,
                });
            });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});