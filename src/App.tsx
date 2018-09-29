import * as React from 'react';
import Button from "./components/Button";
import Dialog from "./components/Dialog";

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

  public checkForDialog() {
    if (this.state.showDialog) {
      return this.getDialog();
    } else {
      return false;
    }
  }

  public getDialog() {
    return (
      <Dialog
        title="Favourite Holiday Dialog"
        description="Add your favourite holiday to the list"
        close={this.toggleDialog}
      >
        <form className="dialog-content">
          <header>
            <h1 id="dialog-title">Holiday Entry</h1>
            <p id="dialog-description">Please enter your favourite holiday.</p>
          </header>
          <section>
            <div className="field-container">
              <label htmlFor="within-dialog">Favourite Holiday</label>
              <input id="within-dialog" />
            </div>
          </section>
          <footer>
            <div className="btns-container">
              <Button
                type="primary"
                clickHandler={this.toggleDialog}
                msg="Save"
              />
            </div>
          </footer>
        </form>
      </Dialog>
    );
  }

  public toggleDialog = () => {
    this.setState({ showDialog: !this.state.showDialog })
  };

  public render() {
    return (
      <div className="site-container">
        {this.checkForDialog()}
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
