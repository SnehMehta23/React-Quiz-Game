import * as Tone from "tone";

function MusicalButton({ children }) {
  const playMusic = () => {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttackRelease("C4", "4n");
    synth.triggerAttackRelease("C4", "4n", now + 1);
    synth.triggerAttackRelease("D4", "4n", now + 2);
    synth.triggerAttackRelease("C4", "3n", now + 3);
    synth.triggerAttackRelease("F4", "3n", now + 4);
    synth.triggerAttackRelease("E4", "3n", now + 5);
    synth.triggerAttackRelease("C4", "6n", now + 6.5);
    synth.triggerAttackRelease("C4", "3n", now + 7);
    synth.triggerAttackRelease("D4", "6n", now + 8);
    synth.triggerAttackRelease("C4", "6n", now + 9);
    synth.triggerAttackRelease("G4", "6n", now + 10);
    synth.triggerAttackRelease("F4", "4n", now + 11);
    synth.triggerAttackRelease("C4", "3n", now + 12);
    synth.triggerAttackRelease("C4", "6n", now + 13);
    synth.triggerAttackRelease("C5", "3n", now + 14);
    synth.triggerAttackRelease("A4", "6n", now + 15);
    synth.triggerAttackRelease("F4", "6n", now + 16);
    synth.triggerAttackRelease("E4", "6n", now + 17);
    synth.triggerAttackRelease("D4", "4n", now + 18);
    // TODO: Figure out what B flat note is in scientific pitch notation
    synth.triggerAttackRelease("B4", "4n", now + 19);
    synth.triggerAttackRelease("B4", "4n", now + 20);

    synth.triggerAttackRelease("A4", "4n", now + 21);
    synth.triggerAttackRelease("F4", "4n", now + 22);
    synth.triggerAttackRelease("G4", "4n", now + 23);
    synth.triggerAttackRelease("F4", "4n", now + 24);
  };
  return <button onClick={playMusic}>{children}</button>;
}
export default MusicalButton;
