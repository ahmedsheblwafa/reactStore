import myImg from "../imgs/undraw_reminder_re_fe15.svg"

export default function HeroSection() {
    return (
        <section className="py-5 bg-light" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center py-3">
                        <img src={myImg} alt="" />
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h3 className="display-3" >Lorem ipsum dolor sit amet.</h3>
                        <p className="lead" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat suscipit dolorum ratione expedita iusto tempore laborum magni tenetur reiciendis, harum odio deleniti magnam adipisci sit eveniet! Soluta asperiores ea est!</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
