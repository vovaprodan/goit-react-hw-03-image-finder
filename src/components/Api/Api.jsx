import { Component } from "react";
import {ImageGallery} from '../ImageGallery/ImageGallery'

class Api extends Component {
    state = {
        pictureNew: [],
        loading: false,     
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
        const {pictureNew, loading,} = this.state;
        return <div>
            {loading && <div>загружаем</div>}
            <ImageGallery pictureNew={pictureNew} />
        </div>
    }
}

export default Api;