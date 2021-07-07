const Contact = ({getPhone}) => {

  const getContact = (e) => {
    getPhone(e.target.value);
  }

  return (
    <div>
      <label>Contact</label>
      <br />
      <input type="number" id="contact" name="contact" onChange={getContact}></input>
    </div>
  );
};

export default Contact;
