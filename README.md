<h1>Drum Machine</h1>

<p>Welcome to the Drum Machine project!</p>

<p>You can access the project at the following link: <a href="https://storied-mandazi-f7028a.netlify.app/">https://storied-mandazi-f7028a.netlify.app/</a></p>

<h2>Features</h2>

<ul>
  <li>9 clickable drum pad elements, each with a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.</li>
  <li>Within each .drum-pad, there is an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).</li>
  <li>When you click on a .drum-pad element, the audio clip contained in its child audio element will be triggered.</li>
  <li>When you press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element will be triggered (e.g. pressing the Q key will trigger the drum pad which contains the string Q, pressing the W key will trigger the drum pad which contains the string W, etc.).</li>
  <li>When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).</li>
</ul>

<p>We hope you enjoy using the Drum Machine project!</p>
