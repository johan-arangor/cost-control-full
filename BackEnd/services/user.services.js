const { User } = require('../models/index');

class UserServices {
    async ValidateUser(user) {
        return new Promise(async (resolve) => {
            let result = await User.findOne(
                { where: { email: user } }
            );
    
            if (result != null) {
                resolve({
                    state: true, 
                    data: {id: result.id, password: result.password}
                });
            } else {
                console.log('state services ', state);

                resolve({state: false});
            }
        });
    }
}

module.exports = UserServices;