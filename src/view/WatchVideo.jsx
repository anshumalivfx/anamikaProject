import {Player} from "video-react";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import React, {Component} from 'react';
import 'video-react/dist/video-react.css';
class WatchVideo extends Component {
    render() {
        const { open, toggleModal, videosrc } = this.props;
        return (
            <Modal
                open={open}
                onClose={toggleModal}
                styles={{
                    modal: {
                        maxWidth: "unset",
                        width: "80%",
                        padding: "unset"
                    },
                    overlay: {
                        background: "rgba(0, 0, 0, 0.5)"
                    },
                    closeButton: {
                        background: "yellow"
                    }

                }}
                center

            >
                <Player
                    width="100%"
                    height="100%"
                    src={videosrc}
                    playing={true}
                />
            </Modal>

        );
    }
}

export default WatchVideo;