import Image from 'next/image'

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
                    <div className="mt-header">
                        <Image className='mt' />
                        <h3> Milk Tea Header </h3>
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
                        <Image className='mt-img-three' src={boba_milktea} />
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

                    <div className="Specialty-menu mn">

                    </div>

                    <div className="matcha-menu mn">

                    </div>

                    <div className="fruit-tea-menu mn">

                    </div>
                </div>
            </div>
    );
}

export default MenuC