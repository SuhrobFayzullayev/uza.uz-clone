import { GiNextButton } from "react-icons/gi";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { TAudio } from "@/type";

type TAudioPlayerProps = {
  activeAudioId: number;
  dataSelector: TAudio | any;
  play: boolean;
  setPlay: (value: boolean) => void;
  setActiveAudioId: (value: number) => void;
  handlePrevAudio: () => void;
  handleNextAudio: () => void;
  togglePlay: () => void;
  audioRef: HTMLAudioElement | any;
};

export default function AudioPlayer({
  activeAudioId,
  dataSelector,
  play,
  setPlay,
  handlePrevAudio,
  handleNextAudio,
  togglePlay,
  audioRef,
}: TAudioPlayerProps) {
  const audioSrc = dataSelector?.filter((v: any) => v.id == activeAudioId)?.[0]
    ?.audio;

  return (
    <div className="bg-gradient-to-t from-[#D9D9D9] to-[#F1F1F1] flex justify-between items-center h-[100px] p-16">
      <div className="flex items-center justify-between w-[200px] pr-[20px] h-[50px]">
        <button
          onClick={handleNextAudio}
          className="w-[45px] bg-white h-[45px] rounded-[50%] flex justify-center items-center"
        >
          <GiNextButton className="text-[20px] rotate-180 text-[#16438A]" />
        </button>
        <button
          onClick={togglePlay}
          className="w-[55px] bg-white h-[55px] mx-2 rounded-[50%] flex justify-center items-center"
        >
          {(play && (
            <BsPauseFill className="pl-1 text-[35px] text-[#16438A]" />
          )) || <BsFillPlayFill className="pl-1 text-[35px] text-[#16438A]" />}
        </button>
        <button
          onClick={handlePrevAudio}
          className="w-[45px] bg-white h-[45px] rounded-[50%] flex justify-center items-center"
        >
          <GiNextButton className="text-[20px] text-[#16438A]" />
        </button>
      </div>
      <audio
        ref={audioRef}
        src={`${audioSrc}`}
        controls
        autoPlay={play}
        className="w-full"
        onPlay={() => setPlay(true)}
        onPause={() => setPlay(false)}
      ></audio>
    </div>
  );
}
