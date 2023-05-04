const Message = ({ messages }) => {
   return (
      <main>
         <h2>Messages</h2>
         <section className="messages">
            <ul>
               {messages.map((message) => (
                  <li className={`message ${message.type}`} key={message.id}>
                     <div className="icon">{message.name[0]}</div>
                     <span className="content">{message.content}</span>
                  </li>
               ))}
            </ul>
         </section>
         <form className="message-form">
            <input placeholder="Type a message..." />
         </form>
      </main>
   );
};

export default Message;
