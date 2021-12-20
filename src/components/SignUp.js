import React from 'react'



const signUp = ({onRouteChange}) => {
    return (
        <>
        <div>
          <h1>Register</h1>
        </div>
        <div className="container">
          <div className="containment">
            <div className="forms">
              <form className="grids">
                <br />
                <div className="form-group">
                  <label for="name">Name:</label>
                  <br />
                  <input
                    type="text"
                    placeholder="input name"
                    className="form-control"
                    id="inputForm"
                  ></input>
                  <p id="inputText"></p>
                </div>
                <br />
                <div className="form-group">
                  <label for="name">Email:</label>
                  <br />
                  <input
                    type="text"
                    placeholder="input Email"
                    className="form-control"
                    id="InputEmail"
                  ></input>
                </div>
                <br />
                <div className="form-group">
                  <label for="name">Password:</label>
                  <br />
                  <input
                    type="password"
                    placeholder="input password"
                    className="form-control"
                    id="inputPassword"
                  ></input>
                </div>
                <pre></pre>
                <button type="submit" className="btn-primary" id="enter" onClick={() => onRouteChange('home')}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    )
}



export default signUp
