import os

def convert_svg_to_jsx(input_path, output_path):
    with open(input_path, 'r') as f:
        svg_content = f.read()

    # Remove XML declaration and Doctype
    svg_content = svg_content.replace('<?xml version="1.0" encoding="utf-8"?>', '')
    svg_content = svg_content.replace('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">', '')
    
    # Replace class with className
    svg_content = svg_content.replace('class=', 'className=')
    
    # Add props to svg tag and fill=currentColor
    # Find <svg ... > and replace with <svg {...props} fill="currentColor" ... >
    # Simple string replacement for the opening tag might be tricky if it spans lines.
    # But looking at the file, it has 'id="world-map">'.
    svg_content = svg_content.replace('id="world-map">', 'id="world-map" fill="currentColor" {...props}>')
    
    # Wrap in React component
    jsx_content = f"""import React from 'react';

const WorldMap = (props) => (
{svg_content}
);

export default WorldMap;
"""

    with open(output_path, 'w') as f:
        f.write(jsx_content)

convert_svg_to_jsx('temp_map.svg', 'src/components/dashboard/WorldMap.jsx')
print("Converted SVG to JSX")
