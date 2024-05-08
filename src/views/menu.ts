import Img1 from '@/assets/image/menu/1.jpeg'
import cat from '@/assets/image/cat.jpeg'

export enum MenuTypeEnum {
  Meat = 'MEAT',
  Vegetable = 'VEGETABLE',
  Other = 'OTHER',
}

export const types = [
  {
    label: '肉类',
    value: MenuTypeEnum.Meat,
  },
  {
    label: '蔬菜',
    value: MenuTypeEnum.Vegetable,
  },
  {
    label: '其他',
    value: MenuTypeEnum.Other,
  },
]

export const menu = [
  {
    id: 1,
    name: '红烧牛腩',
    img: Img1,
    type: MenuTypeEnum.Meat,
  },
  {
    id: 2,
    name: '红烧牛腩2',
    img: Img1,
    type: MenuTypeEnum.Meat,
  },
  {
    id: 3,
    name: '红烧牛腩3',
    img: cat,
    type: MenuTypeEnum.Meat,
  },
  {
    id: 4,
    name: 'cat',
    img: cat,
    type: MenuTypeEnum.Vegetable,
  },
]
