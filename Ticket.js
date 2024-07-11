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
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="" value={newTicket.title}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={newTicket.description}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Status</Form.Label>
        <Form.Select aria-label="Default select example" value={newTicket.status} onChange={handleChange}>
        <option value="open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Closed">Closed</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Priority</Form.Label>
        <Form.Select aria-label="Default select example" value={newTicket.priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Assignee</Form.Label>
        <Form.Select aria-label="Default select example" value={newTicket.assignee} onChange={handleChange}>
        <option value="John Smith">John Smith</option>
        <option value="Ryan Williams">Ryan Williams</option>
        <option value="Daniel Guetto">Daniel Guetto</option>
        </Form.Select>
      </Form.Group> 
      <button onClick={addTicket}>Create Ticket</button>
    </Form>
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
          </div>
        ))}
        











export default TicketingSystem;
