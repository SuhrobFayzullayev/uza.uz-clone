"use client";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addAudio, changeAudio } from "@/redux/slices/audioSlice";
import AudioCard from "./components/audioCard";
import AudioPlayer from "./components/audioPlayer";
import { merriWeather } from "@/public/fonts";
import ModalComponent from "../../../components/modalComponent";
import AddAudioForm from "./components/addAudioForm";
import { Button } from "antd";

export default function Audio() {
  const audioSelector = useAppSelector((state) => state.audio.data);
  const audioIdSelector = useAppSelector((state) => state.audio.activeAudioId);
  const dateSelector = useAppSelector((state) => state.date);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeAudioId, setActiveAudioId] = useState<number>(audioIdSelector);
  const [play, setPlay] = useState(false);
  const dispatch = useAppDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => (play ? setPlay(false) : setPlay(true));

  const handleNextAudio = () => {
    setActiveAudioId((prev: number) =>
      prev == audioSelector.length - 1 ? prev : (prev += 1)
    );
    dispatch(changeAudio(activeAudioId));
    setPlay(true);
  };

  const handlePrevAudio = () => {
    setActiveAudioId((prev: number) => (prev <= 0 ? 0 : (prev -= 1)));
    dispatch(changeAudio(activeAudioId));
    setPlay(true);
  };

  useEffect(() => setActiveAudioId(audioSelector[0]?.id), [audioSelector]);

  useEffect(() => {
    audioRef.current?.src
      ? play
        ? audioRef.current.play()
        : audioRef.current.pause()
      : null;
  }, [play]);

  const changeAudioFunc = (id: number) => {
    setActiveAudioId(id);
    dispatch(changeAudio(activeAudioId));

    setPlay(true);
  };

  const addAudios = (title: string, img: string, audio: string) => {
    setPlay(false);

    const newAudio = {
      title,
      date: dateSelector.date,
      time: dateSelector.time,
      audio,
      img,
      id: audioSelector.length,
    };

    dispatch(addAudio(newAudio));
    dispatch(changeAudio(audioSelector.length));
    setActiveAudioId(audioSelector.length);
  };

  return (
    <div className="shadow-lg bg-white">
      <div className="px-[80px] pt-[45px] pb-[25px] flex justify-between items-center">
        <h1
          className={`${merriWeather.className} text-[33px] text-[#1B4586] font-[400]`}
        >
          Аудио хабарлар
        </h1>
        <Button onClick={() => setIsModalOpen(true)} type="primary">
          Add Audio
        </Button>
      </div>
      <AudioPlayer
        audioRef={audioRef}
        handleNextAudio={handleNextAudio}
        handlePrevAudio={handlePrevAudio}
        togglePlay={togglePlay}
        activeAudioId={activeAudioId}
        setActiveAudioId={setActiveAudioId}
        dataSelector={audioSelector}
        play={play}
        setPlay={setPlay}
      />
      <div className="px-[50px] py-4">
        {audioSelector?.map((audio) => (
          <AudioCard
            key={audio.id}
            activeAudioId={activeAudioId}
            changeAudioFunc={changeAudioFunc}
            id={audio.id}
            img={audio.img}
            title={audio.title}
            date={audio.date}
            time={audio.time}
          />
        ))}
      </div>
      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title="Add Audio"
      >
        <AddAudioForm addAudios={addAudios} />
      </ModalComponent>
    </div>
  );
}
