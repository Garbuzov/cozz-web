import React from 'react';
import { Breadcrumb, Image } from 'react-bootstrap';
import HeroBlock, {
  RegisterClientLink,
  HeroTeaserBlock,
  CardsBlock,
  ReviewBlock,
  RegisterBlock,
  FindBlock,
  FAQBlock,
  QuizLink,
} from './Blocks';

/* const questions = [
  { title: 'Что такое Cozz?', text: '' },
  {
    title: 'Кто такие профессиональные риелторы?',
    text:
      'Профессиональные риелторы Cozz — это специалисты подтвердившие, что отработали на рынке недвижимости не менее трёх лет и совершили не менее двадцати сделок.',
  },
  { title: 'Как получить больше клиентов?', text: '' },
]; */

const pains = [
  {
    title: '500 000 риелторов',
    text:
      'В России отсутствует лицензирование риелторской деятельности, что&nbsp;позволяет любому желающему назваться риелтором, при этом не&nbsp;имея необходимых знаний и&nbsp;навыков.',
  },
  {
    title: '15 000 агентств',
    text:
      'В агентствах недвижимости насчитывают около 150 000 риелторов. Большинство из&nbsp;них не&nbsp;проработает в&nbsp;этой отрасли больше года. Нет никаких гарантий, что с&nbsp;вами будет работать профессионал.',
  },
  {
    title: 'Рекомендации',
    text:
      'Весомой ценностью риелтора является его опыт работы с&nbsp;определенными задачами. Рекомендуемый риелтор может не&nbsp;подходить вам по&nbsp;задаче, а&nbsp;также просто не&nbsp;являться профессионалом.',
  },
];

function ClientLandingPage() {
  return (
    <>
      <HeroBlock
        imgToRight
        left={
          <>
            <h1 data-text="можно&nbsp;доверять">
              Найдите себе
              <br />
              риелтора, которому
              <br />
              можно&nbsp;доверять
            </h1>
            <p>Посмотрите какие специалисты лучше всего решат вашу задачу, на основании их статистики</p>
            <QuizLink title="Начать поиск" />

            <ul>
              <li>объективно</li>
              <li>быстро</li>
              <li>бесплатно</li>
            </ul>
          </>
        }
        right={<Image className="hero-image__img" fluid src="./img/img_1.png" />}
      />

      <HeroTeaserBlock title="Тысячи риелторов...">
        <p>
          Кому из них можно доверить свою задачу с&nbsp;недвижимостью?
          <br />
          Как не&nbsp;потерять время, нервы&nbsp;и&nbsp;деньги?
        </p>
      </HeroTeaserBlock>

      <CardsBlock cards={pains} />

      <HeroBlock
        imgToRight={false}
        right={<Image className="hero-image__img" fluid src="./img/img_3.png" />}
        left={
          <>
            <h2 data-text="вашей&nbsp;задачи">
              Cozz поможет
              <br />
              найти лучшего риелтора
              <br />
              для&nbsp;вашей задачи
            </h2>

            <ol>
              <li>
                <p>Внесите критерии задачи стоящей перед вами.</p>
              </li>
              <li>
                <p>
                  Cozz проанализирует вашу задачу и&nbsp;на&nbsp;основании статистики предложит наиболее подходящих для&nbsp;неё&nbsp;решения риелтеров.
                </p>
              </li>
              <li>
                <p>Сравните статистику рекомендуемых сервисом риелторов.</p>
              </li>
              <li>
                <p>Выберете лучшего для вас риелтора и&nbsp;начните с&nbsp;ним переговоры.</p>
              </li>
            </ol>
          </>
        }
      />

      <ReviewBlock img="holder.js/150x150">
        <p>
          — Когда я ищу клиентов сам, то могу работать с пятью клиентами в месяц, когда мне предоставляют ЛИДЫ - с
          двацатью.
        </p>
        <em>Риелтор Алексей П.</em>
      </ReviewBlock>

      {/* <HeroBlock
        imgToRight
        left={
          <>
            <h2 data-text="COZZ">Условия сотруднечества с&nbsp;COZZ</h2>
            <ol>
              <li>
                <p>Риелтор выплачивает COZZ 10% от комиссии оплаченой клиентом пришедшим с сайта cozz.ru</p>
              </li>
              <li>
                <p>
                  За каждый 3 сделки с клиентами cozz.ru, сервис снижает комиссию для риелтора на 0,5%, но не ниже 5,5%
                </p>
              </li>
            </ol>
          </>
        }
        right={<Image className="hero-image__img" fluid src="./img/img_2.png" />}
      /> */}

      <FindBlock />

      {/* <FAQBlock questions={questions} /> */}
    </>
  );
}
export default ClientLandingPage;

export { RegisterClientLink };
