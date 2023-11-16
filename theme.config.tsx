import AppFooter from "@components/AppFooter";
import React from "react";
import { ThemeSwitch, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

export default {
  logo: (
    <span>
      <strong>BWINF GUIDE</strong>
    </span>
  ),
  footer: {
    component: AppFooter,
  },
  project: {
    link: "https://github.com/bwinf-guide/bwinf-guide",
  },
  docsRepositoryBase: "https://github.com/bwinf-guide/bwinf-guide/tree/main",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - BWINF GUIDE",
      };
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { title, frontMatter } = useConfig();
    const url = "https://bwinf.guide" + asPath;

    const robots =
      asPath == "/impressum" ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <></>
      );

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="BWINF.GUIDE"></meta>
        <meta
          name="og:title"
          content={title ? title + " - BWINF GUIDE" : "BWINF GUIDE - Eine Einführung in den Bundeswettbewerb Informatik"}
        />
        <meta
          name="description"          
          property="og:description"
          content={
            frontMatter.description ||
            "Der BWINF-GUIDE ist eine Sammlung von Themen, Tipps und Tricks für den Bundeswettbewerb Informatik, die euch einen leichteren Einstieg ermöglicht sowie Materialien zur Vorbereitung für alle Runden bereitstellt."
          }
        />
        {robots}
      </>
    );
  },
  primaryHue: 48,
  primarySaturation: 100,
  themeSwitch: {
    useOptions() {
      return {
        light: "Hell",
        dark: "Dunkel",
        system: "System",
      };
    },
  },
  editLink: {
    text: "Diese Seite auf Github bearbeiten →",
  },
  feedback: {
    content: "Fragen? Gib uns ein Feedback →",
  },
  search: {
    placeholder: "Durchsuchen...",
  },
  navbar: {
    extraContent: (
      <>
        <ThemeSwitch lite={true} />
      </>
    ),
  },
  toc: {
    title: "Auf dieser Seite",
  },
};
