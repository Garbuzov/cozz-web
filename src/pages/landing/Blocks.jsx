import React from 'react';
import { Row, Col, Image, Accordion, Card} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as ROUTES from 'shared/api/routes.js';
import * as ROLES from 'shared/api/firebase/roles.js';

export function RegisterLink({ title = 'Зарегистрироваться' }) {
  return (
    <Button variant="primary" className="btn btn-register" href={ROUTES.SIGN_UP}>
      {title}
    </Button>
  );
}

export function RegisterClientLink({ title = 'Зарегистрироваться' }) {
  return (
    <Button variant="primary" className="btn btn-register" href={ROUTES.SIGN_UP_CLIENT}>
      {title}
    </Button>
  );
}

export function QuizLink({ title = 'Начать поиск' }) {
  return (
    <Button variant="primary" className="btn-register" href={ROUTES.QUIZ}>
      {title}
    </Button>
  );
}

export function BgDot({ size, position, colorClass = 'bg-gray-20', filter }) {
  return (
    <i
      className={`bg-dot ${colorClass}`}
      style={{ width: size, height: size, left: position.left, top: position.top, filter }}
    />
  );
}

export default function HeroBlock({ left, right, imgToRight }) {
  const dots = [
    {
      size: '120px',
      position: {
        left: '-60px',
        top: '120px',
      },
      colorClass: 'bg-blue-40',
    },
    {
      size: '70px',
      position: {
        left: '75%',
        top: '65%',
      },
      colorClass: 'bg-red-40',
    },
    {
      size: '40px',
      position: {
        left: '70px',
        top: '55%',
      },
      colorClass: 'bg-yellow-20',
    },
    {
      size: '60px',
      position: {
        left: '65%',
        top: '0px',
      },
      colorClass: 'bg-blue-20',
      filter: 'blur(8px)',
    },
    {
      size: '40px',
      position: {
        left: '-15%',
        top: '70%',
      },
      colorClass: 'bg-red-40',
      filter: 'blur(8px)',
    },
    {
      size: '40px',
      position: {
        left: '25%',
        top: '75%',
      },
      colorClass: 'bg-yellow-60',
      filter: 'blur(8px)',
    },
  ];

  return (
    <Row className="hero-image-block bg-dotted">
      <Col className="hero-image__body" lg={6} xs={{ span: 12, order: imgToRight ? 'first' : 'last' }}>
        {left}
        {dots.map((item) => (
          <BgDot {...item} />
        ))}
      </Col>
      <Col xs={12} lg={1} />
      <Col className="d-none d-lg-flex" lg={{ span: 5 }} xs={{ span: 12, order: imgToRight ? 'last' : 'first' }}>
        <div className="hero-image__img-wrapper">{right}</div>
      </Col>
    </Row>
  );
}

export function CardsBlock({ cards }) {
  return (
    <>
      <Row xs={1} md={3} className="cards-block">
        {cards.map((item) => (
          <Col>
            <Card className="cards__card">
              <div className="cards__card-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
              <Card.Body>
                <Card.Title dangerouslySetInnerHTML={{ __html: item.title }} />
                {item.text && <Card.Text dangerouslySetInnerHTML={{ __html: item.text }} />}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export function HeroTeaserBlock({ title, accent, children }) {
  const dots = [
    {
      size: '120px',
      position: {
        left: '-40px',
        top: '20px',
      },
      filter: 'blur(2px)',
      colorClass: 'bg-red-20',
    },
    {
      size: '60px',
      position: {
        left: '85%',
        top: '5%',
      },
      filter: 'blur(8px)',
      colorClass: 'bg-blue-60',
    },
    {
      size: '40px',
      position: {
        left: '100%',
        top: '55%',
      },
      colorClass: 'bg-yellow-60',
    },
  ];
  return (
    <Row className="hero-teaser-block bg-dotted">
      <Col md={{ span: 10, offset: 1 }}>
        {dots.map((item) => (
          <BgDot {...item} />
        ))}
        <h2 data-text={accent}>{title}</h2>
        <div className="hero-teaser__body">{children}</div>
      </Col>
    </Row>
  );
}

export function ReviewBlock({ img, children }) {
  const dots = [
    {
      size: '40px',
      position: {
        left: '60%',
        top: '25%',
      },
      colorClass: 'bg-red-20',
    },
    {
      size: '100px',
      position: {
        left: '0',
        top: '30%',
      },
      colorClass: 'bg-blue-40',
    },
    {
      size: '140px',
      position: {
        left: '80%',
        top: '55%',
      },
      colorClass: 'bg-yellow-60',
    },
  ];
  return (
    <Row>
      <Col>
        <div className="landing-review-block">
          {dots.map((item) => (
            <BgDot {...item} />
          ))}
          <Col className="landing-review__img" xs={12} md={3}>
            <Image src={img} roundedCircle width="150" />
          </Col>
          <Col className="landing-review__body" xs={12} md={9}>
            {children}
          </Col>
        </div>
      </Col>
    </Row>
  );
}

export function FindBlock() {
  return (
    <Row className="landing-register-block justify-content-between">
      <Col xs={12} md={7}>
        <h2 data-text="вашей&nbsp;задачи?">Готовы найти лучшего риелтора для&nbsp;решения вашей&nbsp;задачи?</h2>
      </Col>
      <Col xs={12} md={{ span: 4, offset: 1 }} className="landing-register__cta">
        <QuizLink title="Начать поиск" />
      </Col>
    </Row>
  );
}

export function RegisterBlock() {
  return (
    <Row className="landing-register-block justify-content-between">
      <Col xs={12} md={7}>
        <h2 data-text="найти&nbsp;вас">Помогите вашим&nbsp;клиентам найти&nbsp;вас</h2>
      </Col>
      <Col xs={12} md={{ span: 4, offset: 1 }} className="landing-register__cta">
        <RegisterLink />
      </Col>
    </Row>
  );
}

export function FAQBlock({ questions }) {
  return (
    <Row className="landing-faq">
      <Col>
        <h2>Частые вопросы</h2>
        <Accordion>
          {questions.map((item, index) => (
            <Card key={item.title}>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey={index + 1}>
                {item.title}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={index + 1}>
                <Card.Body>
                  <p>{item.text}</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </Col>
    </Row>
  );
}
