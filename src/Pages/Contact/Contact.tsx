import Navbar from "../../Layout/Navbar";
import { FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineMail } from "react-icons/md";
import { useT } from "../../context/Preferences";

const Contact = () => {
  const t = useT();
  return (
  <main className="min-h-[80vh] bg-[var(--background)]">
    <Navbar />
    <section id="contact" className="mx-auto grid min-h-[70vh] w-[94%] max-w-[1440px] content-center gap-12 px-4 py-14 md:grid-cols-2 md:px-12 lg:px-20">
      <div className="self-center">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--accent)]">{t("contactEyebrow")}</p>
        <h1 className="mt-5 text-5xl font-semibold leading-[1.04] tracking-[-0.06em] text-[var(--text)] sm:text-6xl">{t("contactTitle")}</h1>
        <p className="mt-6 max-w-lg text-base leading-7 text-[var(--muted)]">{t("contactBody")}</p>
        <a className="contact-primary-cta mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-4 text-sm font-medium text-white transition hover:opacity-85" href="mailto:mammadovailah03@gmail.com">{t("startConversation")} <span aria-hidden="true">↗</span></a>
      </div>
      <div className="contact-card flex flex-col justify-center gap-4 rounded-[2rem] border border-[var(--line)] bg-[var(--surface-card)] p-7 text-[var(--text)] shadow-[var(--shadow-card)] sm:p-10">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">{t("contactDetails")}</p>
        <a className="flex items-center gap-4 rounded-2xl border border-[var(--line)] p-4 transition hover:bg-[var(--surface-soft)]" href="mailto:mammadovailah03@gmail.com"><MdOutlineMail className="shrink-0 text-2xl text-[var(--accent)]" /><span className="break-all text-sm sm:text-base">mammadovailah03@gmail.com</span></a>
        <a className="flex items-center gap-4 rounded-2xl border border-[var(--line)] p-4 transition hover:bg-[var(--surface-soft)]" href="tel:+994518487114"><FaPhoneAlt className="shrink-0 text-xl text-[var(--accent)]" /><span className="text-sm sm:text-base">+994 51 848 71 14</span></a>
        <div className="flex items-center gap-4 rounded-2xl border border-[var(--line)] p-4"><ImLocation2 className="shrink-0 text-2xl text-[var(--accent)]" /><span className="text-sm sm:text-base">{t("location")}</span></div>
        <div className="mt-4 flex gap-3">
          <a className="grid h-12 w-12 place-items-center rounded-full border border-[var(--line)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]" aria-label="LinkedIn" href="https://www.linkedin.com/in/ilaha-mammadova" target="_blank" rel="noreferrer"><FaLinkedin className="text-xl" /></a>
          <a className="grid h-12 w-12 place-items-center rounded-full border border-[var(--line)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]" aria-label="GitHub" href="https://github.com/mammadovailaha" target="_blank" rel="noreferrer"><IoLogoGithub className="text-xl" /></a>
          <a className="grid h-12 w-12 place-items-center rounded-full border border-[var(--line)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]" aria-label="Instagram @ilahahub" href="https://www.instagram.com/ilahahub/" target="_blank" rel="noreferrer"><FaInstagram className="text-xl" /></a>
        </div>
      </div>
    </section>
  </main>
  );
};

export default Contact;
