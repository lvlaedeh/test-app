import React from 'react'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Account from './pages/Account/Account'
import Layout from './component/layout/layout'
import Table from './pages/Table/Table'
import ToDo from './pages/ToDo/ToDo'

function App() {
  return (
    <div>
      <Router>
        <Layout>
         <Switch>
            <Route path="/" exact component={Account}/>
            <Route path="/table" component={Table}/>
            <Route path="/list" component={ToDo} />
         </Switch>
        </Layout>
      </Router>
    </div>
  )
}


export default App;
