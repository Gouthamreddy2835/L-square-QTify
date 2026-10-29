import { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { fetchFAQs } from "../../helpers/api";
import styles from "./FAQ.module.css";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const loadFaqs = async () => {
      const res = await fetchFAQs();
      if (res?.data) {
        setFaqs(res.data);
      }
    };
    loadFaqs();
  }, []);

  return (
    <div className={styles.faqWrapper}>
      <h2 className={styles.title}>FAQs</h2>
      <div className={styles.accordionContainer}>
        {faqs.map((faq, index) => (
          <Accordion key={index} className={styles.accordion}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{ color: "var(--color-primary, #34c94b)", fontSize: 32 }}
                />
              }
              className={styles.summary}
            >
              <span className={styles.question}>{faq.question}</span>
            </AccordionSummary>
            <AccordionDetails className={styles.details}>
              <span className={styles.answer}>{faq.answer}</span>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;