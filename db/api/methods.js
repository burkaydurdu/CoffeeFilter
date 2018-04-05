import Users from './user'

export default {
    user_created: (data) => {
        var user = new Users;
        user.username = data.username,
            user.email = data.email,
            user.password = data.password,
            user.profile = {
                name: data.name,
            }
        user.save();
    }
}