# Phone Book
 We will be using a Direct Address Table data structure for this implementation. <br>
 Direct Address Table is a data structure that has the capability of mapping records to their corresponding keys using arrays.<br>
 In direct address tables, records are placed using their key values directly as indexes.<br>
 They facilitate ***fast*** searching, insertion and deletion operations.<br><br>


## Advantages
<ul>
<li> Searching in O(1) Time: Direct address tables use arrays which are random access data structure, so, the key values (which are also the index of the array) can be easily used to search the records in O(1) time.
</li>
<li> Insertion in O(1) Time: We can easily insert an element in an array in O(1) time. The same thing follows in a direct address table also.
</li>
<li> Deletion in O(1) Time: Deletion of an element takes O(1) time in an array. Similarly, to delete an element in a direct address table we need O(1) time.
</li>
</ul>

## Constraints/Cons
<ul>
<li>Prior knowledge of maximum key value
</li>
<li>Practically useful only if the maximum value is very less.
</li>
<li>It causes wastage of memory space if there is a significant difference between total records and maximum value.
</li>
</ul>

Though a [HashTable](https://en.wikipedia.org/wiki/Hash_table) can overcome these limitations of direct address tables.


## Implementation Details

We will be limiting the allowed digits to 10, which gives us a maximum combination of 10000000. anything greater than that will be too much.<br/>


### Initialize the phone book class <br>
    const pb = new PhoneBook();

### Add a new phone number to the phone book
    pb.add('8100419090',{
        name: 'Babalola',
        email: 'nathanielbabalola1@gmail.com',
        created_at: Date().toString()
    })

### Search for specific details to a unique phone number
You can include any of ***name***, ***email*** or ***created_at*** to the find function after the first parameter containing the phone number <br>

    pb.find('8100419090', 'name', 'created_at');
    
    Output
    ➜ Babalola
    ➜ Wed Dec 29 2021 14:00:01 GMT+0100 (West Africa Standard Time)

### To delete a specific phone number
    pb.delete('8100419090');
    pb.find('8100419090', 'name', 'created_at')

    Output
    ➜ Number Not Found

### Get the total number of phone numbers in the Phone book
    console.log(pb.length)
    
    Output
    ➜ 1

