import styles from "../styles/noticias.module.scss";
import Image from "next/image";
import SearchBar from "../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { convertDurationToTimeString } from "../utils/timeToString";
import Header from "../components/Header/Header";

const noticias = [
  {
    id: 1,
    img: "/botz1 1.svg",
    title: "Fliper ",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 20000,
  },
  {
    id: 2,
    img: "/botz2.svg",
    title: " do Ramo",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 20000,
  },
  {
    id: 3,
    img: "/botz2.svg",
    title: " Ramo",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 20000,
  },
  {
    id: 4,
    img: "/botz1 1.svg",
    title: "Fiz um aplicativo pro ramo e olha no que deu",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 20000,
  },
  {
    id: 5,
    img: "/botz1 1.svg",
    title: "Bute",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 2000,
  },
  {
    id: 6,
    img: "/botz1 1.svg",
    title: "Bot",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 2000,
  },
  {
    id: 7,
    img: "/botz1 1.svg",
    title: "Sla",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 20000,
  },
  {
    id: 8,
    img: "/botz1 1.svg",
    title: "VemVemVem",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 2000,
  },
  {
    id: 9,
    img: "/botz1 1.svg",
    title: "9",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 2,
  },
  {
    id: 10,
    img: "/botz1 1.svg",
    title: "10",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 2,
  },
  {
    id: 11,
    img: "/botz1 1.svg",
    title: "11",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 2,
  },
  {
    id: 12,
    img: "/botz1 1.svg",
    title: "12",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 2,
  },
  {
    id: 13,
    img: "/botz1 1.svg",
    title: "13",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 2,
  },
  {
    id: 14,
    img: "/botz1 1.svg",
    title: "V14",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 2,
  },
  {
    id: 15,
    img: "/botz1 1.svg",
    title: "15",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 2,
  },
  {
    id: 16,
    img: "/botz1 1.svg",
    title: "16",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 2,
  },
  {
    id: 17,
    img: "/botz1 1.svg",
    title: "17",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    time: 2,
  },
];

export default function Noticias() {
  const noticiasAtuais = noticias.slice(0, 3);

  const [click, setClick] = useState(1);
  function setNotLenght(click, noticias) {
    const newNot = noticias.slice(3, 3 + click * 5);
    return newNot;
  }
  const noticiasAntigas = setNotLenght(click, noticias);

  const [searchQuery, setSearchQuery] = useState("");
  const filterNot = (noticiasAntigas, searchQuery) => {
    if (!searchQuery) {
      return noticiasAntigas;
    }
    return noticiasAntigas.filter((noticiasAntigas) => {
      const notName = noticiasAntigas.title.toLowerCase();
      return notName.includes(searchQuery);
    });
  };
  const filteredNot = filterNot(noticiasAntigas, searchQuery);

  const tamanho = noticias.length;

  return (
    <div>
      <Header />
      <div className={styles.all}>
        <div className={styles.recente}>
          <div className={styles.jornal}>
            <h1>Jornal do Ramo</h1>
          </div>
          <div className={styles.grid}>
            {noticiasAtuais.map((noticias, idx) => (
              <div>
                {idx == 0 ? (
                  <div className={styles.primeira}>
                    <img src={noticias.img} />
                    <div className={styles.info}>
                      <h1>{noticias.title}</h1>
                      <p>{noticias.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className={styles.noticiasRecentes}>
                    <img src={noticias.img} />
                    <div className={styles.info}>
                      <h1>{noticias.title}</h1>
                      <p>{noticias.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.mais}>
            <span>Mais Recentes</span>
          </div>
          <div className={styles.triangulo}>
            <img src="/Triangulo.svg" />
          </div>
        </div>
        <div className={styles.half}>
          <div className={styles.antigas}>
            <h1>Notícias</h1>
            <div className={styles.searchbar}>
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
            <div className={styles.total}>
              {filteredNot.map((noticias) => (
                <div className={styles.noticias}>
                  <table>
                    <tr>
                      <td>
                        <img src={noticias.img} />
                      </td>
                      <td>
                        <h1>{noticias.title}</h1>
                        <p>{noticias.description}</p>
                        <p className={styles.time}>
                          {" "}
                          Há {convertDurationToTimeString(noticias.time)}{" "}
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
              ))}
            </div>
            <div>
              {click < tamanho / 5 - 1 ? (
                <button
                  className={styles.button}
                  onClick={() => setClick(click + 1)}
                >
                  Veja Mais
                </button>
              ) : null}
              {click > 1 ? (
                <button
                  className={styles.button2}
                  onClick={() => setClick(click - 1)}
                >
                  -
                </button>
              ) : null}
            </div>
          </div>
          <div className={styles.social}>
            <a target="_blank" href="https://pt-br.facebook.com/ramocefet/">
              <img src="/Facebook.svg" />
            </a>
            <a target="_blank" href="https://www.instagram.com/ramocefet/">
              <img src="/Instagram.svg" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/ramocefet/"
            >
              <img src="/Linkedin.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
