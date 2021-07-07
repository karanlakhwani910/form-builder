const LastName = ({getLname}) => {

  const getLastName = (e) => {
    getLname(e.target.value) ;
  }

  return (
    <div>
      <label>Last Name</label>
      <br />
      <input type="text" id="last-name" name="last-name" onChange={getLastName}></input>
    </div>
  );
};

export default LastName;
