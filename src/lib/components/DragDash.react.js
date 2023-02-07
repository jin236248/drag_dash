import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

export default class DragDash extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onDragStop = this.onDragStop.bind(this);
    }

    onDragStop(event, data) {
        this.props.setProps({
            lastX: data.lastX,
            lastY: data.lastY,
        });
    }

    render() {
        const {id, label, setProps, value} = this.props;

        return (
            <div id={this.props.id}>
                <Draggable onStop={this.onDragStop}
                           axis={this.props.axis}
                           handle={this.props.handle}
                           defaultPosition={this.props.defaultPosition}
                           position={this.props.position}
                           grid={this.props.grid}
                           disabled={this.props.disabled}
                           >
                    <div>
                        {this.props.children}
                    </div>
                </Draggable>
            </div>
        );
    }
}

DragDash.defaultProps = {};

DragDash.propTypes = {
    id: PropTypes.string,
    setProps: PropTypes.func,
    onStop: PropTypes.func,
    axis: PropTypes.string,
    handle: PropTypes.string,
    defaultPosition: PropTypes.object,
    position: PropTypes.object,
    grid: PropTypes.array,
    lastX: PropTypes.number,
    lastY: PropTypes.number,
    deltaX: PropTypes.number,
    deltaY: PropTypes.number,
    children: PropTypes.node,
    disabled: PropTypes.bool
};
