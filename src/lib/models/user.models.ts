import { Schema, model, models} from 'mongoose';

const userSchema = new Schema({
    clerkId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bioData: {
        type: Object,
        required: false
    }
})

const User = models?.user || model('user',userSchema);

export default User;