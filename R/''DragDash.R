# AUTO GENERATED FILE - DO NOT EDIT

''DragDash <- function(children=NULL, id=NULL, axis=NULL, defaultPosition=NULL, deltaX=NULL, deltaY=NULL, disabled=NULL, grid=NULL, handle=NULL, lastX=NULL, lastY=NULL, onStop=NULL, position=NULL) {
    
    props <- list(children=children, id=id, axis=axis, defaultPosition=defaultPosition, deltaX=deltaX, deltaY=deltaY, disabled=disabled, grid=grid, handle=handle, lastX=lastX, lastY=lastY, onStop=onStop, position=position)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DragDash',
        namespace = 'drag_dash',
        propNames = c('children', 'id', 'axis', 'defaultPosition', 'deltaX', 'deltaY', 'disabled', 'grid', 'handle', 'lastX', 'lastY', 'onStop', 'position'),
        package = 'dragDash'
        )

    structure(component, class = c('dash_component', 'list'))
}
