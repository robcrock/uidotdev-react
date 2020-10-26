import React from 'react'

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage (selectedLanguage) {
    this.setState({
      selectedLanguage
    })
  }

  render () {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <ul className='flex-center'>
        {languages.map((language) => (
          <li key={language}>
            <button 
              className='btn-clear nav-link'
              style={language === this.state.selectedLanguage ? { color: '#dd0f0f'} : null}
              // It's very important that we pass React a function definition and NOT
              // a function invocation. If we were to only pass this.updateLanguage(language)
              // React would immediatly invoke the function when it renders the button.
              // To send a declaration we pass the button an arrow function.
              onClick={() => this.updateLanguage(language)}>
              {language}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}
