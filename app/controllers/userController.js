const User=require('../models/user')
const apiResponse=require('../helpers/apiResponse')

exports.createUser= async (req, res) => {
    try{
        const body=req.body

        //email validation
        const checkEmail=await User.findOne({where: {email: body.email}})
        if (checkEmail){
            return res.status(422).send(apiResponse.error('Email already exists.'))
        }

        //create user
        const user= await User.create({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password,
            address: body.address,
            about: body.about,
            cgpa: body.cgpa,
            rollNumber: body.rollNumber,
            dob: body.dob,
            gender: body.gender,
        })

        return res.status(200).send(apiResponse.success("User created!", user))
    }
    catch (error){
        return res.status(400).send(apiResponse.error(error.message))
    }
}

exports.updateUser= async (req, res) => {
    try{
        const body=req.body

        const user= await User.update({
            firstName: body.firstName,
            lastName: body.lastName,
            address: body.address,
            about: body.about,
            cgpa: body.cgpa,
            rollNumber: body.rollNumber,
            dob: body.dob,
            gender: body.gender,
        }, {
            where: {
                id: req.params.id
            }
        })

        return res.status(200).send(apiResponse.success("User updated!", user))
    }
    catch (error){
        return res.status(400).send(apiResponse.error(error.message))
    }
}

exports.deleteUser= async (req, res) => {
    try{
        await User.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.status(200).send(apiResponse.success("User deleted!"))
    }
    catch (error){
        return res.status(400).send(apiResponse.error(error.message))
    }
}

exports.editUser= async (req, res) => {
    try{
        const user= await User.findByPk(req.params.id)

        return res.status(200).send(apiResponse.success("Success!", user))
    }
    catch (error){
        return res.status(400).send(apiResponse.error(error.message))
    }
}

exports.listUser= async (req, res) => {
    try{
        const body=req.body
        let limit = 10
        let offset = (body.page - 1) * limit

        const {count, rows}= await User.findAndCountAll({
            offset: offset,
            limit: limit,
            order: [
                ['date', 'ASC']
            ]
        })

        const data={
            rows: rows,
            count: count
        }

        return res.status(200).send(apiResponse.success("Success!", data))
    }
    catch (error){
        return res.status(400).send(apiResponse.error(error.message))
    }
}