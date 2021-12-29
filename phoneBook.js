class PhoneBook {

    constructor() {
        this.count = 0
        this.array = new Array(10000000);
        this.occupiedIndexes = [];
    }

    add(number, details) {
        // remove all spaces and hyphens
        number = number.replace(/-| /g, '');
        // select the last 10 digits
        number = number.slice(-10);

        // use the phone number as an index and set its value to it's details
        this.array[number] = details;

        // add to the record of occupiedIndexes
        this.occupiedIndexes.push(number);
        // increase the number of count denoting the number of records in the array
        this.count++;
    }

    delete(number) {
        number = number.replace(/-| /g, '')
        number = number.slice(-10);
        this.array[number] = null;

        // get the index of the phone number in the occupiedIndexes array
        const numberIndex = this.occupiedIndexes.indexOf(number);
        // remove that phone number from the array
        this.occupiedIndexes.splice(numberIndex, 1);
        //decrease the number of records by 1
        this.count--;
    }

    // you can pass in ay number of details you want from the values under that unique phone number
    find(number, ...details) {
        number = number.replace(/-| /g, '')
        number = number.slice(-10);

        // check if there isn't an object at that index
        if (!this.array[number]) {
            console.log('Number Not Found')
            return;
        }

        // check if the user wants any specific detail from the record and log it to the console
        if (details.length > 0) {
            details.forEach(detail => {
                console.log(this.array[number][`${detail}`]);
            });
            return;
        }

        // else just log all the details to the console
        console.log(this.array[number]);

    }

    get listOfPhoneNumbers() {
        return this.occupiedIndexes;
    }

    get length() {
        return this.count;
    }
}

const pB = new PhoneBook();

pB.add('8100419090', {
    name: 'Babalola',
    email: 'nathanielbabalola1@gmail.com',
    created_at: Date().toString()
})

pB.add('8100419999', {
    name: 'Babalola',
    email: 'nath@email.com',
    created_at: Date().toString()
})
// get just the name and the date that phone number was added
pB.find('8100419090', 'name', 'created_at');


pB.find('8100419999');

// delete a record
pB.delete('8100419090');
console.log(pB.length)
console.log(pB.listOfPhoneNumbers);





// Trying Hashing
// class PhoneBook {
//     constructor(){
//         // we are starting with this size to account for all possible combinations of ASCII
//         // code of 11-digit phone numbers
//         this.book = new Array(570);
//         this.size = 0;
//     }
//
//     _hash(key){
//         //const parsedKey = parseInt(key, 10);
//         if(!key){
//             throw new Error('Please input a phone number');
//         }
//
//         // we will be taking the last 10 digits assuming country code will be added automatically
//
//         if(key.length !== 11) {
//             throw new Error('Phone number must be 11 digits');
//         }
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash += key.charCodeAt(i);
//         }
//         //
//         return hash % this.book.length;
//     }
//
//     set(key, value) {
//         const index = this._hash(key);
//         // set the calculated hash index to it's value
//         this.book[index] = [[key, value]];
//         // increment the count of the total element in the phone book by 1
//         this.size++
//     }
//
//     get(key){
//         const index = this._hash(key);
//         // check if the array at that index is greater than 1, in case of collision
//         // if it is then loop through the 1> elements
//         if(this.book[index].length > 1) {
//             for(let i = 0; i < this.book[index].length; i++){
//                 // check if the key at that index is equal to the key you are looking for
//                 if (this.book[index][i][0] === key){
//                     return this.book[index][i];
//                 }
//             }
//         }
//         // return the value at that index
//         return this.book[index]
//     }
//
//     remove(key){
//         const index = this._hash(key);
//
//         // check if there is an element at that index
//         if (this.book[index] && this.book[index].length > 1){
//             for (let i = 0;i < this.book[index].length; i++){
//                 if(this.book[index][i][0] === key){
//                     this.book[index][i] = undefined;
//                     this.size--;
//                     return true
//                 }
//             }
//             // set the value to undefined and decrease the count by 1
//             this.book[index] = undefined;
//             this.size--;
//             return true;
//         }
//
//         return false;
//     }
//
//     print() {
//         for (const element of this.book) {
//             //console.log(element);
//             if (element === undefined){
//                 continue;
//             }
//             //console.log(element);
//             //const formattedElement =
//             element.map(([key, value]) => {
//                 console.log( `${key}: ${JSON.stringify(value, null, 2)}`)
//             });
//
//             //console.log(`${this.book.indexOf(element)}: ${formattedElement}`)
//         }
//     }
// }
//
// const pb = new PhoneBook();
// pb.set('08100419090', {
//     name: 'Nathaniel',
//     email: 'nath@email.com',
//     created_at: Date().toString()
// });
//
// pb.set('08100419990', {
//     name: 'Babalola',
//     email: 'nath@email.com',
//     created_at: Date().toString()
// });
// pb.print();
// // console.log(pb.get('08100419990'));
// // console.log(pb.get('08100419090'));