import React from 'react';
import styles from './AppleMusic.module.css'
import { NavLink } from 'react-router-dom';
import rectangle from './../../../assets/rectangle.png';
import note from './../../../assets/note.png';
import apple from './../../../assets/apple@2x.png';
import map from './../../../assets/image.png';
import ContactCard from './ContactCard/ContactCard';


const styleImage = {
    display: "flex",
    height: "auto",
    width: "auto",
    backgroundImage: `url(${rectangle})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
}

const styleSecImage = {
    width: "904px",
    height: "437px",
    margin: "37px 135px",
    backgroundImage: `url(${note})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
}

const logoDiv = {
    width: "70px",
    height: "70px",
    backgroundImage: `url(${apple})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
}



const AppleMusic = () => {
    return (
        <div className={styles.contentMain}>
            <div className={styles.container}>
                <div className={styles.navBlock}>
                    <NavLink to='#'>Скидочные купоны</NavLink>
                    <div>•</div>
                    <NavLink to='#'>Развлечения</NavLink>
                </div>
                <div className={styles.titleBlock}>
                    <h1>Apple Music за СПАСИБО</h1>
                </div>
                <div className={styles.imageBlock}>
                    <div style={styleImage}>
                        <div style={styleSecImage}>
                        </div>
                    </div>
                    <div>
                        <div className={styles.date}>C 17 Декабря 2018 г. по 17 Декабря 2019 г.</div>
                        <p className={styles.firstP}>Обменивайте 169 СПАСИБО на месяц подписки в Apple Music и наслаждайтесь любимой музыкой без перерыва.</p>
                        <ul>
                            <li>Получите доступ к миллионам альбомов, исполнителей и песен</li>
                            <li>Эксклюзивный и оригинальный контент</li>
                            <li>Вы можете отказаться от подписки в любой момент</li>
                            <li>Скачивайте любимую музыку и слушайте офлайн</li>
                        </ul>
                        <div className={styles.firstB}><b>Как использовать промо-код:</b></div>
                        <ol>
                            <li>Откройте приложение «Музыка» и введите существующий Apple ID и пароль для входа в учетную запись.
                                (Если у   вас нет Apple ID, вам будет предложено его создать).</li>
                            <li>Нажмите на «3 месяца бесплатно» (специальное предложение для новых пользователей).</li>
                            <li>Выберите индивидуальную подписку и нажмите «3 месяца бесплатно».</li>
                            <li>Перейдите в учетную запись.</li>
                            <li>Нажмите «Использовать код».</li>
                            <li>Введите 12-значный код.</li>
                            <li>Получите сообщение с подтверждением использования кода.</li>
                        </ol>
                        <p className={styles.secondP}>Под персональными данными в целях настоящих Правил понимаются персональные данные Участников
                            Акции и иных лиц - субъектов персональных данных как они определены в Законе «О персональных данных».
                            Под обработкой персональных данных в настоящих <b>Правилах понимается любое действие</b> (операция),
                            совершаемое в целях проведения Акции, или совокупность действий(операций), совершаемых с использованием
                            средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись,
                            систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу
                            (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных
                            данных, предоставленных Участником Акции Банку/ Уполномоченной Компании.</p>
                        <div className={styles.secondNavBlock}>
                            <div><NavLink to='#'>Подробнее об Apple Music для Android</NavLink></div>
                            <div><NavLink to='#'>Правила акции</NavLink></div>
                        </div>
                        <p className={styles.thirdP}>
                            Только при оформлении индивидуальной подписки. По окончании пробного периода подписка будет продлена автоматически.
                            4 месяца бесплатно только для новых подписчиков. Срок действия кода истекает 31 января 2020 года. Это промокод, который
                            не подлежит перепродаже, обмену на денежный эквивалент и замене в случае кражи или потери. Предложение действительно при
                            оформлении индивидуальной подписки на Apple Music на территории Российской Федерации. Требуется учетная запись iTunes.
                            Применяются соответствующие условия <NavLink to='#'>(подробнее)</NavLink>.<br></br> Промокодом может воспользоваться лицо старше 13 лет, чье местоположение
                            совпадает со страной/регионом магазина, в котором активируется код.<br></br>Требуются совместимые продукты и сервисы. Apple Music —
                            зарегистрированная торговая марка Apple. Apple не является участником или спонсором этой промоакции.
                        </p>
                    </div>
                </div>
                <div className={styles.contactBlock}>
                    <div className={styles.logo}>
                        <div style={logoDiv}></div>
                        <h3>Apple Music</h3>
                    </div>
                    <div className={styles.contacts}>
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                    </div>
                    <div className={styles.map}>
                        <img src={map} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppleMusic;
