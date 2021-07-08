const LastName = ({getLastName}) => {

  const lastName = (e) => {
    getLastName(e.target.value) ;
  }

  return (
    <div>
      <label>Last Name</label>
      <br />
      <input type="text" id="last-name" name="last-name" onChange={lastName}></input>
    </div>
  );
};

export default LastName;
