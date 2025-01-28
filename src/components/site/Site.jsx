import "./site.css"
import "./header.css"
import "./projects.css"
import "./adaptation.css"

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
                <span> Добро пожаловать! Меня зовут Ангелина, создаю современные и удобные сайты. Люблю решать сложные задачи. Всегда стремлюсь к качественному результату. Буду рада вашим проектам.</span>
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
                    <li>Опыт работы с <b>Vite</b> для сброки и разработки проектов</li>
                </ul>
                <hr />
            </div>
        </div>
    )
}

function Section3() {
    return(
        <div className="sect3">
            <h3>Мои проекты</h3>
            <div id="projects" className="projects">
                <div className="pr_cont">
                    <div className="project pr_1"></div>
                    <a target="_blank" className="btn" href="https://angelina878.github.io/winterwarmth/">Перейти (новогодний сайт)</a>
                </div>
            </div>
        </div>
    )
}
function Footer(){
    return (
        <div className="footer">
            <p>контакты</p>
            <div id="contacts" className="contacts">
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
            <Section3 />
            <Footer />
        </div>

    )
}