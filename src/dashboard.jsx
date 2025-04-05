
function Dashboard() {

    return(
        <section className='dashboard-section'>
            <div className="image-container">
                <img src="./src/assets/rowing.jpg" alt="Alberto-Rowing" /> 
            </div>
            <div className="title-container">
                <img src="./src/assets/AlbertoGarciaLogo.png" alt="Alberto Garcia" />
            </div>
            <div className="ver-planes-container">
                <p>Transforma Tu Vida, Hoy Es El Dia</p>
                <button className="ver-planes-btn">VER PLANES</button>
            </div>
        </section>
    )
}

export default Dashboard