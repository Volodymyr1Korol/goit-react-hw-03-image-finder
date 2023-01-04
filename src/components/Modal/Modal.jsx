import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

export class Modal extends Component {
  static propTypes = { setLargeImageURL: PropTypes.func.isRequired, largeImageURL: PropTypes.string.isRequired}
  componentDidMount() {
    document.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscape);
  }

  handleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.setLargeImageURL('');
    }
  };

  onEscape = event => {
    if (event.code === 'Escape') {
      this.props.setLargeImageURL('');
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleClick}>
        <div className="Modal">
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
