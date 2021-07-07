const Username = ({getUsername}) => {

  const username = (e) => {
    getUsername(e.target.value);
  }

  return (
    <div>
      <label>Username</label>
      <br />
      <input type="text" id="username-field" onChange={username} name="username"></input>
    </div>
  );
};

export default Username;
