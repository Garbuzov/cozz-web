import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import HeroBlock, { RegisterLink, HeroTeaserBlock, CardsBlock, ReviewBlock, RegisterBlock, FAQBlock } from './Blocks';
import * as ROUTES from '../../constants/routes';

const questions = [
  { title: 'Что такое Cozz?', text: '' },
  {
    title: 'Кто такие профессиональные риелторы?',
    text:
      'Профессиональные риелторы Cozz — это специалисты подтвердившие, что отработали на рынке недвижимости не менее трёх лет и совершили не менее двадцати сделок.',
  },
  { title: 'Как получить больше клиентов?', text: '' },
];

const pains = [
  {
    // icon: '<i class="fas fa-users"></i>',
    title: 'Высокая конкуренция',
    text:
      'Отсутствие лицензирования риелторской деятельности позволяет любому желающему назваться риелтором. Сейчас таких желающих около 500 000 человек.',
  },
  {
    // icon: '<i class="fas fa-user-times"></i>',
    title: 'Недоверие к&nbsp;риелторам',
    text:
      'Свободный доступ к&nbsp;риелторской деятельности порождает массу некомпетентных специалистов, чья некачественная работа негативно сказывается на&nbsp;образе риелтора в&nbsp;целом.',
  },
  {
    // icon: '<i class="fas fa-adjust"></i>',
    title: 'Заниженные комиссии',
    text:
      '"Чёрные" риелторы соблазняют клиентов низкими комиссиями, так&nbsp;как сами не&nbsp;стоят на&nbsp;учёте, не&nbsp;платят налоги и&nbsp;конечно&nbsp;же, не&nbsp;страхуют свою ответственность. ',
  },
];

const solutions = [
  {
    title: 'Горячие ЛИДы',
    text: 'Все полученные вами обращения будут от уже лояльных людей, так как они выбрали вас сами на основании данных.',
  },
  {
    title: 'Экономию времени',
    text:
      'Развивая свой профиль на Cozz вы стимулируете прямые обращения клиентов к вам и экономите время на их отдельном поиске.',
  },
  {
    title: 'Увеличение заработка',
    text:
      'Меньше времени на поиски, больше времени для клиентов и прямой риелторской работы, а значит больше заработок. ',
  },
];

function RealtorLandingPage() {
  return (
    <section className="landing-page">
      <Container>
        <HeroBlock
          imgToRight
          left={
            <>
              <h1 data-text="риелторам">
                Находим&nbsp;клиентов
                <br />
                профессиональным
                <br />
                риелторам
              </h1>
              <p>
                Регистрируйтесь и&nbsp;зарабатывайте&nbsp;больше
                <br />
                вместе с Cozz
              </p>
              <RegisterLink />
            </>
          }
          right={<Image className="hero-image__img" fluid src="./img/img_2.png" />}
        />

        <HeroTeaserBlock title="Вы несете убытки" accent="убытки">
          <p>
            До 75% вашего времени уходит на поиски новых клиентов,
            <br />а не на работу с ними. Вам приходиться сталкиваться с&nbsp;такими факторами как:
          </p>
        </HeroTeaserBlock>

        <CardsBlock cards={pains} />

        <HeroBlock
          imgToRight={false}
          right={<Image className="hero-image__img hero-image__img--pt" fluid src="./img/img_1.png" />}
          left={
            <>
              <h2 data-text="лучшим:">Cozz помогает лучшим:</h2>
              <ol>
                <li>
                  <p>
                    <Link href={ROUTES.SIGN_UP}>Зарегистрируйтесь</Link> в&nbsp;сервисе Cozz и&nbsp;тщательно заполните
                    свой профиль в&nbsp;личном кабинете
                  </p>
                </li>
                <li>
                  <p>
                    Cozz проанализирует ваши данные и предложит вашу кандидатуру клиентам с наиболее подходящими вашему
                    профилю задачами.
                  </p>
                </li>
                <li>
                  <p>
                    Отвечайте на обращения от выбравших вас клиентов, назначайте им встречи и продавайте свои услуги.
                  </p>
                </li>
                <li>
                  <p>Повышайте свой статус и вес в системе, качественно предоставляя услуги и пополняя свой профиль.</p>
                </li>
              </ol>
            </>
          }
        />

        <HeroTeaserBlock title="С Cozz вы получаете..." accent="получаете..." />
        <CardsBlock cards={solutions} />

        <ReviewBlock img="./img/pic-review_01.png">
          <p>
            — Когда я ищу клиентов сам, то&nbsp;могу работать с&nbsp;пятью клиентами в&nbsp;месяц, когда мне предоставляют&nbsp;ЛИДЫ&nbsp;—&nbsp;с&nbsp;двацатью.
          </p>
          <em>Риелтор Алексей П.</em>
        </ReviewBlock>

        <HeroBlock
          imgToRight
          left={
            <>
              <h2 data-text="c&nbsp;Cozz">Условия сотруднечества с&nbsp;Cozz</h2>
              <ol>
                <li>
                  <p>Риелтор выплачивает Cozz 10% от комиссии оплаченой клиентом пришедшим с сайта cozz.ru</p>
                </li>
                <li>
                  <p>
                    За каждый 3 сделки с клиентами cozz.ru, сервис снижает комиссию для риелтора на 0,5%, но не ниже
                    5,5%
                  </p>
                </li>
              </ol>
            </>
          }
          right={<Image className="hero-image__img" fluid src="./img/img_3.png" />}
        />

        <RegisterBlock />

        {/* <FAQBlock questions={questions} /> */}
      </Container>
    </section>
  );
}
export default RealtorLandingPage;

export { RegisterLink };
