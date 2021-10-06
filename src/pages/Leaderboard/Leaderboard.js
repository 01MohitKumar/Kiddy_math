import Heading from "../../ui/Heading/Heading";
import SvgImage from "../../ui/SvgImage/SvgImage";
import styles from "./Leaderboard.module.css";
import LeaderboardSvg from "../../Store/SVG/leaderboardSvg.svg";

// const Dummy_data = [
//   {
//     name: "Rahul kumar",
//     points: "1234 points",
//     avatar:
//       "https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png",
//     trophy:
//       "https://thumbs.dreamstime.com/z/trophy-logo-icon-design-can-be-used-as-complement-to-128470150.jpg",
//   },
//   {
//     name: "Rahul kumar",
//     points: "1234 points",
//     avatar:
//       "https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png",
//     trophy:
//       "https://thumbs.dreamstime.com/z/trophy-logo-icon-design-can-be-used-as-complement-to-128470150.jpg",
//   },
//   {
//     name: "Rahul kumar",
//     points: "1234 points",
//     avatar:
//       "https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png",
//     trophy:
//       "https://thumbs.dreamstime.com/z/trophy-logo-icon-design-can-be-used-as-complement-to-128470150.jpg",
//   },
//   {
//     name: "Rahul kumar",
//     points: "1234 points",
//     avatar:
//       "https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png",
//     trophy:
//       "https://thumbs.dreamstime.com/z/trophy-logo-icon-design-can-be-used-as-complement-to-128470150.jpg",
//   },
// ];

const Leaderboard = () => {
  return (
    <>
      <Heading>Kiddy Math Leaderboard</Heading>
      <div className={styles.flexContainer}>
        <div className={styles.flexChild}>
          <SvgImage src={LeaderboardSvg} alt="leaderboard_image" />
        </div>
        <div className={`${styles.flexChild} ${styles.leaderboardContainer}`}>
          {/* <div className={styles.ldChild}>
            <div className={styles.avatarContainer}>
              <img
                src="https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png"
                alt="avatar"
              />
            </div>
            <h5>Rose Bella</h5>
          </div>
          <div className={styles.ldChild}></div> */}
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
