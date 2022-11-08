import { Router, Request, Response } from 'express'
export const admin = Router()

// prisma
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// bcrypt
import { hash_password, compare_password } from '../../utils/bcrypt'
import checkAuth from '../../utils/auth'
import { create_token, verify_token } from '../../utils/jwt'

// login
admin.post('/admin/login', async (req: Request, res: Response) => {
    try {
        // get data from request
        const { username, password } = req.body;
        // check if data is valid
        if (username && password) {
            // check if user exists
            await prisma.user.findUnique({
                where: {
                    username: username
                }
            }).then(async (data: any) => {
                if (data) {
                    // compare password
                    const compare = await compare_password(password, data.password);
                    if (compare) {
                        // login user
                        // create token
                        const token = create_token({
                            id: data.id,
                            username: data.username,
                            password: data.password
                        })
    
                        res.status(200).json({
                            message: 'Login successful',
                            data,
                            jwt: token
                        })
                    } else {
                        res.status(403).json({
                            message: {password: 'password is incorrect'}
                        })
                    }
                } else {
                    res.status(403).json({
                        message: {username: 'username does not exist'}
                    })
                }
            }).catch((err: any) => {
                res.status(401).json({
                    message: 'Login failed',
                    err
                })
            })
        } else {
            res.status(403).json({
                message: 'username and password are required'
            })
        }
    } catch (err) {
        res.status(500).json({
            message: 'Login failed',
            err
        })
    }
});

admin.post('/admin/register', checkAuth, async (req: Request, res: Response) => {
    try {
        const {username, password}: {username: string, password: string} = req.body;
        prisma.user.create({
            data: {
                username,
                password: await hash_password(password),
                role: "admin"
            }
        }).then((data: any) => {
            res.status(200).json({
                message: "User created",
                data
            })
        }
        ).catch((err: any) => {
            res.status(400).json({
                message: "Error creating user",
                err
            })
        })
    } catch (err) {
        res.status(500).json({
            message: "Error creating user",
            err
        })
    }
})

// change password
admin.post('/admin/change-password', checkAuth, async (req: Request, res: Response) => {
    try {
        const {id, password, NewPassword}: {id: string, password: string, NewPassword: string} = req.body;
        console.log(id, password, NewPassword)
        // check is the new password are valid
        if (NewPassword.length < 8) {
            res.status(400).json({
                message: "Password must be at least 8 characters"
            })
            return
        }
        prisma.user.findUnique({
            where: {
                id: parseInt(id)
            }
        }).then(async (data: any) => {
            if (data) {
                if (compare_password(password, data.password)) {    
                    prisma.user.update({
                        where: {
                            id: parseInt(id)
                        },
                        data: {
                            password: await hash_password(NewPassword)
                        }
                    }).then((data: any) => {
                        res.status(200).json({
                            message: "Password changed",
                            data
                        })
                    }
                    ).catch((err: any) => {
                        res.status(400).json({
                            message: "Error changing password",
                            err
                        })
                    })
                } else {
                    res.status(400).json({
                        message: "Invalid password"
                    })
                }
            } else {
                res.status(400).json({
                    message: "User not found"
                })
            }
        }).catch((err: any) => {
            res.status(400).json({
                message: "Error finding user",
                err
            })
        })
    } catch (err) {
        res.status(500).json({
            message: "Error changing password",
            err
        })
    }
});

// delete user
admin.post('/admin/delete-user', checkAuth, async (req: Request, res: Response) => {
    try {
        const {id, password}: {id: string, password: string} = req.body;
        prisma.user.findUnique({
            where: {
                id: parseInt(id)
            }
        }).then((data: any) => {
            if (data) {
                if (compare_password(password, data.password)) {            
                    prisma.user.delete({
                        where: {
                            id: parseInt(id)
                        }
                    }).then((data: any) => {
                        res.status(200).json({
                            message: "User deleted",
                            data
                        })
                    }
                    ).catch((err: any) => {
                        res.status(400).json({
                            message: "Error deleting user",
                            err
                        })
                    })
                } else {
                    res.status(400).json({
                        message: "Invalid password"
                    })
                }
            } else {
                res.status(400).json({
                    message: "User not found"
                })
            }
        }).catch((err: any) => {
            res.status(400).json({
                message: "Error finding user",
                err
            })
        })
    } catch (err) {
        res.status(500).json({
            message: "Error deleting user",
            err
        })
    }
})

// get me (get user data)
admin.get('/admin/me', checkAuth, async (req: Request, res: Response) => {
    try {
        let user: any = req.user;
        if (req.user) [
            res.status(200).json({
                data: {
                    id: user.id,
                    username: user.username,
                    role: user.role
                }
            })
        ]
    } catch (err) {
        res.status(500).json({
            message: "Error finding user",
            err
        })
    }
});