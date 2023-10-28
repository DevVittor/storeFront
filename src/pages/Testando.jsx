import axios from 'axios';

export default function ProductDisplay() {
    function pegarReq(event) {
        event.preventDefault();
        const data = {
            priceId: "price_1NFK9rIbcEgeFqaqxYcwn244", // Substitua pelo valor correto
        };

        axios.post("http://localhost:8080/checkstripe", data)
            .then(res => {
                console.log(res.data);
                window.location.href = res.data.url;
            })
            .catch(error => console.error(`Deu ruim ${error}`));
    }

    return (
        <section>
            <div className="product">
                <div className="description">
                    <h3>Starter plan</h3>
                    <h5>$20.00 / month</h5>
                </div>
            </div>
            <form onSubmit={pegarReq}>
                <input type="submit" value="Checkout" />
            </form>
        </section>
    )
}
