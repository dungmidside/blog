import Head from "next/head";
import Image from "next/image";
import AvatarPng from "@/resources/avatar.png";
import { TECHS, CONTACTS, EDUS, EXS, PROJECTS } from "../../components/content";
import styles from "./styles.module.scss";

const Section = ({ title, children }) => {
  return (
    <div className={`section se-${title}`}>
      <div className="s-title">{title}</div>
      <div className="s-content">{children}</div>
    </div>
  );
};

const TechItem = ({ title, items }) => {
  return (
    <div className="tech-item">
      <div className="ti-title">{title}</div>
      <div className="ti-content">
        {items.map(({ icon, label }) => (
          <div key={label} className="ti-item">
            <div className="tii-icon">{icon}</div>
            <div className="tii-label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExItem = ({ from, to, position, company, description }) => {
  return (
    <div className="ex-item">
      <div className="exi-times">
        <div className="ext-from">{from}</div>
        <div className="ext-to">{to}</div>
      </div>
      <div className="exi-content">
        <div className="exc-header">
          <div className="exh-position">{position}</div>
          <div className="exh-divider">&nbsp;-&nbsp;</div>
          <div className="exh-company">{company}</div>
        </div>
        <div className="exc-body">{description}</div>
      </div>
    </div>
  );
};

const EduItem = ({ time, uni, level }) => (
  <div className="edu-item">
    <div className="edi-time">{time}</div>
    <div className="edi-content">
      <div className="edc-uni">{uni}</div>
      <div className="edc-level">{level}</div>
    </div>
  </div>
);

const ContactItem = ({ icon, label, href }) => (
  <a className="con-item" href={href} target="_blank" rel="noreferrer">
    <div className="ci-icon">{icon}</div>
    <div className="ci-label">{label}</div>
  </a>
);

const ProjectItem = ({ name, des }) => (
  <div className="pro-item">
    <div className="pi-name">{name}</div>
    <div className="pi-des">{des}</div>
  </div>
);

export default function Resume() {
  return (
    <div className={styles.resumeWrapper}>
      <Head>
        <title>Dungmidside</title>
      </Head>

      <div className="header">
        <div className="h-avatar">
          <Image src={AvatarPng} alt="img" style={{ width: 100 }} priority={true} />
        </div>
        <div className="h-info">
          <div className="i-name">Tran Huu Dung</div>
          <div className="i-position">
            <span style={{ fontStyle: "normal", marginRight: 6 }}>💻&nbsp;</span>
            Software Engineer
          </div>
        </div>
      </div>

      <div className="body">
        <Section title="summary">
          <div>
            <p>
              I had more than 4 years of web development. From static landing page websites to huge
              micro front-end applications that serve hundreds of thousands of users.
            </p>

            <p>
              Making a great UI/UX and also fast website is my passion. I believe that website is one of
              the best ways to make a product stand out
            </p>
          </div>
        </Section>

        <Section title="techs">
          {TECHS.map((techItem, idx) => (
            <TechItem key={idx} {...techItem} />
          ))}
        </Section>

        <Section title="experiences">
          {EXS.map((exItem, idx) => (
            <ExItem key={idx} {...exItem} />
          ))}
        </Section>

        <Section title="projects">
          {PROJECTS.map((proItem, idx) => (
            <ProjectItem key={idx} {...proItem} />
          ))}
        </Section>

        <Section title="education">
          {EDUS.map((eduItem, idx) => (
            <EduItem key={idx} {...eduItem} />
          ))}
        </Section>

        <Section title="contact">
          {CONTACTS.map((conItem, idx) => (
            <ContactItem key={idx} {...conItem} />
          ))}
        </Section>
      </div>
    </div>
  );
}
