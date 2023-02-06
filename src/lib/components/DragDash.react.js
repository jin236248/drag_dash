import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DragDash extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleOnDragStop = this.handleOnDragStop.bind(this);
    }

    handleOnDragStop(event, data) {
        console.log(event);
        console.log(data);
        this.props.setProps({
            lastX: data.lastX,
            lastY: data.lastY,
        });
        if (data.deltaX !==0 || data.deltaY !==0) {
            this.props.setProps({
            ismoved: true,
            });
        }
        else {
            this.props.setProps({
            ismoved: false,
            });
        }
    }

    render() {
        const {id, label, setProps, value} = this.props;

        return (
            <div id={this.props.id}>
                <Draggable onStop={this.handleOnDragStop}
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
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func,

    /**
     * ...
     */
    onStop: PropTypes.func,

    /**
     * ...
     */
    axis: PropTypes.string,

    /**
     * ...
     */
    handle: PropTypes.string,

    /**
     * ...
     */
    defaultPosition: PropTypes.object,

    /**
     * ...
     */
    position: PropTypes.object,

    /**
     * ...
     */
    grid: PropTypes.array,

    /**
     * ...
     */
    lastX: PropTypes.number,

    /**
     * ...
     */
    lastY: PropTypes.number,

    /**
     * ...
     */
    deltaX: PropTypes.number,

    /**
     * ...
     */
    deltaY: PropTypes.number,

    /**
     * ...
     */
    ismoved: PropTypes.bool,

    /**
     * ...
     */
    children: PropTypes.node,

    /**
     * ...
     */
    disabled: PropTypes.bool
};
