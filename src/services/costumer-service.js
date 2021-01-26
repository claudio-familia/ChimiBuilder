const COSTUMER = [
    {        
        name: 'Claudio Familia',
        address: {
            street: '20 Flor of Geranio street',
            zipCode: 10904,
            country: 'Dominican Republic'
        },
        email: 'claudio.familia.morel@gmail.com'
    }
]

const costumerService = {    
    getCostumerById: (id) => {
        return COSTUMER[id];
    }
}

export default costumerService;