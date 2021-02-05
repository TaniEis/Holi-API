import React, { useState, useEffect } from 'react';
import './App.css';
import ItemList from './components/item-list'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './components/reducer'
import ActionList from './components/action-list'
import Header from './components/header'
import ItemPage from './components/item-page'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

const initialState = {
  itemList: [],
  itemListByName: [],
}

const store = createStore(reducer, initialState)

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])
  return (
    <main className={mainClass}>
      <Provider store={store}>
        <Router>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Switch>
            <Route path="/item/:id" component={ItemPage} />
            <Route path="/">
              <ActionList />
              <ItemList />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </main>
  );
}

export default App;
