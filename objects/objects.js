
// const gustavTheDog = {
//     name: 'Gustav',
//     species: 'cattle dog',
//     nicknames = ['goose', 'dog'],
//     age: 5
// }

const restaurant = {
   name: "Bob's Burgers",
   orders: [],
   placeOrder: function (meal) {
    this.orders.push(meal)
   },
   getAllOrders: function () {
    return this.orders
   }
}

const chickenComboMeal = {
    sandwichType: 'chicken sandwich',
    fries: true,
    drinkSize: 'L'
}

// Place an order
restaurant.placeOrder(chickenComboMeal)

// Invoke the function to return the list of all orders
const allOrders = restaurant.getAllOrders()
// Output all orders to the console using console.table()
console.log(allOrders)








// const campaign = {
//     contact_info: {
//         name: 'Elizabeth Sanger',
//         address: '234 Wallaby Way',
//         email: 'elizsanger@gmail.com',
//         phone: '847-903-6482',
//         availability: 'weekdays only'
//     },
//     personal_info: {
//         biography: '',

//         fam_photo: [],
//         famPhotoPush: function (img) {
//             this.fam_photo.push(img)
//         },
//         headshot: [],
//         headPhotoPush: function (img) {
//             this.headshot.push(img)
//         },
//         image_gallery: [],
//         gallPhotoPush: function (img) {
//             this.image_gallery.push(img)
//         },
//         constituents_photo: [],
//         constPhotoPush: function (img) {
//             this.constituents_photo.push(img)
//         },
//     },
//     volunteer_info: {
//         recruiting: function (name, email) {
//             const volunteerForm = []
//             this.volunteerForm.push(name, email)
//         },
//         name: '',
//         activities: 'example: answer phones, picket, community talks, polls',
//     },
//     congressional: {
//         district: 6,
//         platform_statements: 'blah blah blah',
//         taxes: '',
//         jobs: '',
//         infrastructure: '',
//         healthcare: '',
//         crime: '',
//     },
//     voting: {
//         calendar_events: [
//             'bake sale', 'ribbon cutting ceremony', 'sleeping with security officer'
//         ],
//         events_update: function (event) {
//             this.calendar_events.push
//         },
//         url_donation: '',
//         mission_statements: '',
//         url_registration_vote: '',
//     }
// }

// console.log(campaign.volunteer_info.recruiting)














































