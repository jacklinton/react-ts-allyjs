import * as React from 'react';
import './App.css';

interface IAppState {
    showDialog: boolean;
}

class App extends React.Component<{}, IAppState> {
  public state: IAppState;

  constructor(props: {}) {
    super(props);

    this.state = {
      showDialog: false
    };
  }

  public toggleDialog = () => {
    this.setState({ showDialog: !this.state.showDialog })
  };

  public render() {
    return (
      <div className="site-container">
        <header>
          <h1>Ally.js with React &amp; Typescript</h1>
        </header>
        <main className="content-container">
          <div className="field-container">
            <label htmlFor="name-field">Name:</label>
            <input type="text" id="name-field" placeholder="Enter your name" />
          </div>
          <div className="field-container">
            <label htmlFor="food-field">Favorite Food:</label>
            <input type="text" id="food-field" placeholder="Enter your favorite food" />
          </div>
          <div className="field-container">
            <button
              className='btn primary'
              tabIndex={0}
              title="Open Dialog"
              onClick={this.toggleDialog}
            >
              Open Dialog
            </button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
