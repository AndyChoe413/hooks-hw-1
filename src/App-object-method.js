import { useState, } from 'react';
import './App.css';

function App() {

//--------not dry method ------------////
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // function handleOnSubmit(e) {
  //   e.preventDefault()
  //   console.log(username)
  //   console.log(email)
  //   console.log(password)
  // }

  //------Dry Method using custom hooks-----------//

  function CustomObjectHook(initialState) {
    const [value, setValue] = useState(initialState);

    function onChange(e) {
      setValue(e.target.value);
    }

    function showValue() {
      console.log(value);
    }

    function clearInput() {
      setValue("");
    }

    return {value, onChange, clearInput, showValue}
  }

  //------when using object custom hooks the key must be renamed to the key name given in the functions--------//
  const {
    value: username,
    onChange: userNameOnChange,
    clearInput: clearUsernameInput,
    showValue: showUsernameValue
  } = CustomObjectHook("")
  
  const {
    value: email,
    onChange: emailOnChange,
    clearInput: clearEmailInput,
    showValue: showEmailValue
  } = CustomObjectHook("")

  const {
    value: password,
    onChange: passwordOnChange,
    clearInput: clearPasswordInput,
    showValue: showPasswordValue
  } = CustomObjectHook("")


  //-------function to call all the customArrayHooks that were de-constructed above.-----//
  function handleOnSubmit(e) {
    e.preventDefault()

    showUsernameValue()
    showEmailValue()
    showPasswordValue()

    clearUsernameInput()
    clearEmailInput()
    clearPasswordInput()
  }

  return (

    <div className="App">

      {/* this handles the submit button for forms by calling handleOnSubmit*/}
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e)=> userNameOnChange(e)}
        />
        <br/>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e)=> emailOnChange(e)}
        />
        <br/>
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e)=> passwordOnChange(e)}
        />
        <br />
        <button type="submit">Submit</button>
      </form> 
    </div>
  );
}

export default App;
