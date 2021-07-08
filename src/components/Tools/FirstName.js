const FirstName = ({getFirstName}) => {
  const firstName = (e) => {
    getFirstName(e.target.value) ;
  }

  return (
    <div>
      <label >First Name</label>
      <br />
      <input type="text" id="first-name" name="first-name" onChange={firstName} ></input>
    </div>
  );
};

export default FirstName;
