import styles from "./ContactUs.module.css";
import ContactUsSvg from "../../Store/SVG/contactUsSvg.svg";
import Heading from "../../ui/Heading/Heading";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import SvgImage from "../../ui/SvgImage/SvgImage";
import Card from "../../ui/Card/Card";
import { useContext } from "react";
import AuthContext from "../../Store/context/auth-context";

const ContactUs = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Heading>Have some questions?</Heading>
      <div className={styles.flexContainer}>
        <div className={styles.flexChild}>
          <SvgImage src={ContactUsSvg} alt="contact_image" />
        </div>
        <div className={styles.flexChild}>
          <Card>
            <form>
              <Input placeholder="First Name" type="text" />
              <Input placeholder="Last Name" type="text" />
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
              <Button onClick={() => authCtx.logout()}>Log out</Button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
