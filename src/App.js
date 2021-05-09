import React from 'react'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Account from './component/Account/Account'
import Layout from './component/layout/layout'
import Table from './component/Table/Table'

function App() {
  return (
    <div>
      <Router>
        <Layout>
         <Switch>
            <Route path="/" exact component={Account}/>
            <Route path="/table" component={Table}/>
         </Switch>
        </Layout>
      </Router>
    </div>
  )
}


export default App;
