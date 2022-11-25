import Image from 'next/image'

import placeholder from '../public/media/drinks/placeholder.png'
import banana_milk from '../public/media/drinks/banana-milk.png'
import bloopi from '../public/media/drinks/bloopi.png'
import blueb_matcha from '../public/media/drinks/blueb-matcha.png'
import boba_milktea from '../public/media/drinks/boba-milktea.png'
import dirty_matcha from '../public/media/drinks/dirty-matcha.png'
import gfade from '../public/media/drinks/gfade.png'
import hibiscus_mango from '../public/media/drinks/hibiscus-mango.png'
import lemonade from '../public/media/drinks/lemonade.png'
import lychee_hibiscus from '../public/media/drinks/lychee-hibiscus.png'
import matcha_latte from '../public/media/drinks/matcha-latte.png'
import matcha_oreo from '../public/media/drinks/matcha-oreo.png'
import orange_guava from '../public/media/drinks/orange-guava.png'
import purple_flurp from '../public/media/drinks/purple-flurp.png'
import snickerdoodle from '../public/media/drinks/snickerdoodle.png'
import strawb_blacktea from '../public/media/drinks/strawb-blacktea.png'
import strawb_matcha from '../public/media/drinks/strawb-matcha.png'
import strawb_milk from '../public/media/drinks/strawb-milk.png'
import taro_oreo from '../public/media/drinks/taro-oreo.png'
import thai_tea from '../public/media/drinks/thai-tea.png'
import tiger_boba from '../public/media/drinks/tiger-boba.png'
import tiramisu from '../public/media/drinks/tiramisu.png'
import honeydew from '../public/media/drinks/honeydew.png'

function MenuC() {

    return (
        <>
              <div className="menupg-container">
                <h2 className="menupg-header"> Sol Boba Menu </h2>
              </div>
                <div className="int-menu-container">
                
                    {/* Milk Tea Menu */}
                    <div className="mt-header">
                        <h1 className="menu-header"> Milk Tea </h1>
                    </div>
                
                    <div className="mt-one">
                        <Image className='mt-img' src={boba_milktea} />
                        <h3> Classic Milk Tea </h3>
                    </div>
                    <div className="mt-two">
                        <Image className='mt-img' src={boba_milktea} />
                        <h3> Barley Milk Tea </h3>
                    </div>
                    <div className="mt-three">
                        <Image className='mt-img' src={honeydew} />
                        <h3> Honeydew Milk Tea </h3>
                    </div>
                    <div className="mt-four">
                        <Image className='mt-img'src={boba_milktea}/>
                        <h3> Wintermelon Milk Tea </h3>
                    </div>
                    <div className="mt-five">
                        <Image className='mt-img'src={thai_tea}/>
                        <h3> Thai Milk Tea </h3>
                    </div>
                    {/* Specialty Menu */}
                    <div className="st-header">
                        <h1 className="menu-header"> Specialty </h1>
                    </div>

                     <div className="st-one">
                        <Image className='mt-img' src={taro_oreo} />
                        <h3> Taro Oreo Slush </h3>
                    </div>
                    <div className="st-two">
                        <Image className='mt-img' src={placeholder} />
                        <h3> Asian Pear Slush </h3>
                    </div>
                    <div className="st-three">
                        <Image className='mt-img' src={placeholder} />
                        <h3> Dalgona Latte </h3>
                    </div>
                    <div className="st-four">
                        <Image className='mt-img'src={tiger_boba}/>
                        <h3> Brown Sugar Latte </h3>
                    </div>
                    <div className="st-five">
                        <Image className='mt-img'src={tiramisu}/>
                        <h3> Tiramisu Latte </h3>
                    </div>
                    <div className="st-six">
                        <Image className='mt-img' src={strawb_milk} />
                        <h3> Strawberry Milk </h3>
                    </div>
                    <div className="st-seven">
                        <Image className='mt-img' src={placeholder} />
                        <h3> Blueberry Milk </h3>
                    </div>
                    <div className="st-eight">
                        <Image className='mt-img' src={placeholder} />
                        <h3> Ube Latte </h3>
                    </div>
                    <div className="st-nine">
                        <Image className='mt-img' src={tiger_boba} />
                        <h3> Brown Sugar Oreo </h3>
                    </div>
                    <div className="st-ten">
                        <Image className='mt-img' src={placeholder} />
                        <h3> Dirty Ube Latte </h3>
                    </div>
                     <div className="st-eleven">
                        <Image className='mt-img' src={placeholder} />
                        <h3> Injeolmi Latte </h3>
                    </div>


                </div>

            {/* ------- Second Menu -------*/}
            <div className="int2-menu-container">
                {/* Matcha Menu */}
                    <div className="mt2-header">
                        <h1 className="menu-header"> Matcha </h1>
                    </div>

                    <div className="mt2-one">
                        <Image className='mt-img' src={matcha_latte} />
                        <h3> Matcha Latte </h3>
                    </div>
                    <div className="mt2-two">
                        <Image className='mt-img' src={strawb_matcha} />
                        <h3> Strawberry Matcha </h3>
                    </div>
                    <div className="mt2-three">
                        <Image className='mt-img' src={blueb_matcha} />
                        <h3> Blueberry Matcha </h3>
                    </div>
                    <div className="mt2-four">
                        <Image className='mt-img' src={dirty_matcha} />
                        <h3> Dirty Matcha </h3>
                    </div>
                    {/* Fruit Tea Menu */}
                    <div className="ft-header">
                        <h1 className="menu-header"> Fruit Tea </h1>
                    </div>
                     <div className="ft-one">
                        <Image className='mt-img' src={lychee_hibiscus} />
                        <h3> Lychee Hibiscus Tea </h3>
                    </div>
                    <div className="ft-two">
                        <Image className='mt-img' src={hibiscus_mango} />
                        <h3> Mango Hibiscus Tea </h3>
                    </div>
                    <div className="ft-three">
                        <Image className='mt-img' src={orange_guava} />
                        <h3> Pog Green Tea </h3>
                    </div>
                    <div className="ft-four">
                        <Image className='mt-img'src={bloopi}/>
                        <h3> Bloopi </h3>
                    </div>
                    <div className="ft-five">
                        <Image className='mt-img'src={strawb_blacktea}/>
                        <h3> Strawberry Black Tea</h3>
                    </div>
                    <div className="ft-six">
                        <Image className='mt-img' src={lychee_hibiscus} />
                        <h3> Strawberry Green Tea </h3>
                    </div>
                    <div className="ft-seven">
                        <Image className='mt-img' src={hibiscus_mango} />
                        <h3> Purple Flurp </h3>
                    </div>
                    <div className="ft-eight">
                        <Image className='mt-img' src={placeholder} />
                        <h3> Lemon Thai Tea </h3>
                    </div>
                    <div className="ext-header">
                        <h1 className="menu-header"> Extras </h1>
                    </div>
                    <div className="ext-one">
                        <h2 className="topping-header">Toppings</h2>
                        <ul className="tp-ul">Tapioca Pearls</ul>
                        <ul className="tp-ul">Crystal Boba</ul>
                        <ul className="tp-ul">Lychee Jelly</ul>
                        <ul className="tp-ul">Coffee Jelly</ul>
                        <ul className="tp-ul">Mango Jelly</ul>
                        <ul className="tp-ul">Oreo Jelly</ul>
                    </div>
            </div>
            <div className="download-menu">
                <a href="" className="menu-btn">Download Menu</a>
            </div>
        </>
    );
}

export default MenuC;
