export type UserModel = {
    id: number
    name: string
    email: string
}

export type AddUserParams = Omit<UserModel, 'id'>
