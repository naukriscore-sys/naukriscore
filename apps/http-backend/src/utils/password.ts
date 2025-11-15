import bcrypt from 'bcrypt';

const saltRound = process.env.SALTROUNDS || 5

export const verifyPassword = async (planPass: string, hashPass: string) => {
    return await bcrypt.compare(planPass, hashPass)
}

export const createHashPassword = async (planPass: any) => {
    return await bcrypt.hash(planPass, saltRound)
}