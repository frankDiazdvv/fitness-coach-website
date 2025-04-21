
function TopDeal(){

    const zumubLink = "https://www.zumub.com/ES/?coupon_code=ALBERTFIT&utm_source=referral&utm_campaign=ALBERTFIT&utm_medium=referral";


    return(
        <div className="top-deal-bar" id="top-deal-bar">
            
            <a href={zumubLink} className="top-deal-link">
                <p className="top-deal-text">
                    Obtén un 10% de descuento en Zumub con mi 
                    Código: <i><b>ALBERFIT</b></i>
                </p>
            </a>
        </div>
    )
}

export default TopDeal