import { Router } from 'express'
import { faker } from '@faker-js/faker';

const router = new Router()

router.get('/', (req, res) => {

    //make student data
    var studentArray = []
    for (let i = 1; i <= 30; i++) {
        studentArray.push({
            name: faker.name.firstName(),
        })
    }
    // studentModel.create(studentArray)
    res.render('students', { studentArray })


})

//export router
export default router;