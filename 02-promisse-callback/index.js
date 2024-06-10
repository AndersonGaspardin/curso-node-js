/**
objs:
0 - obter um usuario
1 - obter o telefone de um user a partir do id
2 - obter endereço de um user a partir do id 
**/
const util = require('util')
const getAddressAsync = util.promisify(getAddress)

function getUser() {
    // if any error, call reject 
    // if succes, solve
    return new Promise(function solvePromisse(solve, reject) {
        setTimeout(function () {
            //return reject(new Error('SOMETHING WENT STRONGLY WRONG'))
            return solve({
                id: Math.floor(Math.random() * 100),
                name: "Aula 02",
                birthday: new Date()

            })
        }, 1000)
    })

}

function getPhone(idUser) {
    return new Promise(function solvePromisse(solve, reject) {
        setTimeout(() => {
            return solve({ phone: Math.floor(Math.random() * 1000000000), ddd: 31 })
        }, 2000);
    })
}

function getAddress(idUser, callback) {
    setTimeout(() => {
        return callback(null, { address: "Rua do amendoin", number: 69 })
    }, 2000);
}

/*
const userPromisse = getUser()
userPromisse
    .then(function (user) {
        return getPhone(user.id)
            .then(function solvePhone(solve) {
                return {
                    user: {
                        name: user.name,
                        id: user.id
                    },
                    phone: solve
                }
            })

    })
    .then(function (solve) {
        const address = getAddressAsync(solve.user.id)
        return address.then(function solveaddress(solve) {
            return {
                user: solve.user,
                phone: solve.phone,
                address: solve.solve
            }
        })
    })
    .then(function (solve) {
        console.log(`Nome: ${solve.user.name}
        Endereço: ${solve.address.address}, ${solve.address.number}
        Telefone:(${solve.phone.ddd}) ${solve.phone.phone}`)
    })
    .catch(function (error) {
        console.log('Something went wrong', error);
    })
to manipulate the success it's used builtin function .then()
to manipulate errors, it's used the . catch()
*/
/*
getUser(function user(error_user, user) {
    if (error_user) {
        console.log(`DEU ERRO NO USUÁRIO: ${error_user}`)
        return;
    }

    getPhone(user.id, function phone(error_phone, phone) {
        if (error_phone) {
            console.log(`DEU ERRO NO TELEFONE: ${error_phone}`)
            return;
        }
        getAddress(user.id, function address(error_address, address) {

            if (error_address) {
                console.log(`DEU ERRO NO ENDEREÇO: ${error_address}`)
                return;
            }

            console.log(`
            Nome do usuário: ${user.name};
            Telefone: (${phone.ddd}) ${phone.phone};
            Endereço: ${address.address}, Número: ${address.number}`)

        })
    })
})
*/
main()
async function main() {
    try{
        console.time('medida-promisse')

        const user = await getUser()
        /*
        const phone = await getPhone(user.id)
        const address = await getAddressAsync(user.id)
        */
       const result = await Promise.all([
            getPhone(user.id),
            getAddressAsync(user.id)
        ])
        const phone = result[0]
        const address = result[1]
        
        console.log(`
        Nome: ${user.name}
        Endereço: ${address.address}, ${address.number}
        Telefone:(${phone.ddd}) ${phone.phone}
        `)
        
        console.timeEnd('medida-promisse')
    }
    catch(error){
        console.error('something went wrong', error)
    }
}