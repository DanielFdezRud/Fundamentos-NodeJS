const bcrypt = require("bcrypt")

const password = "1234segura!"

bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash)

    bcrypt.compare(password, hash, function (err, res){
        console.error(err)
        console.log(res)
    })
})