import React, { useEffect, useState } from 'react'

const ChatSideBar = ({ setSelectedUser }) => {

    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const initialContacts = [
            { id: 1, name: 'Ariene McCoy', lastMessage: 'Hi there! How are you?', lastMessageTime: '9:00 PM' },
            { id: 2, name: 'Michael John', lastMessage: 'Can we meet tomorrow?', lastMessageTime: '8:30 PM' },
            { id: 3, name: 'Elizabeth Sarah', lastMessage: 'The project is done!', lastMessageTime: '7:45 PM' },
            { id: 4, name: 'Jenny Wilson', lastMessage: "Don't forget the meeting", lastMessageTime: '6:15 PM' },
            { id: 5, name: 'Esther Howard', lastMessage: 'Thanks for your help', lastMessageTime: '5:30 PM' },
        ];
        setContacts(initialContacts);
        setSelectedContact(initialContacts[0]);
    }, []);



    const handleSearch = (query) => {
        setSearchQuery(query);
        const filteredContacts = contacts.filter((contact) =>
            contact.name.toLowerCase().includes(query.toLowerCase()) ||
            contact.lastMessage.toLowerCase().includes(query.toLowerCase())
        );
        setContacts(filteredContacts);
    };

    const handleContactClick = (contact) => {
        setSelectedContact(contact);
        setSelectedUser(contact);
    };

  return (
    <div>
        <div className="w-full md:w-80 border-r flex flex-col">
                        <div className="p-4 border-b">
                            <div className="relative">
                                <input
                                    type="search"
                                    placeholder="Search Here"
                                    className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none"
                                    value={searchQuery}
                                    onChange={(e) => handleSearch(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className=" overflow-y-auto">
                            {/* Chat List */}
                            {contacts.map((contact) => (
                                <div
                                    key={contact.id}
                                    className={`flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer border-b ${selectedContact?.id === contact.id ? 'bg-gray-100' : ''}`}
                                    onClick={() => handleContactClick(contact)}
                                >
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <p className="font-medium truncate">{contact.name}</p>
                                            <span className="text-xs text-gray-500">{contact.lastMessageTime}</span>
                                        </div>
                                        <p className="text-sm text-gray-500 truncate">
                                            {contact.lastMessage}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
 
  )
}

export default ChatSideBar
