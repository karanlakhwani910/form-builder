const Email = ({getEmail}) => {

  const email = (e) =>{
    getEmail(e.target.value)
  }

  return (
    <div>
      <label>Email</label>
      <br />
      <input type="email" id="email-field" name="email" onChange={email}></input>
    </div>
  );
};

export default Email;
