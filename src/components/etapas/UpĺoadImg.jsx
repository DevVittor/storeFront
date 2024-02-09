import styles from "./UploadImg.module.css";
import WindowSize from "../WindowSize";
export default function UpĺoadImg() {
  const alturaHeight = WindowSize();
  return (
    <div
      className={styles.container_upload_imgs}
      style={{ minHeight: `${alturaHeight}px` }}
    >
      <div className={styles.view_imgs}>
        <div className={styles.img_verify}>
          <img
            src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className={styles.list_view_imgs}>
          <div className={styles.list_imgs}>
            <img
              src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className={styles.list_imgs}>
            <img
              src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className={styles.list_imgs}>
            <img
              src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className={styles.list_imgs}>
            <img
              src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className={styles.list_imgs}>
            <img
              src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className={styles.list_imgs}>
            <img
              src="https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.uploads}>
        <div className={styles.uplods_img}>
          <input type="file" name="" id="foto_principal" />
          <label htmlFor="foto_principal">Principal</label>
        </div>
        <div className={styles.uplods_img}>
          <input type="file" name="" id="foto_principal" />
          <label htmlFor="foto_principal">1 Foto</label>
        </div>
        <div className={styles.uplods_img}>
          <input type="file" name="" id="foto_principal" />
          <label htmlFor="foto_principal">2 Foto </label>
        </div>
        <div className={styles.uplods_img}>
          <input type="file" name="" id="foto_principal" />
          <label htmlFor="foto_principal">3 Foto</label>
        </div>
        <div className={styles.uplods_img}>
          <input type="file" name="" id="foto_principal" />
          <label htmlFor="foto_principal">4 Foto </label>
        </div>
        <div className={styles.uplods_img}>
          <input type="file" name="" id="foto_principal" />
          <label htmlFor="foto_principal">5 Foto </label>
        </div>
      </div>
    </div>
  );
}
