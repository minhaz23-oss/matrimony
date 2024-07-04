'user server'
import {connect} from '@/lib/db';
import User from '../models/user.models';


export async function createUser(user: any){
    try {
        await connect();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        console.log(error)
    }
}