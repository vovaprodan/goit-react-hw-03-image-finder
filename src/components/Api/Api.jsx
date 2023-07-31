import { Component } from "react";
import { ImageGallery } from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal'

class Api extends Component {
    state = {
        pictureNew: [],
        loading: false,  
         showModal: false
    }
    toggleModal = () => {
    this.setState(({showModal})=> ({
      showModal : !showModal,
    }))
  }

    componentDidUpdate(prevProp, prevState) {
        if (prevProp.picture !== this.props.picture) {
          this.setState({loading: true, pictureNew: []})
            fetch(`https://pixabay.com/api/?q=${this.props.picture}&page=${this.props.page}&key=37294582-8910eff478423fe25551a6b37&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(pictureNew => this.setState({ pictureNew: pictureNew.hits }))
                .finally(() => this.setState({loading:false}))
    }
}


    render() {
        const { pictureNew, loading, showModal } = this.state;
        return <div>
            {loading && <div>загружаем</div>}
            <ImageGallery onToggle={this.toggleModal} pictureNew={pictureNew} />
            {showModal && <Modal onClose={this.toggleModal} /> }
        </div>
    }
}

export default Api;