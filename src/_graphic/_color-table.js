/**~ja
 * 色テーブル
 * @author Takuto Yanagida
 * @version 2019-10-12
 */
/**~en
 * Color table
 * @author Takuto Yanagida
 * @version 2019-10-12
 */


/**~ja
 * 色の名前が正しいかどうかをチェックします
 * @param {string} color 色の名前
 */
/**~en
 * Check if the color name is correct
 * @param {string} color Color name
 */
const checkColor = (color) => {
	if (COLOR_TO_RGB[color.toLowerCase()] === undefined) {
		//@ifdef ja
		throw new Error('色の名前が間違っています。');
		//@endif
		//@ifdef en
		throw new Error('The color name is incorrect.');
		//@endif
	}
};

/**~ja
 * 色の名前をRGBに直します
 * @param {string} color 色の名前
 * @param {number=} [alpha=1] アルファ
 * @return {Array<number>} RGB(A)
 */
/**~en
 * Convert color name to RGB
 * @param {string} color Color name
 * @param {number=} [alpha=1] Alpha
 * @return {Array<number>} RGB(A)
 */
const convertColorToRgb = (color, alpha = 1) => {
	return [...COLOR_TO_RGB[color.toLowerCase()], alpha];
};

const COLOR_TO_RGB = {
	'pink'             : /*#FFC0CB*/ [255, 192, 203], 'lightpink'           : /*#FFB6C1*/ [255, 182, 193],
	'hotpink'          : /*#FF69B4*/ [255, 105, 180], 'deeppink'            : /*#FF1493*/ [255, 20, 147],
	'palevioletred'    : /*#DB7093*/ [219, 112, 147], 'mediumvioletred'     : /*#C71585*/ [199, 21, 133],

	'lightsalmon'      : /*#FFA07A*/ [255, 160, 122], 'salmon'              : /*#FA8072*/ [250, 128, 114],
	'darksalmon'       : /*#E9967A*/ [233, 150, 122], 'lightcoral'          : /*#F08080*/ [240, 128, 128],
	'indianred'        : /*#CD5C5C*/ [205, 92, 92],   'crimson'             : /*#DC143C*/ [220, 20, 60],
	'firebrick'        : /*#B22222*/ [178, 34, 34],   'darkred'             : /*#8B0000*/ [139, 0, 0],
	'red'              : /*#FF0000*/ [255, 0, 0],

	'orangered'        : /*#FF4500*/ [255, 69, 0],    'tomato'              : /*#FF6347*/ [255, 99, 71],
	'coral'            : /*#FF7F50*/ [255, 127, 80],  'darkorange'          : /*#FF8C00*/ [255, 140, 0],
	'orange'           : /*#FFA500*/ [255, 165, 0],

	'yellow'           : /*#FFFF00*/ [255, 255, 0],   'lightyellow'         : /*#FFFFE0*/ [255, 255, 224],
	'lemonchiffon'     : /*#FFFACD*/ [255, 250, 205], 'lightgoldenrodyellow': /*#FAFAD2*/ [250, 250, 210],
	'papayawhip'       : /*#FFEFD5*/ [255, 239, 213], 'moccasin'            : /*#FFE4B5*/ [255, 228, 181],
	'peachpuff'        : /*#FFDAB9*/ [255, 218, 185], 'palegoldenrod'       : /*#EEE8AA*/ [238, 232, 170],
	'khaki'            : /*#F0E68C*/ [240, 230, 140], 'darkkhaki'           : /*#BDB76B*/ [189, 183, 107],
	'gold'             : /*#FFD700*/ [255, 215, 0],

	'cornsilk'         : /*#FFF8DC*/ [255, 248, 220], 'blanchedalmond'      : /*#FFEBCD*/ [255, 235, 205],
	'bisque'           : /*#FFE4C4*/ [255, 228, 196], 'navajowhite'         : /*#FFDEAD*/ [255, 222, 173],
	'wheat'            : /*#F5DEB3*/ [245, 222, 179], 'burlywood'           : /*#DEB887*/ [222, 184, 135],
	'tan'              : /*#D2B48C*/ [210, 180, 140], 'rosybrown'           : /*#BC8F8F*/ [188, 143, 143],
	'sandybrown'       : /*#F4A460*/ [244, 164, 96],  'goldenrod'           : /*#DAA520*/ [218, 165, 32],
	'darkgoldenrod'    : /*#B8860B*/ [184, 134, 11],  'peru'                : /*#CD853F*/ [205, 133, 63],
	'chocolate'        : /*#D2691E*/ [210, 105, 30],  'saddlebrown'         : /*#8B4513*/ [139, 69, 19],
	'sienna'           : /*#A0522D*/ [160, 82, 45],   'brown'               : /*#A52A2A*/ [165, 42, 42],
	'maroon'           : /*#800000*/ [128, 0, 0],

	'darkolivegreen'   : /*#556B2F*/ [85, 107, 47],   'olive'               : /*#808000*/ [128, 128, 0],
	'olivedrab'        : /*#6B8E23*/ [107, 142, 35],  'yellowgreen'         : /*#9ACD32*/ [154, 205, 50],
	'limegreen'        : /*#32CD32*/ [50, 205, 50],   'lime'                : /*#00FF00*/ [0, 255, 0],
	'lawngreen'        : /*#7CFC00*/ [124, 252, 0],   'chartreuse'          : /*#7FFF00*/ [127, 255, 0],
	'greenyellow'      : /*#ADFF2F*/ [173, 255, 47],  'springgreen'         : /*#00FF7F*/ [0, 255, 127],
	'mediumspringgreen': /*#00FA9A*/ [0, 250, 154],   'lightgreen'          : /*#90EE90*/ [144, 238, 144],
	'palegreen'        : /*#98FB98*/ [152, 251, 152], 'darkseagreen'        : /*#8FBC8F*/ [143, 188, 143],
	'mediumaquamarine' : /*#66CDAA*/ [102, 205, 170], 'mediumseagreen'      : /*#3CB371*/ [60, 179, 113],
	'seagreen'         : /*#2E8B57*/ [46, 139, 87],   'forestgreen'         : /*#228B22*/ [34, 139, 34],
	'green'            : /*#008000*/ [0, 128, 0],     'darkgreen'           : /*#006400*/ [0, 100, 0],

	'aqua'             : /*#00FFFF*/ [0, 255, 255],   'cyan'                : /*#00FFFF*/ [0, 255, 255],
	'lightcyan'        : /*#E0FFFF*/ [224, 255, 255], 'paleturquoise'       : /*#AFEEEE*/ [175, 238, 238],
	'aquamarine'       : /*#7FFFD4*/ [127, 255, 212], 'turquoise'           : /*#40E0D0*/ [64, 224, 208],
	'mediumturquoise'  : /*#48D1CC*/ [72, 209, 204],  'darkturquoise'       : /*#00CED1*/ [0, 206, 209],
	'lightseagreen'    : /*#20B2AA*/ [32, 178, 170],  'cadetblue'           : /*#5F9EA0*/ [95, 158, 160],
	'darkcyan'         : /*#008B8B*/ [0, 139, 139],   'teal'                : /*#008080*/ [0, 128, 128],

	'lightsteelblue'   : /*#B0C4DE*/ [176, 196, 222], 'powderblue'          : /*#B0E0E6*/ [176, 224, 230],
	'lightblue'        : /*#ADD8E6*/ [173, 216, 230], 'skyblue'             : /*#87CEEB*/ [135, 206, 235],
	'lightskyblue'     : /*#87CEFA*/ [135, 206, 250], 'deepskyblue'         : /*#00BFFF*/ [0, 191, 255],
	'dodgerblue'       : /*#1E90FF*/ [30, 144, 255],  'cornflowerblue'      : /*#6495ED*/ [100, 149, 237],
	'steelblue'        : /*#4682B4*/ [70, 130, 180],  'royalblue'           : /*#4169E1*/ [65, 105, 225],
	'blue'             : /*#0000FF*/ [0, 0, 255],     'mediumblue'          : /*#0000CD*/ [0, 0, 205],
	'darkblue'         : /*#00008B*/ [0, 0, 139],     'navy'                : /*#000080*/ [0, 0, 128],
	'midnightblue'     : /*#191970*/ [25, 25, 112],

	'lavender'         : /*#E6E6FA*/ [230, 230, 250], 'thistle'             : /*#D8BFD8*/ [216, 191, 216],
	'plum'             : /*#DDA0DD*/ [221, 160, 221], 'violet'              : /*#EE82EE*/ [238, 130, 238],
	'orchid'           : /*#DA70D6*/ [218, 112, 214], 'fuchsia'             : /*#FF00FF*/ [255, 0, 255],
	'magenta'          : /*#FF00FF*/ [255, 0, 255],   'mediumorchid'        : /*#BA55D3*/ [186, 85, 211],
	'mediumpurple'     : /*#9370DB*/ [147, 112, 219], 'blueviolet'          : /*#8A2BE2*/ [138, 43, 226],
	'darkviolet'       : /*#9400D3*/ [148, 0, 211],   'darkorchid'          : /*#9932CC*/ [153, 50, 204],
	'darkmagenta'      : /*#8B008B*/ [139, 0, 139],   'purple'              : /*#800080*/ [128, 0, 128],
	'indigo'           : /*#4B0082*/ [75, 0, 130],    'darkslateblue'       : /*#483D8B*/ [72, 61, 139],
	'rebeccapurple'    : /*#663399*/ [102, 51, 153],  'slateblue'           : /*#6A5ACD*/ [106, 90, 205],
	'mediumslateblue'  : /*#7B68EE*/ [123, 104, 238],

	'white'            : /*#FFFFFF*/ [255, 255, 255], 'snow'                : /*#FFFAFA*/ [255, 250, 250],
	'honeydew'         : /*#F0FFF0*/ [240, 255, 240], 'mintcream'           : /*#F5FFFA*/ [245, 255, 250],
	'azure'            : /*#F0FFFF*/ [240, 255, 255], 'aliceblue'           : /*#F0F8FF*/ [240, 248, 255],
	'ghostwhite'       : /*#F8F8FF*/ [248, 248, 255], 'whitesmoke'          : /*#F5F5F5*/ [245, 245, 245],
	'seashell'         : /*#FFF5EE*/ [255, 245, 238], 'beige'               : /*#F5F5DC*/ [245, 245, 220],
	'oldlace'          : /*#FDF5E6*/ [253, 245, 230], 'floralwhite'         : /*#FFFAF0*/ [255, 250, 240],
	'ivory'            : /*#FFFFF0*/ [255, 255, 240], 'antiquewhite'        : /*#FAEBD7*/ [250, 235, 215],
	'linen'            : /*#FAF0E6*/ [250, 240, 230], 'lavenderblush'       : /*#FFF0F5*/ [255, 240, 245],
	'mistyrose'        : /*#FFE4E1*/ [255, 228, 225],

	'gainsboro'        : /*#DCDCDC*/ [220, 220, 220], 'lightgray'           : /*#D3D3D3*/ [211, 211, 211],
	'silver'           : /*#C0C0C0*/ [192, 192, 192], 'darkgray'            : /*#A9A9A9*/ [169, 169, 169],
	'gray'             : /*#808080*/ [128, 128, 128], 'dimgray'             : /*#696969*/ [105, 105, 105],
	'lightslategray'   : /*#778899*/ [119, 136, 153], 'slategray'           : /*#708090*/ [112, 128, 144],
	'darkslategray'    : /*#2F4F4F*/ [47, 79, 79],    'black'               : /*#000000*/ [0, 0, 0],
};