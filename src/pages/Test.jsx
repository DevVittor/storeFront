import styles from './Test.module.css';
function Test() {
    return (
        <main>
            <section>
                <div className={styles.container}>
                    <div className={styles.box_info}>
                        <div className={styles.box_name}>
                            <div className={styles.box_first}>
                                <h1>Jéssica</h1>
                            </div>
                            <div className={styles.box_last}>
                                <h1>Gomes</h1>
                            </div>
                        </div>
                        <div className={styles.box_description}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis pariatur expedita cumque quos aspernatur commodi dignissimos officia sequi laboriosam, non doloremque eveniet nisi, tempora harum quasi molestias rerum nesciunt illum! Voluptate placeat illum a laborum saepe sunt explicabo cum hic vel architecto nostrum aut quod soluta qui, molestias ullam, aliquam repellendus quo commodi expedita fuga! Expedita sunt dolorum quisquam architecto debitis officia. Eum enim earum illo quo excepturi nesciunt eveniet, dignissimos repellendus quasi quaerat ipsam cumque placeat? Odit vel ipsum ullam velit corporis, error placeat repudiandae, voluptates suscipit impedit dignissimos hic ad natus consectetur doloribus fuga! Porro pariatur veritatis perspiciatis tempora soluta ullam obcaecati corporis tempore ad consectetur eos tenetur necessitatibus nulla minima at dolorem molestias cumque, veniam officia hic omnis similique. Iste earum dolor iusto ea iure doloremque, facere odio impedit vitae alias architecto et magnam? Repudiandae hic sequi nostrum enim, dolore dicta velit consequatur similique. Dignissimos vero dolore saepe accusantium nesciunt repudiandae veritatis maiores neque molestiae corporis recusandae distinctio fuga officia at, praesentium obcaecati, nostrum perferendis repellat omnis rerum nihil consequatur quae eos. Cupiditate quod, ut, beatae minima ducimus qui dolores eos asperiores distinctio excepturi aliquid laborum modi dolor? Sequi consectetur omnis eligendi asperiores est minima accusantium reiciendis rem? Error, quo quis sed recusandae ipsam obcaecati tempora a quasi corrupti vero, rem ipsa quas, nihil earum natus iure! Provident impedit, doloremque vel officia consectetur ab amet facilis! Animi, asperiores nesciunt quo, vitae explicabo nihil debitis molestias minus ea illum id ad suscipit, laboriosam corporis aut perferendis mollitia laudantium!</p>
                        </div>
                    </div>
                    <div className={styles.box_avatar}>
                        <img src="https://images.pexels.com/photos/19248756/pexels-photo-19248756/free-photo-of-28mm-35-mm-adulto-lindo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
            </section>
        </main >
    )
}
export default Test;