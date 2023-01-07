Drum Machine
Welcome to the Drum Machine project!

You can access the project at the following link: https://storied-mandazi-f7028a.netlify.app/

Features
9 clickable drum pad elements, each with a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

Within each .drum-pad, there is an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

When you click on a .drum-pad element, the audio clip contained in its child audio element will be triggered.

When you press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element will be triggered (e.g. pressing the Q key will trigger the drum pad which contains the string Q, pressing the W key will trigger the drum pad which contains the string W, etc.).

When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

We hope you enjoy using the Drum Machine project!
