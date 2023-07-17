var database = [ { name: 'vicky', age: 24, married: false, address: { city: 'hyderabad', state: 'andhra', pincode: '516003' }, skills: ['react', 'html', 'nodejs'], experience: 2 }, { name: 'nirmal', age: 20, married: true, address: { city: 'hyderabad', state: 'telengana', pincode: '500004' }, skills: ['css', 'figma'], experience: 4 }, { name: 'neeraj', age: 26, married: false, address: { city: 'bengaluru', state: 'karnataka', pincode: '510006' }, skills: ['aws', 'angular', 'nodejs'], experience: 5 } ]

let newArray = database.filter(function(el){
    if(el.experience > 3 && el.address.city == "hyderabad")
    return el;
})
console.log(newArray);