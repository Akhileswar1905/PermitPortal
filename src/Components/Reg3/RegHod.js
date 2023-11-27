import "./RegFac.css";

const RegFac = () => {
  return (
    <div className="regs-body">
      <div className="regs-box-2">
        <div className="regs-form-box">
          <form>
            <div className="formLabel">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="formInput" />
            </div>
            <div className="formLabel">
              <label htmlFor="id">User ID</label>
              <input type="text" id="id" className="formInput" />
            </div>
            <div className="formLabel">
              <label htmlFor="dept">Department and Section</label>
              <input type="text" id="dept" className="formInput" />
            </div>
            <div className="formLabel">
              <label htmlFor="pwd">Password</label>
              <input type="password" id="pwd" className="formInput" />
            </div>
            <div className="formLabel">
              <input type="submit" className="formButton" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      <div className="box-1">
        <div className="regf-circle c1">
          <h1>Faculty Registration</h1>
        </div>
      </div>
    </div>
  );
};

export default RegFac;
