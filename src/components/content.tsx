import Icon from "@/components/Icon";
import Tag from "@/components/Tag";
import React from "react";

// type Item = {
//   icon?: React.ReactNode,
//   label?: String,
// }

// type TechItem = {
//   title?: String,
//   items?: Item[],
// }

export const TECHS = [
  {
    title: "Front-end",
    items: [
      {
        icon: <Icon name="react" />,
        label: "React",
      },
      {
        icon: <Icon name="next" />,
        label: "NextJS",
      },
    ],
  },
  {
    title: "Back-end",
    items: [
      {
        icon: <Icon name="nest" />,
        label: "NestJS",
      },
      {
        icon: <Icon name="spring" />,
        label: "Java Spring",
      },
    ],
  },
];

export const EXS = [
  {
    from: "03-2018",
    to: "08-2018",
    position: "Frontend Developer",
    company: "Saigon Technology Solution",
    description: (
      <div>
        <p>
          I join a small Agile team (8 members) to build a product for a real
          estate company in Vietnam (portal configuration, landing page, mobile
          app).
        </p>
        <p>
          Working directly with Scrum master to clarify business, also
          discussing with Designer to ensure prototype UI/UX not have too much
          issue when giving it to the developer. Learn how to estimate the
          development and also fixing bugs time when developing a feature
        </p>
        <p className="tags">
          <Tag>Agile/Scrum</Tag> 
          <Tag>React</Tag> 
        </p>
      </div>
    ),
  },
  {
    from: "09-2018",
    to: "06-2021",
    position: "Fullstack Developer",
    company: "ELCA",
    description: (
      <div>
        <p>
          As a developer, I participated in a product team with the Agile/Scrum
          development process. Daily meeting with the team in Switzerland.
          Clarify requirements with the business owner.
        </p>
        <p>
          Do work breakdown structure for User Story, define impact, implement &
          write automation test for each new feature in User Story.
          Collaborating with the customer success team to analyze and support
          incident
        </p>
        <ul>
          <li>Product mindset in Agile/Scrum development</li>
          <li>
            Core member of the team that research and create a reusable
            framework (using ReactJS) to migrate old server-side render page to
            SPÐ
          </li>
          <li>Bug fixing and maintaining the product</li>
          <li>Coordinating with other teams in the same project</li>
          <li>Mentoring new members - intership, fresher</li>
        </ul>
        <p className="tags">
          <Tag>jQuery</Tag>
          <Tag>React</Tag>
          <Tag>Java (Spring Boot)</Tag>
          <Tag>MongoDB</Tag>
        </p>
      </div>
    ),
  },
  {
    from: "07/2021",
    to: "present",
    position: "Fullstack Developer",
    company: "Tiki",
    description: (
      <div>
        <p>
          Join one of the biggest Vietnam commercial platforms, which is a
          commerce ecosystem with more than 20 million products in its catalog
          and an end-to-end supply chain.
        </p>
        <p>
          My team is responsible for the seller's website, a complex product.
          which have thousands of pages and a lot of teams contribute to. Our
          product is serving more than 500k users and expanding more than 30%
          each year.
        </p>
        <p>
          As a Front-end developer, I am in charge of the UI/UX website, making
          sure users experience a fast and stable website for managing their
          online business. Besides that, we always try and implement new
          solutions for scale websites such as micro frontend, monorepo, GraphQL
        </p>
        <p className="tags">
          <Tag>React</Tag>
          <Tag>NextJS</Tag>
          <Tag>TypeScript</Tag>
          <Tag>NodeJS (NestJS)</Tag>
        </p>
      </div>
    ),
  },
];

export const EDUS = [
  {
    time: "2014 - 2018",
    uni: "VNUHCM - University of Science",
    level: "Bachelor Information Technology",
  },
];

export const CONTACTS = [
  {
    icon: <Icon name="web" />,
    label: "dungmidside.me",
    href: 'https://dungmidside.me'
  }, 
  {
    icon: <Icon name="email" />,
    label: "huudung096@gmail.com",
    href: 'mailto:huudung096@gmail.com'
  }, 
  {
    icon: <Icon name="stack" />,
    label: "dungmidside",
    href: 'https://stackoverflow.com/users/5468335/dungmidside',
  },
  {
    icon: <Icon name="github" />,
    label: "dungmidside",
    href: 'https://github.com/dungmidside',
  },
  {
    icon: <Icon name="tele" />,
    label: "dungmidside",
    href: 'https://t.me/dungmidside',
  },
];

export const PROJECTS = [
  {
    name: "Secutix Widget",
    des: (
      <div>
        <p>
          I joined the 4 members team that build Widget - an collection of
          isolated application built with React, which allow our client embedded
          to any website with only a Javascript file and a smaill script to run
          it.
        </p>
        <p>
          As the engineer lead for this project (after it go to production for
          about 1 year), I in charge for maintain, add additional features -
          both front-end and back-end, beside of that, I also need to couching
          new members join team.
        </p>
      </div>
    ),
  },
  {
    name: "Running Check-in",
    des: (
      <div>
        <p>
          In a running event, my team developed a website for check-in process
          of more than 10k participants, make it fast, easy and reliable for
          client.
        </p>
        <p>
          I'm in charge for all front-end of the website that have some unique
          features:
          <ul style={{ marginLeft: 8 }}>
            <li>Client template printing</li>
            <li>Working without internet connection</li>
            <li>Storing offline requested data in local and then sync them to cloud when online</li>
          </ul>
        </p>
      </div>
    ),
  },
  {
    name: "Tiki Mini Apps",
    des: (
      <div>
        <p>
          At Tiki, my team is working in a huge application that use 2
          independent sub applications, 1 use React 15 and the other one use
          React 17. This make sure support for legacy system, but develop new
          component that need to serve both applications is a painfull task. It
          take double effort as normal component.
        </p>
        <p>
          I build a new monorepo to build each application as isolated
          application, then inject to current application and load with a
          script. Now developer only to code one and add a small script for new
          and legacy application to make it work.
        </p>
      </div>
    ),
  },
];
