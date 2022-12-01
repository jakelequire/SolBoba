import Image from 'next/image'
import drink from '../pages/api/_media'
import Container from 'react-bootstrap/Container';

function MenuC() {

    return (
        <Container className="menuhp-container">
           <div className="menupg-container">
             <h2 className="menupg-header"> Sol Boba Menu </h2>
            </div>
            <div className="menuhp-wrapper">
                <div className="int-menu-container">
                
                    {/* Milk Tea Menu */}
                    <div className="milktea-header">
                        <div className="mt-header" id="milk-tea">
                            <h1 className="menu-header"> Milk Tea </h1>
                        </div>
                     </div>
                    <div className="milktea-wrapper">
                       <div className="mt-one mt">
                           <Image className='mt-img' src={drink.boba_milktea} alt="Classic Milk Tea"/>
                           <h3> Classic Milk Tea </h3>
                       </div>
                       <div className="mt-two mt">
                           <Image className='mt-img' src={drink.boba_milktea} alt="Barley Milk Tea"/>
                           <h3> Barley Milk Tea </h3>
                       </div>
                       <div className="mt-three mt">
                           <Image className='mt-img' src={drink.honeydew} alt="Honeydew Milk Tea"/>
                           <h3> Honeydew Milk Tea </h3>
                       </div>
                       <div className="mt-four mt">
                           <Image className='mt-img'src={drink.boba_milktea} alt="Wintermelon Milk Tea"/>
                           <h3> Wintermelon Milk Tea </h3>
                       </div>
                       <div className="mt-five mt">
                           <Image className='mt-img'src={drink.thai_tea} alt="Thai Milk Tea"/>
                           <h3> Thai Milk Tea </h3>
                       </div>
                    </div>
                    
                    {/* Specialty Menu */}
                     <div className="specialty-header">
                        <div className="st-header" id="specialty">
                            <h1 className="menu-header"> Specialty </h1>
                        </div>
                     </div>
                    
                     <div className="specialty-wrapper">
                        <div className="st-one st">
                           <Image className='mt-img' src={drink.taro_oreo} alt="Thai Milk Tea" />
                           <h3> Taro Oreo Slush </h3>
                       </div>
                       <div className="st-two st">
                           <Image className='mt-img' src={drink.placeholder} alt="Asian Pear Slush"/>
                           <h3> Asian Pear Slush </h3>
                       </div>
                       <div className="st-three st">
                           <Image className='mt-img' src={drink.placeholder} alt="Dalgona Latte"/>
                           <h3> Dalgona Latte </h3>
                       </div>
                       <div className="st-four st">
                           <Image className='mt-img'src={drink.tiger_boba} alt="Brown Sugar Latte"/>
                           <h3> Brown Sugar Latte </h3>
                       </div>
                       <div className="st-five st">
                           <Image className='mt-img'src={drink.tiramisu} alt="Tiramisu Latte"/>
                           <h3> Tiramisu Latte </h3>
                       </div>
                       <div className="st-six st">
                           <Image className='mt-img' src={drink.strawb_milk} alt="Strawberry Milk" />
                           <h3> Strawberry Milk </h3>
                       </div>
                       <div className="st-seven st">
                           <Image className='mt-img' src={drink.placeholder} alt="Blueberry Milk"/>
                           <h3> Blueberry Milk </h3>
                       </div>
                       <div className="st-eight st">
                           <Image className='mt-img' src={drink.placeholder} alt="Ube Latte"/>
                           <h3> Ube Latte </h3>
                       </div>
                       <div className="st-nine st">
                           <Image className='mt-img' src={drink.placeholder} alt="Brown Sugar Oreo"/>
                           <h3> Brown Sugar Oreo </h3>
                       </div>
                       <div className="st-ten st">
                           <Image className='mt-img' src={drink.placeholder} alt="Dirty Ube Latte"/>
                           <h3> Dirty Ube Latte </h3>
                       </div>
                       <div className="st-eleven st">
                           <Image className='mt-img' src={drink.placeholder} alt="Injeolmi Latte"/>
                           <h3> Injeolmi Latte </h3>
                       </div>
                     </div>
                </div>

                {/* ------- Second Menu -------*/}
                <div className="int2-menu-container">
                    {/* Matcha Menu */}
                    <div className="matcha-header">
                        <div className="mt2-header" id="matcha">
                            <h1 className="menu-header"> Matcha </h1>
                        </div>
                    </div>
                    
                    <div className="matcha-wrapper">
                       <div className="mt2-one mkt">
                           <Image className='mt-img' src={drink.matcha_latte} alt="Matcha Latte"/>
                           <h3> Matcha Latte </h3>
                       </div>
                       <div className="mt2-two mkt">
                           <Image className='mt-img' src={drink.strawb_matcha} alt="Strawberry Matcha"/>
                           <h3> Strawberry Matcha </h3>
                       </div>
                       <div className="mt2-three mkt">
                           <Image className='mt-img' src={drink.blueb_matcha} alt="Blueberry Matcha"/>
                           <h3> Blueberry Matcha </h3>
                       </div>
                       <div className="mt2-four mkt">
                           <Image className='mt-img' src={drink.dirty_matcha} alt="Dirty Matcha"/>
                           <h3> Dirty Matcha </h3>
                       </div>
                    </div>
                    {/* Fruit Tea Menu */}
                    <div className="fruittea-header">
                        <div className="ft-header" id="fruit-tea">
                            <h1 className="menu-header"> Fruit Tea </h1>
                        </div>
                    </div>

                    <div className="fruittea-wrapper">
                        <div className="ft-one ft">
                           <Image className='mt-img' src={drink.lychee_hibiscus} alt="Lychee Hibiscus Tea"/>
                           <h3> Lychee Hibiscus Tea </h3>
                       </div>
                       <div className="ft-two ft">
                           <Image className='mt-img' src={drink.hibiscus_mango} alt="Mango Hibiscus tea" />
                           <h3> Mango Hibiscus Tea </h3>
                       </div>
                       <div className="ft-three ft">
                           <Image className='mt-img' src={drink.orange_guava} alt="Pog Green Tea"/>
                           <h3> Pog Green Tea </h3>
                       </div>
                       <div className="ft-four ft">
                           <Image className='mt-img'src={drink.bloopi} alt="Bloopi"/>
                           <h3> Bloopi </h3>
                       </div>
                       <div className="ft-five ft">
                           <Image className='mt-img'src={drink.strawb_blacktea} alt="Strawberry Black Tea"/>
                           <h3> Strawberry Black Tea</h3>
                       </div>
                       <div className="ft-six ft">
                           <Image className='mt-img' src={drink.lychee_hibiscus} alt="Strawberry Green Tea"/>
                           <h3> Strawberry Green Tea </h3>
                       </div>
                       <div className="ft-seven ft">
                           <Image className='mt-img' src={drink.hibiscus_mango} alt="Purple Flurp"/>
                           <h3> Purple Flurp </h3>
                       </div>
                       <div className="ft-eight ft">
                           <Image className='mt-img' src={drink.placeholder} alt="Lemon Thai Tea" />
                           <h3> Lemon Thai Tea </h3>
                       </div>
                    </div>
                    {/* Extras Container - Second Menu */}
                    <div className="ext-header">
                        <h1 className="menu-header"> Extras </h1>
                    </div>
                    
                    <div className="extras-wrapper">
                        
                        <div className="ext-one ext">
                            <div className="ext-subheader">
                                <h2 className="topping-header">Toppings</h2>
                            </div>
                            <p className="ext-p">Tapioca Pearls</p>
                            <p className="ext-p">Crystal Boba</p>
                            <p className="ext-p">Lychee Jelly</p>
                            <p className="ext-p">Coffee Jelly</p>
                            <p className="ext-p">Mango Jelly</p>
                            <p className="ext-p">Oreo Jelly</p>
                        </div>
                        
                        <div className="ext-two ext">
                            <div className="ext-subheader">
                                <h2 className="ma-header">Milk Alternative</h2>
                            </div>
                            <p className="ext-p">Oat Milk</p>
                        </div>
                        
                        <div className="ext-three ext">
                           <div className="ext-subheader">
                               <h2 className="il-header">Ice Level</h2>
                           </div>
                           <Image src={drink.icelevel} alt="Ice Level" />
                        </div>
                        
                        <div className="ext-four ext">
                            <div className="ext-subheader">
                                <h2 className="sl-header">Sugar Level</h2>
                            </div>
                           <Image src={drink.sugarlevel} alt="Sugar Level" priority/>
                        </div>
                    </div>
                </div>
            </div>

             {/* Download Button */}
             <div className="download-container"> 
                 <div className="download-menu">
                     <a
                         href='/files/SolBoba-Menu.pdf'
                         className="menu-btn"
                         target="_blank"
                         alt="Download Menu"
                         rel="noopener noreferrer"
                        download>Download Menu
                    </a> 
                 </div>
             </div>
        </Container>
    );
}

export default MenuC;
