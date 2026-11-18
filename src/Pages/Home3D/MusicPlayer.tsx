import { useEffect, useRef, useState } from "react";
import { FiPause, FiPlay, FiSkipBack, FiSkipForward, FiVolume1, FiVolume2 } from "react-icons/fi";
import { useT } from "../../context/Preferences";
import { musicPlaylist } from "../../data/music";

export function MusicPlayer() {
  const t = useT();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackVersion, setTrackVersion] = useState(0);
  const [volume, setVolume] = useState(0.55);
  const volumeRef = useRef(volume);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(true);
  const track = musicPlaylist[trackIndex];
  volumeRef.current = volume;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !shouldPlay) return;
    audio.pause();
    audio.currentTime = 0;
    audio.load();
    audio.volume = volumeRef.current;
    void audio.play().then(() => setIsPlaying(true)).catch(() => {
      // Browsers may require a user gesture before starting music.
      setShouldPlay(false);
      setIsPlaying(false);
    });
  }, [shouldPlay, trackIndex, trackVersion]);

  useEffect(() => () => audioRef.current?.pause(), []);

  const selectTrack = (offset: number) => {
    setShouldPlay(true);
    setIsPlaying(false);
    setTrackIndex((current) => (current + offset + musicPlaylist.length) % musicPlaylist.length);
    setTrackVersion((version) => version + 1);
  };

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      setShouldPlay(true);
      void audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      setShouldPlay(false);
      setIsPlaying(false);
    }
  };

  return <aside className="home3d-player" aria-label={t("musicPlayer")}>
    <audio ref={audioRef} src={track.src} preload="metadata" onEnded={() => selectTrack(1)} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
    <img className="home3d-player-cover" src={track.cover} alt={`${track.artist} — ${track.title}`} />
    <div className="home3d-player-info"><span className="home3d-player-label">{t("musicPlayer")}</span><strong>{track.title}</strong><small>{track.artist}</small>
      <label className="home3d-volume"><FiVolume1 aria-hidden="true" /><input aria-label={t("volume")} type="range" min="0" max="1" step="0.01" value={volume} onChange={(event) => { const nextVolume = Number(event.target.value); setVolume(nextVolume); if (audioRef.current) audioRef.current.volume = nextVolume; }} /><FiVolume2 aria-hidden="true" /></label>
    </div>
    <div className="home3d-player-controls">
      <button type="button" aria-label={t("previousTrack")} title={t("previousTrack")} onClick={() => selectTrack(-1)}><FiSkipBack aria-hidden="true" /></button>
      <button className="home3d-play-toggle" type="button" aria-label={isPlaying ? t("pauseMusic") : t("playMusic")} title={isPlaying ? t("pauseMusic") : t("playMusic")} onClick={togglePlayback}>{isPlaying ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" />}</button>
      <button type="button" aria-label={t("nextTrack")} title={t("nextTrack")} onClick={() => selectTrack(1)}><FiSkipForward aria-hidden="true" /></button>
    </div>
  </aside>;
}
