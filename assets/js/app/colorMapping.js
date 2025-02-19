// Mapping for all the W3Schools color names
// https://www.w3schools.com/colors/colors_names.asp

// This mapping associates each W3Schools color name with a corresponding text color
// to ensure better readability. The text color is determined based on the relative
// luminance of the background color. If the background color is dark, the text color
// is set to white (#ffffff). If the background color is light, the text color is set
// to black (#000000).
// The algorithm for determining the relative luminance and the text color is provided
// at the end of this file.
window.colorMapping = {
    "aliceblue": "#000000",
    "antiquewhite": "#000000",
    "aqua": "#000000",
    "aquamarine": "#000000",
    "azure": "#000000",
    "beige": "#000000",
    "bisque": "#000000",
    "black": "#ffffff",
    "blanchedalmond": "#000000",
    "blue": "#ffffff",
    "blueviolet": "#ffffff",
    "brown": "#ffffff",
    "burlywood": "#000000",
    "cadetblue": "#000000",
    "chartreuse": "#000000",
    "chocolate": "#ffffff",
    "coral": "#000000",
    "cornflowerblue": "#000000",
    "cornsilk": "#000000",
    "crimson": "#ffffff",
    "cyan": "#000000",
    "darkblue": "#ffffff",
    "darkcyan": "#ffffff",
    "darkgoldenrod": "#ffffff",
    "darkgray": "#000000",
    "darkgreen": "#ffffff",
    "darkgrey": "#000000",
    "darkkhaki": "#000000",
    "darkmagenta": "#ffffff",
    "darkolivegreen": "#ffffff",
    "darkorange": "#000000",
    "darkorchid": "#ffffff",
    "darkred": "#ffffff",
    "darksalmon": "#000000",
    "darkseagreen": "#000000",
    "darkslateblue": "#ffffff",
    "darkslategray": "#ffffff",
    "darkslategrey": "#ffffff",
    "darkturquoise": "#000000",
    "darkviolet": "#ffffff",
    "deeppink": "#ffffff",
    "deepskyblue": "#000000",
    "dimgray": "#ffffff",
    "dimgrey": "#ffffff",
    "dodgerblue": "#ffffff",
    "firebrick": "#ffffff",
    "floralwhite": "#000000",
    "forestgreen": "#ffffff",
    "fuchsia": "#ffffff",
    "gainsboro": "#000000",
    "ghostwhite": "#000000",
    "gold": "#000000",
    "goldenrod": "#000000",
    "gray": "#ffffff",
    "green": "#ffffff",
    "greenyellow": "#000000",
    "grey": "#ffffff",
    "honeydew": "#000000",
    "hotpink": "#000000",
    "indianred": "#ffffff",
    "indigo": "#ffffff",
    "ivory": "#000000",
    "khaki": "#000000",
    "lavender": "#000000",
    "lavenderblush": "#000000",
    "lawngreen": "#000000",
    "lemonchiffon": "#000000",
    "lightblue": "#000000",
    "lightcoral": "#000000",
    "lightcyan": "#000000",
    "lightgoldenrodyellow": "#000000",
    "lightgray": "#000000",
    "lightgreen": "#000000",
    "lightgrey": "#000000",
    "lightpink": "#000000",
    "lightsalmon": "#000000",
    "lightseagreen": "#000000",
    "lightskyblue": "#000000",
    "lightslategray": "#ffffff",
    "lightslategrey": "#ffffff",
    "lightsteelblue": "#000000",
    "lightyellow": "#000000",
    "lime": "#000000",
    "limegreen": "#000000",
    "linen": "#000000",
    "magenta": "#ffffff",
    "maroon": "#ffffff",
    "mediumaquamarine": "#000000",
    "mediumblue": "#ffffff",
    "mediumorchid": "#ffffff",
    "mediumpurple": "#ffffff",
    "mediumseagreen": "#000000",
    "mediumslateblue": "#ffffff",
    "mediumspringgreen": "#000000",
    "mediumturquoise": "#000000",
    "mediumvioletred": "#ffffff",
    "midnightblue": "#ffffff",
    "mintcream": "#000000",
    "mistyrose": "#000000",
    "moccasin": "#000000",
    "navajowhite": "#000000",
    "navy": "#ffffff",
    "oldlace": "#000000",
    "olive": "#ffffff",
    "olivedrab": "#ffffff",
    "orange": "#000000",
    "orangered": "#ffffff",
    "orchid": "#000000",
    "palegoldenrod": "#000000",
    "palegreen": "#000000",
    "paleturquoise": "#000000",
    "palevioletred": "#ffffff",
    "papayawhip": "#000000",
    "peachpuff": "#000000",
    "peru": "#000000",
    "pink": "#000000",
    "plum": "#000000",
    "powderblue": "#000000",
    "purple": "#ffffff",
    "rebeccapurple": "#ffffff",
    "red": "#ffffff",
    "rosybrown": "#000000",
    "royalblue": "#ffffff",
    "saddlebrown": "#ffffff",
    "salmon": "#000000",
    "sandybrown": "#000000",
    "seagreen": "#ffffff",
    "seashell": "#000000",
    "sienna": "#ffffff",
    "silver": "#000000",
    "skyblue": "#000000",
    "slateblue": "#ffffff",
    "slategray": "#ffffff",
    "slategrey": "#ffffff",
    "snow": "#000000",
    "springgreen": "#000000",
    "steelblue": "#ffffff",
    "tan": "#000000",
    "teal": "#ffffff",
    "thistle": "#000000",
    "tomato": "#ffffff",
    "turquoise": "#000000",
    "violet": "#000000",
    "wheat": "#000000",
    "white": "#000000",
    "whitesmoke": "#000000",
    "yellow": "#000000",
    "yellowgreen": "#000000"
  };

/*

import re

def hex_to_rgb(hex_color):
    """Convert hex color to an RGB tuple."""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def relative_luminance(r, g, b):
    """Calculate the relative luminance of an RGB color."""
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def is_dark_color(hex_color, threshold=180):
    """Determine if a color is dark based on its relative luminance."""
    r, g, b = hex_to_rgb(hex_color)
    luminance = relative_luminance(r, g, b)
    return luminance < threshold

def process_markdown_table(md_table):
    """Process a markdown table of colors and generate a JS color mapping."""
    lines = md_table.strip().split('\n')
    color_dict = {}

    for line in lines[2:]:
        match = re.match(r'\|\s*(\w+)\s*\|\s*(#[0-9A-Fa-f]{6})\s*\|', line)
        if match:
            name, hex_code = match.groups()
            color_dict[name.lower()] = "#ffffff" if is_dark_color(hex_code) else "#000000"

    sorted_colors = dict(sorted(color_dict.items()))

    js_output = "window.colorMapping = {\n"
    js_output += ",\n".join(f'  "{name}": "{hex_code}"' for name, hex_code in sorted_colors.items())
    js_output += "\n};"

    return js_output

# Example usage
md_input = """
| Color Name | Hex Code |
|------------|----------|
| aliceblue | #F0F8FF |
| antiquewhite | #FAEBD7 |
| aqua | #00FFFF |
| aquamarine | #7FFFD4 |
| azure | #F0FFFF |
| beige | #F5F5DC |
| bisque | #FFE4C4 |
| black | #000000 |
| blanchedalmond | #FFEBCD |
| blue | #0000FF |
| blueviolet | #8A2BE2 |
| brown | #A52A2A |
| burlywood | #DEB887 |
| cadetblue | #5F9EA0 |
| chartreuse | #7FFF00 |
| chocolate | #D2691E |
| coral | #FF7F50 |
| cornflowerblue | #6495ED |
| cornsilk | #FFF8DC |
| crimson | #DC143C |
| cyan | #00FFFF |
| darkblue | #00008B |
| darkcyan | #008B8B |
| darkgoldenrod | #B8860B |
| darkgray | #A9A9A9 |
| darkgrey | #A9A9A9 |
| darkgreen | #006400 |
| darkkhaki | #BDB76B |
| darkmagenta | #8B008B |
| darkolivegreen | #556B2F |
| darkorange | #FF8C00 |
| darkorchid | #9932CC |
| darkred | #8B0000 |
| darksalmon | #E9967A |
| darkseagreen | #8FBC8F |
| darkslateblue | #483D8B |
| darkslategray | #2F4F4F |
| darkslategrey | #2F4F4F |
| darkturquoise | #00CED1 |
| darkviolet | #9400D3 |
| deeppink | #FF1493 |
| deepskyblue | #00BFFF |
| dimgray | #696969 |
| dimgrey | #696969 |
| dodgerblue | #1E90FF |
| firebrick | #B22222 |
| floralwhite | #FFFAF0 |
| forestgreen | #228B22 |
| fuchsia | #FF00FF |
| gainsboro | #DCDCDC |
| ghostwhite | #F8F8FF |
| gold | #FFD700 |
| goldenrod | #DAA520 |
| gray | #808080 |
| grey | #808080 |
| green | #008000 |
| greenyellow | #ADFF2F |
| honeydew | #F0FFF0 |
| hotpink | #FF69B4 |
| indianred | #CD5C5C |
| indigo | #4B0082 |
| ivory | #FFFFF0 |
| khaki | #F0E68C |
| lavender | #E6E6FA |
| lavenderblush | #FFF0F5 |
| lawngreen | #7CFC00 |
| lemonchiffon | #FFFACD |
| lightblue | #ADD8E6 |
| lightcoral | #F08080 |
| lightcyan | #E0FFFF |
| lightgoldenrodyellow | #FAFAD2 |
| lightgray | #D3D3D3 |
| lightgrey | #D3D3D3 |
| lightgreen | #90EE90 |
| lightpink | #FFB6C1 |
| lightsalmon | #FFA07A |
| lightseagreen | #20B2AA |
| lightskyblue | #87CEFA |
| lightslategray | #778899 |
| lightslategrey | #778899 |
| lightsteelblue | #B0C4DE |
| lightyellow | #FFFFE0 |
| lime | #00FF00 |
| limegreen | #32CD32 |
| linen | #FAF0E6 |
| magenta | #FF00FF |
| maroon | #800000 |
| mediumaquamarine | #66CDAA |
| mediumblue | #0000CD |
| mediumorchid | #BA55D3 |
| mediumpurple | #9370DB |
| mediumseagreen | #3CB371 |
| mediumslateblue | #7B68EE |
| mediumspringgreen | #00FA9A |
| mediumturquoise | #48D1CC |
| mediumvioletred | #C71585 |
| midnightblue | #191970 |
| mintcream | #F5FFFA |
| mistyrose | #FFE4E1 |
| moccasin | #FFE4B5 |
| navajowhite | #FFDEAD |
| navy | #000080 |
| oldlace | #FDF5E6 |
| olive | #808000 |
| olivedrab | #6B8E23 |
| orange | #FFA500 |
| orangered | #FF4500 |
| orchid | #DA70D6 |
| palegoldenrod | #EEE8AA |
| palegreen | #98FB98 |
| paleturquoise | #AFEEEE |
| palevioletred | #DB7093 |
| papayawhip | #FFEFD5 |
| peachpuff | #FFDAB9 |
| peru | #CD853F |
| pink | #FFC0CB |
| plum | #DDA0DD |
| powderblue | #B0E0E6 |
| purple | #800080 |
| rebeccapurple | #663399 |
| red | #FF0000 |
| rosybrown | #BC8F8F |
| royalblue | #4169E1 |
| saddlebrown | #8B4513 |
| salmon | #FA8072 |
| sandybrown | #F4A460 |
| seagreen | #2E8B57 |
| seashell | #FFF5EE |
| sienna | #A0522D |
| silver | #C0C0C0 |
| skyblue | #87CEEB |
| slateblue | #6A5ACD |
| slategray | #708090 |
| slategrey | #708090 |
| snow | #FFFAFA |
| springgreen | #00FF7F |
| steelblue | #4682B4 |
| tan | #D2B48C |
| teal | #008080 |
| thistle | #D8BFD8 |
| tomato | #FF6347 |
| turquoise | #40E0D0 |
| violet | #EE82EE |
| wheat | #F5DEB3 |
| white | #FFFFFF |
| whitesmoke | #F5F5F5 |
| yellow | #FFFF00 |
| yellowgreen | #9ACD32 |
"""

*/