import {useState} from 'react';
import './App.css';
import {UpperCaseLetters,LowerCaseLetters,Numbers,Symbols} from './utils/Charactar';

function App() {

    const [password,setPassword] = useState('');
    const [passwordLength,setPasswordLength] = useState(20);
    const [includeUpperCase,setIncludeUpperCase] = useState(false);
    const [includeLowerCase,setIncludeLowerCase] = useState(false);
    const [includeNumbers,setIncludeNumbers] = useState(false);
    const [includeSymbols,setIncludeSymbols] = useState(false);


    function handleGeneratePassword(e) {
      e.preventDefault();
      let charactars = '';
      if (includeUpperCase) {
        charactars += UpperCaseLetters;
      }
      if (includeLowerCase) {
        charactars += LowerCaseLetters;
      }
      if (includeNumbers) {
        charactars += Numbers;
      }
      if (includeSymbols) {
        charactars += Symbols;
      }
      setPassword(createRandomPassword(charactars))
    }

    const createRandomPassword = (charactars) => {
      let password = '';
      for (let i = 0; i < passwordLength; i++) {
        const charactarIndex = Math.round(Math.random() * charactars.length);
        password += charactars.charAt(charactarIndex)
      }
      return password;
    }



    return (
        <div className="container">
            <div className='password-generator'>
                <div className='password-header'>
                    <h3>{password}</h3>
                    <button>
                        <i className="far fa-copy"></i>
                    </button>
                </div>
                <div className='password-form'>
                    <label htmlFor="number-length">Password Length</label>
                    <input
                        type="number"
                        id='number-length'
                        defaultValue={passwordLength}
                        onChange={(e) => setPasswordLength(e.target.value)}
                        min='8'
                        max='20'/>
                </div>
                <div className='password-form'>
                    <label htmlFor="uppercase">Include UpperCase Letters</label>
                    <input
                        type="checkbox"
                        id='uppercase'
                        checked={includeUpperCase}
                        onChange={(e) => setIncludeUpperCase(e.target.checked)}/>
                </div>
                <div className='password-form'>
                    <label htmlFor="lowercase">Include LowerCase Letters</label>
                    <input
                        type="checkbox"
                        id='lowercase'
                        checked={includeLowerCase}
                        onChange={(e) => setIncludeLowerCase(e.target.checked)}/>
                </div>
                <div className='password-form'>
                    <label htmlFor="numbers">Include Numbers</label>
                    <input
                        type="checkbox"
                        id='numbers'
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}/>
                </div>
                <div className='password-form'>
                    <label htmlFor="symbols">Include Symbols</label>
                    <input
                        type="checkbox"
                        id='symbols'
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.checked)}/>
                </div>
                <button onClick={handleGeneratePassword} className='password-btn' type='submit'>Generate Password</button>
            </div>
        </div>
    );
}

export default App;
