const service = require('./service')


async function main() {

    const names = []
    const namesForIn =[]
    const namesForOf = []
    var page = 1
    var search_page = ''
    var response
    console.time('for')
    do {
        response = await service.getPeople(search_page)
        for (let i = 0; i <= response.results.length - 1; i++) {
            const people = response.results[i]
            names.push(people.name)
        }
        if (response.next) {
            page = page + 1
            search_page = `?page=${page}`
        }
    } while (response.next != undefined)
    console.timeEnd('for')
    console.time('forIn')
    do {
        response = await service.getPeople(search_page)
        for(let i in response.results){
        const people = response.results[i]
        namesForIn.push(people.name)
    }
    if (response.next) {
        page = page + 1
        search_page = `?page=${page}`
    }
    } while (response.next != undefined)
    console.timeEnd('forIn')
    console.time('forof')
    do {
        response = await service.getPeople(search_page)
        for (people of response.results) {
            namesForOf.push(people.name)
        }
        if (response.next) {
            page = page + 1
            search_page = `?page=${page}`
        }
    } while (response.next != undefined)
    console.timeEnd('forof')
    console.log('names: ', names);
}

main()
    .then(function () {

    })
    .catch(function (error) {
        console.error('some error', error);
    })