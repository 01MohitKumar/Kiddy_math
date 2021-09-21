import styles from "./ContactUs.module.css";
import ContactUsSvg from "../../Store/SVG/contactUsSvg.svg";
import Heading from "../../ui/Heading/Heading";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";

const ContactUs = () => {
  return (
    <>
      <Heading>HAVE SOME QUESTIONS?</Heading>
      <div className={styles.flexContainer}>
        <div className={styles.flexChild}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={ContactUsSvg} alt='contact_image' />
          </div>
        </div>
        <div className={styles.flexChild}>
          <div className={styles.contactContainer}>
            <Input
              className={styles.input}
              placeholder="First Name"
              type="text"
            />
            <Input
              className={styles.input}
              placeholder="Last Name"
              type="text"
            />
            <Input
              className={styles.input}
              placeholder="What's your eamil"
              type="text"
            />
            <Input
              className={styles.input}
              placeholder="Your questions..."
              type="text"
            />
            <Button>Send Message</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
