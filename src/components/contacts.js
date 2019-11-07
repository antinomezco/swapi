import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{contact.opening_crawl}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{contact.director}</h6>
                        <p class="card-text">{contact.release_date}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contacts