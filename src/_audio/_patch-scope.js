/**~ja
 * スコープ・パッチ
 * @extends {Patch}
 * @version 2020-12-08
 */
/**~en
 * Scope patch
 * @extends {Patch}
 * @version 2020-12-08
 */
class ScopePatch extends Patch {

	/**~ja
	 * スコープ・パッチを作る
	 * @param {Synth} synth シンセ
	 * @param {object} params パラメーター
	 */
	/**~en
	 * Make a scope patch
	 * @param {Synth} synth Synth
	 * @param {object} params Parameters
	 */
	constructor(synth, params) {
		super(synth);

		this._sync   = params.synchronized ?? true;
		this._widget = params.widget       ?? null;

		this._a = this._synth.context().createAnalyser();
		this._a.smoothingTimeConstant = 0.9;

		if (this._widget) this._update();
	}

	/**~ja
	 * ウィジェットを更新する（ライブラリ内だけで使用）
	 * @private
	 */
	/**~en
	 * Update the scope widget (used only in the library)
	 * @private
	 */
	_update() {
		this._widget.setSynchronized(this._sync);
		this._widget.setDataSource(new DataSource(this._a));
	}

	/**~ja
	 * 入力（オーディオ・ノード）
	 * @return {AudioNode} オーディオ・ノード
	 */
	/**~en
	 * Input (audio node)
	 * @return {AudioNode} Audio node
	 */
	getInput() {
		return this._a;
	}

	/**~ja
	 * 出力（オーディオ・ノード）
	 * @return {AudioNode} オーディオ・ノード
	 */
	/**~en
	 * Output (audio node)
	 * @return {AudioNode} Audio node
	 */
	getOutput() {
		return this._a;
	}

}

assignAlias(ScopePatch);

/**~ja
 * データ・ソース（ライブラリ内だけで使用）
 * @private
 * @version 2020-12-08
 */
/**~en
 * Data source (used only in the library)
 * @private
 * @version 2020-12-08
 */
class DataSource {

	constructor(a) {
		this._a = a;
	}

	size() {
		return this._a.fftSize;
	}

	sampleRate() {
		return this._a.context.sampleRate;
	}

	getTimeDomainData(ret) {
		this._a.getByteTimeDomainData(ret);
	}

	getFrequencyData(ret) {
		this._a.getByteFrequencyData(ret);
	}

	minDecibels() {
		return this._a.minDecibels;
	}

	maxDecibels() {
		return this._a.maxDecibels;
	}

}