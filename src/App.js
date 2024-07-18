import {Component} from 'react'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    item: languageGreetingsList[0],
    btnColor1: true,
    btnColor2: false,
    btnColor3: false,
  }

  onChangeLanguage = event => {
    if (event.target.id === '1') {
      this.setState({
        item: languageGreetingsList[0],
        btnColor1: true,
        btnColor2: false,
        btnColor3: false,
      })
    } else if (event.target.id === '2') {
      this.setState({
        item: languageGreetingsList[1],
        btnColor1: false,
        btnColor2: true,
        btnColor3: false,
      })
    } else {
      this.setState({
        item: languageGreetingsList[2],
        btnColor1: false,
        btnColor2: false,
        btnColor3: true,
      })
    }
  }

  render() {
    const {item, btnColor1, btnColor2, btnColor3} = this.state
    return (
      <div className="main-container">
        <h1 className="title">Multilingual Greetings</h1>
        <ul className="buttons-container">
          <li>
            <button
              type="button"
              onClick={this.onChangeLanguage}
              id={1}
              className={`button-style ${btnColor1 ? 'button-color' : null}`}
            >
              English
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={this.onChangeLanguage}
              id={2}
              className={`button-style ${btnColor2 ? 'button-color' : null}`}
            >
              Tamil
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={this.onChangeLanguage}
              id={3}
              className={`button-style ${btnColor3 ? 'button-color' : null}`}
            >
              Telugu
            </button>
          </li>
        </ul>
        <img
          src={item.imageUrl}
          alt={item.imageAltText}
          className="image-setting"
        />
      </div>
    )
  }
}

export default App
