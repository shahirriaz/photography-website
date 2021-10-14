import React, { useEffect } from "react";
import "./AboutUs.css";
import MainRow from "./MainRow";
import Footer from "./Footer";
import Banner from "./Banner";
import sun from "./images/sun.png";
import suitcase from "./images/suitcase.png";
import ring from "./images/ring.png";
// import mitchi from "./images/gallery/autumn/autumn_9.jpg";

function AboutUs() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="aboutUs">
      <Banner
        img="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
        // title="Om"
        // subTitle="Om oss"
        positionX="50%"
        positionY="70%"
        // isBtn
      />
      <MainRow
        subTitle="Vi er et ektepar som fotograferer familier, par og barn. Fotografi er noe vi begge har alltid vært interessert, og det gir oss mulighet til å skape noe magisk sammen. Vi får møte så mange fantastiske mennesker, og får muligheten til å vitne og forevige både store og små øyeblikk i deres liv. Dette gir oss glede, og er drivkraften vår."
        isFontColorWhite
        isPadding
      />
      <div className="aboutUs__mainContainer--1">
        <div className="aboutUs__left">
          <div className="left__heading">
            <h1>Hvem er vi?</h1>
          </div>
          <div className="left__paragraph">
            <p>
              Vi er fascinert av mennesker og deres relasjoner, og det er derfor
              vi spesialiserer oss innenfor familiefotografering. Vi er glad i
              naturlige bilder, som viser ekte følelser og tar deg med tilbake
              til det samme øyeblikket. Det er viktig for oss at både dere og
              barna føler dere trygge og godt ivaretatt under sesjonen. Derfor
              vil vi alltid planlegge sesjonen på forhånd, via mail eller
              telefon. Vi vil bli kjent med dere og deres forventinger. Vi vil
              hjelpe dere med alt av poseringer underveis i sesjonen.
            </p>
          </div>
        </div>
        <div className="aboutUs__right">
          <img
            src="https://images.unsplash.com/photo-1628613779039-7a71e2df81d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1622495808414-bcb3a2bd40ff?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
        </div>
        <div className="aboutUs__lastSection">
          <div className="one">
            <div className="one__icon">
              <img src={sun} alt="" />
            </div>
            <div className="one__heading">
              <h1>Naturlig bilder</h1>
            </div>
            <div className="one__paragraph">
              <p>
                De fleste fotografer spesialiserer seg på enten naturlig lys
                eller studiolysfotografering. Vi velger naturlig lys, fordi vi
                elsker det. Naturlig lys er veldig flatterende for hudtoner. Det
                tillater fotografering i ditt naturlige hjemmemiljø.
                {/* Det er rask og enkel å sette opp hjemme
                og tillater oss total fleksibilitet med synspunkter. Det er også
                mindre overveldende for babyer og barn */}
              </p>
            </div>
          </div>
          <div className="two">
            <div className="two__icon">
              <img src={ring} alt="" />
            </div>
            <div className="two__heading">
              <h1>Bryllups bilder</h1>
            </div>
            <div className="two__paragraph">
              <p>
                Vi ønsker å vise bryllupet ditt i en moderne bryllupsrapport,
                fange følelsene, de virkelige øyeblikkene, de små iøynefallende
                øyeblikkene og deg. Vi vil gjerne være en del av bryllupet ditt,
                som stille observatører og venner som er glade og feirer med
                deg.
              </p>
            </div>
          </div>
          <div className="three">
            <div className="three__icon">
              <img src={suitcase} alt="" />
            </div>
            <div className="three__heading">
              <h1>Familie bilder</h1>
            </div>
            <div className="three__paragraph">
              <p>
                Familiefotografering er en investering for livet. Bilder fryser
                tiden, også de minnene vi har med våre kjære. Familiebilder
                kobler oss til våre røtter, og hvor vi kommer fra. Vi
                spesialiserer innen familiefotografering og vi er veldig flinke
                med barn.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="aboutUs__mainContainer--2">
        <div className="wrapper">
          <div className="aboutUs__mainContainer--2__left">
            <div className="mainContainer--2__left__heading">
              <h1>Prosjekter</h1>
            </div>
            <div className="mainContainer--2__left__paragraph">
              <p>
                Vi har kjærlighet for naturlig lys og mellomformat filmkameraer.
                Med over 5 års erfaring fanger vi skjønnhet på det mest subtile.
                Gjennom de 5 årene har vi jobbet med familier og bruder med gode
                resultater (se galleri her).
              </p>
            </div>
          </div>
          <div className="aboutUs__mainContainer--2__right">
            <div className="mainContainer--2__right__heading--1">
              <h5>Photoshop</h5>
              <h5>95%</h5>
            </div>
            <div className="mainContainer--2__right__one">
              <div className="color__1"></div>
            </div>
            <div className="mainContainer--2__right__heading--1">
              <h5>Lightroom</h5>
              <h5>85%</h5>
            </div>
            <div className="mainContainer--2__right__two">
              <div className="color__2"></div>
            </div>
            <div className="mainContainer--2__right__heading--1">
              <h5>Premiere</h5>
              <h5>70%</h5>
            </div>
            <div className="mainContainer--2__right__three">
              <div className="color__3"></div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="aboutUs__mainContainer--1">
        <div className="aboutUs__left">
          <div className="left__heading">
            <h1>Vi presenterer oss</h1>
          </div>
          <div className="left__paragraph">
            <p>
              Hvorfor velge oss? Vi er et team der en av oss er hovedfotografen,
              og den andre skal hjelpe dere med posering, lys, og og annet
              underveis. Dette resulterer i godt samarbeid, og god flyt i
              sesjonen. Vi leverer bildene raskt og effektivt. Innen 20 dager
              skal dere får ferdigstilte bilder for utplukking i et online
              bildegalleri (Gjelder ikke bryllup) Vi er begge utadvendte og
              veldig glad i å treffe nye mennesker. Det gjør at våre klienter
              blir raskt komfortable med oss, og klienter blir til venner. Før
              hver sesjon sender vi en personlig video melding til dere der vi
              forklarer en plan og hva vi skal gjøre.
            </p>
          </div>
        </div>
        <div className="aboutUs__right">
          <img
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default AboutUs;
