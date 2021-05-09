import React from 'react'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Account from './component/Account/Account'
import Layout from './component/layout/layout'

function App() {
  return (
    <div>
      <Router>
        <Layout>
         <Switch>
            <Route path="/" exact component={Account}/>
         </Switch>
        </Layout>
      </Router>
    </div>
  )
}


export default App;
