/**~ja
 * ソース・パッチ
 * @extends {Patch}
 * @version 2021-05-21
 */
/**~en
 * Source patch
 * @extends {Patch}
 * @version 2021-05-21
 */
class SourcePatch extends Patch {

	/**~ja
	 * ソース・パッチを作る
	 * @constructor
	 * @param {Synth} synth シンセ
	 */
	/**~en
	 * Make a source patch
	 * @constructor
	 * @param {Synth} synth Synth
	 */
	constructor(synth) {
		super(synth);
		this._sw = this._synth.context().createGain();
		this._sw.gain.value = 0;
	}

	/**~ja
	 * 再生する
	 * @param {number=} time 時刻
	 */
	/**~en
	 * Play
	 * @param {number=} time Time
	 */
	play(time = this._synth.time()) {
		cancelAndHoldAtTime(this._sw.gain, time);
		this._sw.gain.setTargetAtTime(0, time, DELAY);
		this._sw.gain.setTargetAtTime(1, time, DELAY);
	}

	/**~ja
	 * 停止する
	 * @param {number=} time 時刻
	 */
	/**~en
	 * Stop
	 * @param {number=} time Time
	 */
	stop(time = this._synth.time()) {
		cancelAndHoldAtTime(this._sw.gain, time);
		this._sw.gain.setTargetAtTime(1, time, DELAY);
		this._sw.gain.setTargetAtTime(0, time, DELAY);
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
		return this._sw;
	}

}