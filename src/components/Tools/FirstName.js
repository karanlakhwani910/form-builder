const FirstName = ({getFname}) => {
  const getFirstName = (e) => {
    getFname(e.target.value) ;
  }

  return (
    <div>
      <label >First Name</label>
      <br />
      <input type="text" id="first-name" name="first-name" onChange={getFirstName} ></input>
    </div>
  );
};

export default FirstName;
