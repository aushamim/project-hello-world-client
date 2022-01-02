import React, { useState } from 'react';
import Contact from './Contact/Contact';

const Contacts = () => {
    const [contacts,setContacts]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    useState(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setContacts(data))
    },[])
    return (
        <div>
            <h1>hello i am contacts</h1>
            {
                contacts.map(contact=><Contact 
                    key={contact.id}
                    contact={contact}
                    ></Contact>)
            }
        </div>
    );
};

export default Contacts;