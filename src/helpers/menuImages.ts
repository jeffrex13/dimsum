import ShuiJiao from '../pages/assets/pictures/dimsum-2.jpg'
import Wonton from '../pages/assets/pictures/dimsum-3.jpg'
import Bao from '../pages/assets/pictures/dimsum-4.jpg'
import Jiaozi from '../pages/assets/pictures/dimsum-5.jpg'
import Platter from '../pages/assets/pictures/dimsum-6.jpg'
import SpringRoll from '../pages/assets/pictures/spring-rolls.png'

export const menuImages = (food: any) => {
  switch (food) {
    case 'shuijiao':
      return ShuiJiao
    case 'wonton':
      return Wonton
    case 'bao':
      return Bao
    case 'jiaozi':
      return Jiaozi
    case 'platter':
      return Platter
    case 'springroll':
      return SpringRoll
    default:
      break
  }
}
