import { useState } from "react";
import axios from "axios";

const ShortenUrl = () => {
  const [longUrl, setLongUrl] = useState("");
  const [normalizedLongUrl, setNormalizedLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://short--urls.herokuapp.com/api/create/", { longUrl })
      .then(({ data }) => {
        setStatus("Link Shortened!");
        setShortUrl("https://short--urls.herokuapp.com/" + data.slug);
        setNormalizedLongUrl(data.longUrl);
      })
      .catch((error) => setStatus(error.response.data.message));
  };

  return (
    <div>
      <h4 className="status">{status}</h4>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="input link here"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        ></input>
        <button type="submit">Shorten</button>
      </form>
      <div className="results">
        <p>
          Short URL:{" "}
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        </p>
        <p>
          Your URL:{" "}
          <a href={normalizedLongUrl} target="_blank" rel="noreferrer">
            {" "}
            {normalizedLongUrl}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ShortenUrl;
