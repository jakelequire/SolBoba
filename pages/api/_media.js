
/* 
 * I wanted to clear up space in my components so it was easier to work with
 * Also it just felt cleaner having my media imports in one file and reference with dot notation
 * I'm not sure if this is the best way to do it, but it works for me
*/

import placeholder from '../../public/media/drinks/placeholder.png';
import banana_milk from '../../public/media/drinks/banana-milk.png'
import bloopi from '../../public/media/drinks/bloopi.png'
import blueb_matcha from '../../public/media/drinks/blueb-matcha.png'
import boba_milktea from '../../public/media/drinks/boba-milktea.png'
import dirty_matcha from '../../public/media/drinks/dirty-matcha.png'
import gfade from '../../public/media/drinks/gfade.png'
import hibiscus_mango from '../../public/media/drinks/hibiscus-mango.png'
import lemonade from '../../public/media/drinks/lemonade.png'
import lychee_hibiscus from '../../public/media/drinks/lychee-hibiscus.png'
import matcha_latte from '../../public/media/drinks/matcha-latte.png'
import matcha_oreo from '../../public/media/drinks/matcha-oreo.png'
import orange_guava from '../../public/media/drinks/orange-guava.png'
import purple_flurp from '../../public/media/drinks/purple-flurp.png'
import snickerdoodle from '../../public/media/drinks/snickerdoodle.png'
import strawb_blacktea from '../../public/media/drinks/strawb-blacktea.png'
import strawb_matcha from '../../public/media/drinks/strawb-matcha.png'
import strawb_milk from '../../public/media/drinks/strawb-milk.png'
import taro_oreo from '../../public/media/drinks/taro-oreo.png'
import thai_tea from '../../public/media/drinks/thai-tea.png'
import tiger_boba from '../../public/media/drinks/tiger-boba.png'
import tiramisu from '../../public/media/drinks/tiramisu.png'
import honeydew from '../../public/media/drinks/honeydew.png'
import icelevel from '../../public/media/icelevel.png'
import sugarlevel from '../../public/media/sugarlevel.png'


const drink = {
    placeholder: placeholder,
    banana_milk: banana_milk,
    bloopi: bloopi,
    blueb_matcha: blueb_matcha,
    boba_milktea: boba_milktea,
    dirty_matcha: dirty_matcha,
    gfade: gfade,
    hibiscus_mango: hibiscus_mango,
    lemonade: lemonade,
    lychee_hibiscus: lychee_hibiscus,
    matcha_latte: matcha_latte,
    matcha_oreo: matcha_oreo,
    orange_guava: orange_guava,
    purple_flurp: purple_flurp,
    snickerdoodle: snickerdoodle,
    strawb_blacktea: strawb_blacktea,
    strawb_matcha: strawb_matcha,
    strawb_milk: strawb_milk,
    taro_oreo: taro_oreo,
    thai_tea: thai_tea,
    tiger_boba: tiger_boba,
    tiramisu: tiramisu,
    honeydew: honeydew,
    icelevel: icelevel,
    sugarlevel: sugarlevel
}
export default drink

export const link = {
        facebook: 'https://www.facebook.com/SolBobaTacoma/',
        instagram: 'https://www.instagram.com/sol_boba/',
        yelp: 'https://www.yelp.com/biz/sol-boba-lakewood',
        uberEats: 'https://www.ubereats.com/store/sol-boba/RAc3gNnfUui-wpJpf_eY2w',
        directions: 'https://goo.gl/maps/cA82i2o68wMHYGuU9',
}

import logo from '../../public/media/logo1.png'
import fbIcon from '../../public/media/facebook-icon.png'
import instaIcon from '../../public/media/instagram-icon.svg'
import yelpIcon from '../../public/media/yelp-icon.svg'

export const icon = {
    logo: logo,
    facebook: fbIcon,
    instagram: instaIcon,
    yelp: yelpIcon,
}


export function YelpSvg() {
    return(
<svg className="yelp-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="45" height="45" 
viewBox="0 0 36 36">
            <path className="yelp-logo" d="M 14.34375 4 C 12.871094 4.050781 9.742188 4.988281 9.09375 5.65625 C 8.855469 5.902344 8.742188 6.230469 8.8125 6.5 C 8.929688 6.738281 13.875 14.5 13.875 14.5 C 14.609375 15.6875 15.210938 15.5 15.40625 15.4375 C 15.601563 15.378906 16.191406 15.199219 16.125 13.8125 C 16.054688 12.191406 15.589844 4.992188 15.53125 4.65625 C 15.449219 4.351563 15.1875 4.117188 14.84375 4.03125 C 14.714844 4 14.554688 3.992188 14.34375 4 Z M 21.8125 11.09375 C 21.664063 11.097656 21.535156 11.132813 21.40625 11.21875 C 21.25 11.320313 21.128906 11.472656 18.9375 14.46875 C 18.9375 14.46875 17.949219 15.832031 17.9375 15.84375 C 17.675781 16.160156 17.683594 16.609375 17.9375 17 C 18.203125 17.402344 18.625 17.613281 19.03125 17.5 C 19.03125 17.5 19.035156 17.523438 19.03125 17.53125 C 19.234375 17.457031 19.59375 17.34375 20.25 17.1875 C 24.34375 16.195313 24.496094 16.167969 24.65625 16.0625 C 24.902344 15.894531 25.019531 15.589844 25 15.25 C 25 15.238281 25.003906 15.230469 25 15.21875 C 24.894531 14.214844 23.148438 11.609375 22.28125 11.1875 C 22.128906 11.113281 21.960938 11.089844 21.8125 11.09375 Z M 8.0625 15.125 C 7.765625 15.113281 7.496094 15.273438 7.3125 15.5625 C 6.921875 16.1875 6.769531 18.132813 6.90625 19.4375 C 6.957031 19.871094 7.011719 20.253906 7.125 20.46875 C 7.28125 20.765625 7.546875 20.925781 7.84375 20.9375 C 8.035156 20.945313 8.179688 20.90625 11.78125 19.75 C 11.78125 19.75 13.367188 19.253906 13.375 19.25 C 13.773438 19.148438 14.035156 18.78125 14.0625 18.3125 C 14.089844 17.832031 13.84375 17.402344 13.4375 17.25 C 13.4375 17.25 12.316406 16.78125 12.3125 16.78125 C 8.441406 15.183594 8.257813 15.128906 8.0625 15.125 Z M 19.09375 19.53125 C 18.796875 19.523438 18.46875 19.664063 18.25 19.9375 C 17.945313 20.308594 17.914063 20.816406 18.15625 21.1875 L 18.78125 22.21875 C 20.917969 25.691406 21.09375 25.910156 21.25 26.03125 C 21.488281 26.21875 21.78125 26.25 22.09375 26.125 C 23.003906 25.761719 24.984375 23.253906 25.125 22.28125 C 25.171875 21.941406 25.078125 21.65625 24.84375 21.46875 C 24.691406 21.355469 24.566406 21.308594 20.96875 20.125 C 20.96875 20.125 19.394531 19.605469 19.375 19.59375 C 19.28125 19.558594 19.191406 19.535156 19.09375 19.53125 Z M 14.71875 20.65625 C 14.507813 20.703125 14.324219 20.832031 14.1875 21 C 14.1875 21 13.410156 21.9375 13.40625 21.9375 C 10.691406 25.121094 10.597656 25.25 10.53125 25.4375 C 10.492188 25.546875 10.457031 25.695313 10.46875 25.8125 C 10.484375 25.984375 10.558594 26.128906 10.6875 26.28125 C 11.316406 27.027344 14.351563 28.132813 15.3125 27.96875 C 15.648438 27.90625 15.863281 27.75 15.96875 27.46875 C 16.03125 27.285156 16.050781 27.160156 16.0625 23.375 C 16.0625 23.375 16.0625 21.707031 16.0625 21.6875 C 16.089844 21.277344 15.839844 20.886719 15.40625 20.71875 C 15.183594 20.632813 14.929688 20.609375 14.71875 20.65625 Z" ></path>

</svg>

    )
}

export function InstaSvg() {
    return(
        <svg className="insta-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="48" height="48"
            viewBox="0 0 64 64">
            <path className="insta-logo" d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z"></path>
        </svg> 
    );
}


export function FacebookSvg() {
    return (
    <svg  className="fb-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 64 64">
        <path className="fb-logo" d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 41.019571 43.357999 48.468043 34.703125 49.775391 L 34.703125 38.316406 L 39.544922 38.316406 L 40.269531 32.544922 L 34.703125 32.544922 L 34.703125 28.503906 C 34.703125 26.902906 35.786547 26.080078 36.935547 26.080078 C 38.084547 26.080078 40.464844 26.046875 40.464844 26.046875 L 40.464844 20.882812 C 40.464844 20.882812 38.346594 20.638672 36.183594 20.638672 C 34.366594 20.638672 32.365672 21.150828 30.763672 22.798828 C 29.133672 24.474828 28.898438 26.949703 28.898438 29.970703 L 28.898438 32.544922 L 24.046875 32.544922 L 24.046875 38.316406 L 28.898438 38.316406 L 28.898438 49.714844 C 20.438669 48.242252 14 40.881048 14 32 C 14 22.059 22.059 14 32 14 z"></path>
    </svg>
    );
}