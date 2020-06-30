import React, { useState } from "react";

import Input from "../../components/Input/Input";

import "./News.scss";

const News = () => {
  const [news, setNews] = useState([
    {
      id: Math.random().toString(),
      title: "Twitter",
      icon: require("../../assets/socials/tw-1.svg"),
      desc: "The city of Gorilla Pappi ! #GorillaPappi#2020 https://test.com",
      created_at: "20.06.2020",
    },
    {
      id: Math.random().toString(),
      title: "Twitter",
      icon: require("../../assets/socials/tw-1.svg"),
      desc: "The city of Gorilla Pappi ! #GorillaPappi#2020 https://test.com",
      created_at: "20.06.2020",
    },
  ]);

  return (
    <div className="news">
      <div className="news__col">
        <ul className="news-list">
          {news.map(({ id, title, icon, desc, created_at }) => (
            <li className="news-list__item" key={id}>
              <div className="news-list__head">
                <img src={icon} alt="News Title Icon" className="news-list__head-icon" />
                <div className="news-list__head-title">{title}</div>
              </div>
              <div className="news-list__info">{desc}</div>
              <div className="news-list__created-at">{created_at}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="news__col news__col--other">
        <div className="news-letter">
          <div className="news-letter__title">
            Get the latest info about #GorillaPappi
          </div>
          <div className="news-letter__info">
            You wish to know everything about #GorillaPappi before everybody
            does and be the center of attention, get our newsletter.
          </div>
          <div className="news-letter__input">
            <Input name="news-letter" placeholder="Enter your email" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
