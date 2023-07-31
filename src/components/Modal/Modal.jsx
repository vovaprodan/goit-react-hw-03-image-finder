import { Component } from "react";
import css from './Modal.module.css'


class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose()
    }
  })
}

    render() {
    return <div className={css.Overlay}>
  <div className={css.Modal}>
    <img src="" alt="" />
  </div>
</div>
}
}

export default Modal;