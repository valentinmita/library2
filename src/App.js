import React from "react";

import Home from "./pages/Home";
import Nav from "./components/nav";
import{BrowserRouter as Router, Switch,Route} from "react-router-dom";
import GlobalStyle from "./appcss";

import BookDetail from "./components/BookDetail";



function App (){
  return (
    
    <Router>
    <div className="App">

    <GlobalStyle/>
    
      <Switch>

      < Route path ="/"  exact component = {Home} />
      <Route path ="/:id"  component = {BookDetail}/>

      </Switch>

    </div>
   </Router>
   
  );
}

export default App;
