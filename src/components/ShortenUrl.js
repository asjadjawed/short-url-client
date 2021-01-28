import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const InputUrl = styled.input`
  padding: 1.2rem;
  margin: 5px 0;
  text-align: center;
  border: 2px solid white;
`;

const ShortenButton = styled.button`
  padding: 1.2rem;
  margin: 5px 0;
  text-align: center;
  border: 2px solid white;
`;

const UrlLink = styled.a`
  color: #fff;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  margin: 20px 5px;
  cursor: pointer;

  @media (max-width: 500px) {
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ShortenUrl = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://short--urls.herokuapp.com/api/create/", { longUrl })
      .then(({ data }) => {
        setStatus("Link Shortened!");
        setShortUrl("https://short--urls.herokuapp.com/" + data.slug);
      })
      .catch((error) => setStatus(error.response.data.message));
  };

  return (
    <div>
      <h4 className="status">
        <em>{status}</em>
      </h4>
      <form onSubmit={handleSubmit}>
        <InputUrl
          placeholder="input link here"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        ></InputUrl>

        <ShortenButton type="submit">Shorten</ShortenButton>
      </form>
      <div className="results">
        <p>
          <UrlLink href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl ? "🌐 " + shortUrl : null}
          </UrlLink>
        </p>
      </div>
    </div>
  );
};

export default ShortenUrl;
