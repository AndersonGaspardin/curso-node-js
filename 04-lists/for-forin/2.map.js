const service = require('./service')

async function main() {
    try {
        var page = 1
        var search_page = ''
        var response = []
        const namesForEach = []
        const namesMap = []
        
        do {
            response.push(await service.getPeople(search_page))
            if (response.next) {
                page = page + 1
                search_page = `?page=${page}`
            }
        } while (response.next != undefined)
            
        response.results.forEach(function(item){
            namesForEach.push(item.name)
        })
        console.log('name forEach', namesForEach);
    } catch (error) {
        console.error('Something went wrong', error)
    }
}

main()