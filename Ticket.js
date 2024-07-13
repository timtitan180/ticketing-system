import React from "react";
import Form from 'react-bootstrap/Form';

function TicketingSystem() {
    const [tickets, setTickets] = useState([
      { id: 1, title: 'Fix login issue', description: 'Users unable to log in', status: 'Open', priority: 'High' },
      { id: 2, title: 'Update homepage', description: 'Design changes needed', status: 'In Progress', priority: 'Medium' },
      { id: 3, title: 'Add payment gateway', description: 'Integration with Stripe', status: 'Open', priority: 'High' },
    ]);
  
    const [newTicket, setNewTicket] = useState({
      title: '',
      description: '',
      status: 'Open',
      priority: 'Low',
      assignee:''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewTicket({ ...newTicket, [name]: value });
    };
  
    const addTicket = () => {
      if (newTicket.title.trim() === '' || newTicket.description.trim() === '') {
        alert('Please enter title and description.');
        return;
      }
  
      const ticketIds = tickets.map(ticket => ticket.id);
      const maxId = ticketIds.length > 0 ? Math.max(...ticketIds) : 0;
      const newTicketWithId = { ...newTicket, id: maxId + 1 };
  
      setTickets([...tickets, newTicketWithId]);
      setNewTicket({
        title: '',
        description: '',
        status: 'Open',
        priority: 'Low',
        assignee:''
      });
    };
  
    const deleteTicket = (id) => {
      const updatedTickets = tickets.filter(ticket => ticket.id !== id);
      setTickets(updatedTickets);
    };
  
    return (
        // <div className="ticket-form">
        // <h2>Create New Ticket</h2>
        <div className="ticketing-system">
      <h1>Ticketing System</h1>
      <div className="ticket-form">
        <h2>Create New Ticket</h2>
        <label>Title: </label>
        <input type="text" name="title" value={newTicket.title} onChange={handleInputChange} />
        <label>Description: </label>
        <textarea name="description" value={newTicket.description} onChange={handleInputChange} />
        <label>Status: </label>
        <select name="status" value={newTicket.status} onChange={handleInputChange}>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
        <label>Priority: </label>
        <select name="priority" value={newTicket.priority} onChange={handleInputChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <label>Assignee </label>
        <select name="assignee" value={newTicket.assignee} onChange={handleInputChange}>
          <option value=" "></option>
          <option value="John Smith">John Smith</option>
          <option value="Ryan Williams">Ryan Williams</option>
          <option value="Daniel Gonzales">Daniel Gonzales</option>
        </select>
        <button onClick={addTicket}>Create Ticket</button>
      </div>
      <div className="ticket-list">
        <h2>Current Tickets</h2>
        {tickets.map(ticket => (
          <div key={ticket.id} className="ticket">
            <h3>{ticket.title}</h3>
            <p>Description: {ticket.description}</p>
            <p>Status: {ticket.status}</p>
            <p>Priority: {ticket.priority}</p>
            <button onClick={() => deleteTicket(ticket.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>

)
        
}










export default TicketingSystem;
