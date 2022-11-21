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
            <div className="menupg-container">
                <div className="int-menu-container">
                
                    {/* Milk Tea Menu */}
                    <div className="mt-header">
                        <h3> Milk Tea </h3>
                    </div>
                
                    <div className="mt-one">
                        <Image className='mt-img-one' src={boba_milktea} />
                        <h3> Classic Milk Tea </h3>
                    </div>
                    <div className="mt-two">
                        <Image className='mt-img-two' src={boba_milktea} />
                        <h3> Barley Milk Tea </h3>
                    </div>
                    <div className="mt-three">
                        <Image className='mt-img-three' src={honeydew} />
                        <h3> Honeydew Milk Tea </h3>
                    </div>
                    <div className="mt-four">
                        <Image className='mt-img-four'src={boba_milktea}/>
                        <h3> Wintermelon Milk Tea </h3>
                    </div>
                    <div className="mt-five">
                        <Image className='mt-img-five'src={thai_tea}/>
                        <h3> Thai Milk Tea </h3>
                    </div>

                    {/* Specialty Menu */}
                    <div className="st-header">
                        <h3> Specialty </h3>
                    </div>

                     <div className="st-one">
                        <Image className='st-img-one' src={taro_oreo} />
                        <h3> Taro Oreo Slush </h3>
                    </div>
                    <div className="st-two">
                        <Image className='st-img-two' src={placeholder} />
                        <h3> Asian Pear Slush </h3>
                    </div>
                    <div className="st-three">
                        <Image className='st-img-three' src={placeholder} />
                        <h3> Dalgona Latte </h3>
                    </div>
                    <div className="st-four">
                        <Image className='st-img-four'src={tiger_boba}/>
                        <h3> Brown Sugar Latte </h3>
                    </div>
                    <div className="st-five">
                        <Image className='st-img-five'src={tiramisu}/>
                        <h3> Tiramisu Latte </h3>
                    </div>

                    {/* Fruit Tea Menu */}
                    <div className="ft-header">
                        <h3> Fruit Tea </h3>
                    </div>                

                     <div className="ft-one">
                        <Image className='ft-img-one' src={lychee_hibiscus} />
                        <h3> Lychee Hibiscus Tea </h3>
                    </div>
                    <div className="ft-two">
                        <Image className='ft-img-two' src={hibiscus_mango} />
                        <h3> Mango Hibiscus Tea </h3>
                    </div>
                    <div className="ft-three">
                        <Image className='ft-img-three' src={orange_guava} />
                        <h3> Pog Green Tea </h3>
                    </div>
                    <div className="ft-four">
                        <Image className='ft-img-four'src={bloopi}/>
                        <h3> Bloopi </h3>
                    </div>
                    <div className="ft-five">
                        <Image className='ft-img-five'src={strawb_blacktea}/>
                        <h3> Strawberry Black Tea</h3>
                    </div>
                    

                    <div className="matcha-menu mn">

                    </div>
                </div>
            </div>
    );
}

export default MenuC;