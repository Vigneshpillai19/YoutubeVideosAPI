import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

import youtube from '../apis/youtube';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            videoList: [],
            selectedVideo: null
        }
    }

    componentDidMount() {
        this.onFormSubmit('jenkins');
        document.body.style.overflow = "hidden";
    }

    onFormSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // console.log(response.data);
        this.setState({
            videoList: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    changeVideo = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return (
            <div className=" ui container" style={{ paddingTop: '2%' }}>
                <SearchBar onSubmit={this.onFormSubmit} />
                {this.state.selectedVideo !== null ?
                    <div className="ui grid" style={{ overflow: "hidden" }}>
                        <div className="row">
                            <div className="ten wide column">
                                <VideoPlayer video={this.state.selectedVideo} />
                            </div>
                            <div className="six wide column" style={{ height: "70vh", overflowY: "scroll", padding: "20px" }}>
                                <VideoList videos={this.state.videoList} onClickVideo={this.changeVideo} />
                            </div>
                        </div>
                    </div>
                : <div>Loading...</div>}
            </div>
        )
    }
}

export default App;
