import * as React from "react";

import "./styles.css";

interface IProps {
  children: object;
  title: string;
  description: string;
  close(): void;
}

class Dialog extends React.Component<IProps> {
  public dialog: HTMLElement | null;

  public render() {
    return (
      <div
        role="dialog"
        tabIndex={0}
        className="popup-outer-container"
        aria-hidden={false}
        aria-labelledby="dialog-title"
        ref={(popup) => {
          this.dialog = popup;
          }
        }
      >
        <h5
          id="dialog-title"
          className="is-visually-hidden"
        >
          {this.props.title}
        </h5>
        <p
          id="dialog-description"
          className="is-visually-hidden"
        >
          {this.props.description}
        </p>
        <div className="popup-inner-container">
          <button
            className="close-icon"
            title="close-dialog"
            onClick={this.props.close}
          >
            ×
          </button>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Dialog;