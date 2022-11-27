// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import menu from '../../public/media/SolBoba-Menu.pdf'
//export default function handler(req, res) {
//  res.status(200).json({ name: 'John Doe' })
//}

export default function downloadMenu(req, res) {
    res.status(200).json({ content: menu })
};