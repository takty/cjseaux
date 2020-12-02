/**~ja
 * スピーカー・パッチ
 * @version 2020-12-02
 */
/**~en
 * Speaker patch
 * @version 2020-12-02
 */
class SpeakerPatch extends Patch {

	constructor(synth, params) {
		super();
		this._synth = synth;

		this._g = this._synth.context().createGain();
		this._g.connect(this._synth.context().destination);

		this._g.gain.value = params.gain ?? 1;
	}

	getInput(key = null) {
		switch (key) {
			case 'gain': return this._g.gain;
		}
		return this._g;
	}

	getOutput(key = null) {
		return null;
	}

	set(key, val) {
		key = Patch._NORM_LIST[key] ?? key;
		val = Patch._NORM_LIST[val] ?? val;
		switch (key) {
			case 'gain': this._g.gain.value = val; break;
		}
	}

}