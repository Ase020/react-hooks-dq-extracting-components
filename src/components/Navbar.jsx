const Navbar = ({ contacts }) => {
   return (
      <nav>
         <h2>Contacts</h2>
         <ul className="contacts">
            {contacts.map(({ id, name }) => (
               <li className="contact" key={id}>
                  <div className="icon">{name[0]}</div>
                  {name}
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Navbar;
