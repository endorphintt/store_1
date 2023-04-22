const ApiError = require('../error/ApiError.js')

class UserController {
    async reqistration(req, res) {

    }

    async login(req, res) {
        
    }

    async check(req, res, next) {
        const {id} = req.query
        if(!id){
            return next(ApiError.badRequest('not privided id'))
        }
        res.json(id)
    }
}

module.exports = new UserController()