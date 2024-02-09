import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ProfileBanner.module.css";
export default function ProfileBanner(props) {
  return (
    <section>
      <div className={styles.container_banner}>
        <div className={styles.nova_components}>
          <Link
            className={styles.components_card}
            target="_blank"
            to="https://twitter.com/home"
          >
            <img src={props.banner} alt={props.alt} />
          </Link>
        </div>
      </div>
    </section>
  );
}

ProfileBanner.propTypes = {
  banner: PropTypes.string,
  alt: PropTypes.string,
};
