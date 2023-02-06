# AUTO GENERATED FILE - DO NOT EDIT

export ''_dragdash

"""
    ''_dragdash(;kwargs...)
    ''_dragdash(children::Any;kwargs...)
    ''_dragdash(children_maker::Function;kwargs...)


A DragDash component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): ...
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `axis` (String; optional): ...
- `defaultPosition` (Dict; optional): ...
- `deltaX` (Real; optional): ...
- `deltaY` (Real; optional): ...
- `disabled` (Bool; optional): ...
- `grid` (Array; optional): ...
- `handle` (String; optional): ...
- `ismoved` (Bool; optional): ...
- `lastX` (Real; optional): ...
- `lastY` (Real; optional): ...
- `position` (Dict; optional): ...
"""
function ''_dragdash(; kwargs...)
        available_props = Symbol[:children, :id, :axis, :defaultPosition, :deltaX, :deltaY, :disabled, :grid, :handle, :ismoved, :lastX, :lastY, :position]
        wild_props = Symbol[]
        return Component("''_dragdash", "DragDash", "drag_dash", available_props, wild_props; kwargs...)
end

''_dragdash(children::Any; kwargs...) = ''_dragdash(;kwargs..., children = children)
''_dragdash(children_maker::Function; kwargs...) = ''_dragdash(children_maker(); kwargs...)

