import { Component } from "react";

class Api extends Component {
    state = {
    pictureNew: []
}

    componentDidUpdate(prevProp, prevState) {
        if (prevProp.picture !== this.props.picture) {
            console.log(this.props.picture)
            fetch(`https://pixabay.com/api/?q=${this.props.picture}&page=1&key=37294582-8910eff478423fe25551a6b37&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(pictureNew => this.setState({pictureNew: pictureNew.hits}))
    }
}


    render() {
        const {pictureNew} = this.state;
        return <ul class="gallery">
            {
     
       }
</ul>
    }
}

export default Api;