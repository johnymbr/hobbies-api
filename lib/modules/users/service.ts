import { IUser } from "./model";
import { User as users } from './schema';

export default class UserService {

    public findAll(callback: any) {
        users.find(callback);
    }

    public findById(id: String, callback: any) {
        users.findById(id, callback);
    }

    public createUser(user: IUser, callback: any) {
        const _session = new users(user);
        _session.save(callback);
    }

    public updateUser(user: IUser, callback: any) {
        const query = {_id: user._id};
        users.findOneAndUpdate(query, user, { "new": true }, callback);
    }

    public deleteUser(_id: String, callback: any) {
        const query = {_id: _id};
        users.deleteOne(query, callback);
    }
}