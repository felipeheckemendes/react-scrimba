import { useState, useEffect } from "react";

export default function Main() {
  /**
   * Challenge: move the hardcoded meme info into React
   * state. Use an object with `topText`, `bottomText`,
   * and `image` properties, and set the initial values to
   * the ones hardcoded below.
   */
  const [meme, setMeme] = useState({
    imgSrc: "http://i.imgflip.com/1bij.jpg",
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
  });

  const [data, setData] = useState(undefined);

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      setData(await res.json());
    }
    getMemes();
  }, []);

  function changeImage() {
    setMeme((prevMeme) => {
      const newImg =
        data.data.memes[Math.floor(Math.random() * data.data.memes.length)].url;
      return {
        ...prevMeme,
        imgSrc: newImg,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button onClick={changeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imgSrc} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
