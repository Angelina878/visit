import "./site.css"
import "./header.css"
import "./projects.css"
import "./adaptation.css"
import { useState, useRef, useEffect } from "react";


function Header(){
    return(
        <div className="head">
        <a href="#skills">Навыки</a>
        <a href="#projects">Проекты</a>
        <a href="#contacts">Контакты</a>
    </div>
    )
}
function Section1(){
    return(
        <div className="sect1">
            <div className="txt1">
                <span> Добро пожаловать! Меня зовут Ангелина, создаю современные и удобные сайты. Люблю решать сложные задачи и всегда стремлюсь к качественному результату. Буду рада вашим проектам.</span>
            </div>
            <div className="img"></div>
        </div>
    )
}
function Section2(){
    return(
        <div id="skills" className="sect2">
            <div className="txt2">
                <h2>⁛ Навыки</h2>
                <hr />
                <ul >
                    <li>Разработка web-сайтов на <b>React.js</b></li>
                    <li>Глубокое знание <b>html и css</b></li>
                    <li><b>Адаптивные сайты</b> под любые экраны</li>
                    <li>Создание и управление <b>базами данных</b></li> 
                    <li><b>JavaScript(ES6+)</b> базовые знания <b>асинхронного программирования</b> и работы с <b>API</b> </li>
                    <li>Базовый уровень работы с Git и GitHub</li>
                    <li>Создание чат-ботов (telegram / whatsapp)</li>
                    <li>Опыт работы с <b>Vite</b> для сброки и разработки проектов</li>
                </ul>
                <hr />
            </div>
        </div>
    )
}

function Education(){
    return(
            <div id="skills" className="sect2">
            <div className="txt2">
            <h2>♨︎ Образование </h2>
                <hr />
                <ul>
                    <li>Курс по фронтенд разработке в академии Morison</li>
                    <li>Карагандинский колледж экономики и техники</li>
                    <li>Участие в хакатонах/митапах</li>
                </ul>
                <hr />
            </div>
        </div>
    )
}

function Section3() {
  const [offset, setOffset] = useState(0); // текущий translateX в px (от 0 до -maxOffset)
  const projectsRef = useRef(null); // трек с карточками
  const containerRef = useRef(null); // видимая область (секция)
  const [maxOffset, setMaxOffset] = useState(0); // максимально допустимое положительное расстояние (contentWidth - containerWidth)

  // шаг прокрутки (поменяй на 80/100/150 если хочешь медленнее/быстрее)
  const step = 100;

  // пересчитать размеры и скорректировать offset при необходимости
  const recalc = () => {
    const wrapper = containerRef.current;
    const track = projectsRef.current;
    if (!wrapper || !track) return;

    const containerWidth = wrapper.clientWidth;
    const contentWidth = track.scrollWidth; // суммарная ширина карточек с gap

    const newMax = Math.max(contentWidth - containerWidth, 0);
    setMaxOffset(newMax);

    // ограничиваем offset в допустимых пределах: [ -newMax, 0 ]
    setOffset((prev) => Math.max(Math.min(prev, 0), -newMax));
  };

  useEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);

    // если в карточках есть картинки — пересчитать при их загрузке
    const imgs = projectsRef.current?.querySelectorAll("img") || [];
    const onImgLoad = () => recalc();
    imgs.forEach((img) => img.addEventListener("load", onImgLoad));

    return () => {
      window.removeEventListener("resize", recalc);
      imgs.forEach((img) => img.removeEventListener("load", onImgLoad));
    };
  }, []);

  // управление кнопками — маленькими шагами
  const handleLeft = () => setOffset((prev) => Math.min(prev + step, 0));
  const handleRight = () => setOffset((prev) => Math.max(prev - step, -maxOffset));

  // inline-стили чтобы гарантированно трек имел ширину контента и был выровнен по левому краю
  const wrapperStyle = {
    width: "100%",
    margin: "0 auto",
    overflow: "hidden",
  };

  const projectsStyle = {
    display: "flex",
    gap: "1em",
    transition: "transform 0.33s cubic-bezier(.22,.9,.23,1)",
    transform: `translateX(${offset}px)`,
    width: "max-content", // ключ: трек равен ширине всех карточек
    padding: "0.4em",
    boxSizing: "content-box",
  };

  return (
    <div className="sect3" ref={containerRef}>
      <h3>Мои проекты</h3>

      <button className="btn_left" onClick={handleLeft} aria-label="Влево">
        ◀
      </button>

      <div className="projects-wrapper" style={wrapperStyle}>
        <div ref={projectsRef} className="projects" style={projectsStyle}>
          <div className="pr_cont">
            <div className="project pr_1"></div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              href="https://angelina878.github.io/winterwarmth/"
            >
              Перейти (новогодний сайт)
            </a>
          </div>

          <div className="pr_cont">
            <div className="project pr_1"></div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              href="https://angelina878.github.io/winterwarmth/"
            >
              Перейти (новогодний сайт)
            </a>
          </div>

          <div className="pr_cont">
            <div className="project pr_1"></div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              href="https://angelina878.github.io/winterwarmth/"
            >
              Перейти (новогодний сайт)
            </a>
          </div>

          <div className="pr_cont">
            <div className="project pr_1"></div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              href="https://angelina878.github.io/winterwarmth/"
            >
              Перейти (новогодний сайт)
            </a>
          </div>
        </div>
      </div>

      <button className="btn_right" onClick={handleRight} aria-label="Вправо">
        ▶
      </button>
    </div>
  );
}

function Footer(){
    return (
        <div className="footer">
            <p>контакты</p>
            <div id="contacts" className="contacts">
                {/* добавить инсту */}
                <a target="_blank" href="https://github.com/Angelina878"><div className="contact github"></div></a>
                <a target="_blank" href="https://wa.me/87086044315"><div className="contact whatsapp"></div></a>
            </div>
        </div>
    )
}
export default function Site(){
    return(
        <div className="site">
            <Header />
            <Section1 />
            <Section2 />
            <Education />
            <Section3 />
            <Footer />
        </div>

    )
}