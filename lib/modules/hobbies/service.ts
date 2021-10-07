import { IHobby } from "./model";
import hobbies from "./schema";

export default class HobbyService {

    public findByUserId(userId: String, callback: any) {
        const query = {user: userId};
        hobbies.find(query, callback);
    }

    public findById(id: String, callback: any) {
        hobbies.findById(id, callback);
    }

    public createHobby(hobby: IHobby, callback: any) {
        const _session = new hobbies(hobby);
        _session.save(callback);
    }

    public updateHobby(hobby: IHobby, callback: any) {
        const query = {_id: hobby._id};
        hobbies.findOneAndUpdate(query, hobby, { "new": true }, callback);
    }

    public deleteHobby(_id: String, callback: any) {
        const query = {_id: _id};
        hobbies.deleteOne(query, callback);
    }
}