const dishes = new Map()

dishes.set(10, {'id': 10, 'name':'Carne', 'value':'27000', 'vegetarian':false})
dishes.set(11, {'id': 11, 'name':'frutas', 'value':'29000', 'vegetarian':true})
dishes.set(12, {'id': 12, 'name':'pescado', 'value':'39000', 'vegetarian':false})

module.exports.dishes = dishes;
// module.exports = dishes;