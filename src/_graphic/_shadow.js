/**~ja
 * 影
 * @version 2021-05-21
 */
/**~en
 * Shadow
 * @version 2021-05-21
 */
class Shadow {

	/**~ja
	 * 影を作る
	 * @constructor
	 * @param {Shadow=} base 元になる影
	 */
	/**~en
	 * Make a shadow
	 * @constructor
	 * @param {Shadow=} base Original shadow
	 */
	constructor(base) {
		this._blur    = base ? base._blur    : 0;
		this._color   = base ? base._color   : 'rgb(0 0 0 / 0%)';
		this._offsetX = base ? base._offsetX : 0;
		this._offsetY = base ? base._offsetY : 0;
	}

	/**~ja
	 * 設定を配列でもらう
	 * @return {Array} 設定
	 */
	/**~en
	 * Get the setting as an array
	 * @return {Array} Setting
	 */
	get() {
		return [this._blur, this._color, this._offsetX, this._offsetY];
	}

	/**~ja
	 * 設定する
	 * @param {?number} blur ぼかし量
	 * @param {?string} color 色
	 * @param {?number} x 影のずれx
	 * @param {?number} y 影のずれy
	 */
	/**~en
	 * Set
	 * @param {?number} blur Blur amount
	 * @param {?string} color Color
	 * @param {?number} x Shadow offset x
	 * @param {?number} y Shadow offset y
	 */
	set(blur, color, x, y) {
		//~ja 値がセットされているか!=でチェック
		//~en Check if the value is set with !=
		if (blur  != null) this._blur    = blur;
		if (color != null) this._color   = color;
		if (x     != null) this._offsetX = x;
		if (y     != null) this._offsetY = y;
	}

	/**~ja
	 * クリアする
	 */
	/**~en
	 * Clear
	 */
	clear() {
		this._blur    = 0;
		this._color   = 'rgb(0 0 0 / 0%)';
		this._offsetX = 0;
		this._offsetY = 0;
	}

	/**~ja
	 * 影の設定を適用する
	 * @param {Paper|CanvasRenderingContext2D} ctx 紙／キャンバス・コンテキスト
	 */
	/**~en
	 * Assign the shadow settings
	 * @param {Paper|CanvasRenderingContext2D} ctx Paper or canvas context
	 */
	assign(ctx) {
		ctx.shadowBlur    = this._blur;
		ctx.shadowColor   = this._color;
		ctx.shadowOffsetX = this._offsetX;
		ctx.shadowOffsetY = this._offsetY;
	}

}