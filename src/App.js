import logo from './logo.svg';
import './App.css';
import DocTitle1 from './components/DocTitle1';
import DocTitle2 from './components/DocTitle2';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import UserForm from './components/UserForm';
import UseForm from './components/UseForm';

function App() {
  return (
    <div className="App">
{/*   ******* basic counter app using useState/useEffect to change the Doc-Title ********   */}

          {/* <DocTitle1 /> */}



{/*    We want to change Doc-Title from the other component.
       We basically reused the entire <code/>. Which we should avoid.
*/}
        {/* <DocTitle2 /> */}



{/*    To avoid Coping the Code. We can create a Custom-Hook.
      That's called the useDocumentTitle  Hook
*/}







{/*     Here we are trying to make an another attempt to use Custom-Hook

*/}
      {/* <Counter1 />
      <Counter2 /> */}










{/* ***** 3rd example of Custom-Hooks ******* */}

      <UserForm />

    </div>
  );
}

export default App;
