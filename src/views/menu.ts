import img2 from '@/assets/image/menu/上海青炒香菇.jpg'
import img3 from '@/assets/image/menu/冒菜.jpg'
import img4 from '@/assets/image/menu/冬瓜蛤蜊汤.jpg'
import img5 from '@/assets/image/menu/冬阴功汤.jpg'
import img6 from '@/assets/image/menu/凉拌皮蛋.jpg'
import img7 from '@/assets/image/menu/卤鸭货.jpg'
import img8 from '@/assets/image/menu/口水鸡.jpg'
import img9 from '@/assets/image/menu/四季豆炒肉.jpg'
import img10 from '@/assets/image/menu/小龙虾.jpg'
import img11 from '@/assets/image/menu/山药炖乌鸡.jpg'
import img12 from '@/assets/image/menu/手撕鸡腿.jpg'
import img13 from '@/assets/image/menu/柠檬泡凤爪.jpg'
import img14 from '@/assets/image/menu/椰子鸡.jpg'
import img15 from '@/assets/image/menu/毛豆炒肉.jpg'
import img16 from '@/assets/image/menu/水蒸蛋.jpg'
import img17 from '@/assets/image/menu/泡椒鸡胗.jpg'
import img18 from '@/assets/image/menu/清炒秋葵.jpg'
import img19 from '@/assets/image/menu/清炒红萝卜丝.jpg'
import img20 from '@/assets/image/menu/清炒莴笋.jpg'
import img21 from '@/assets/image/menu/清蒸基围虾.jpg'
import img22 from '@/assets/image/menu/清蒸鲈鱼.jpg'
import img23 from '@/assets/image/menu/炒红苋菜.jpg'
import img24 from '@/assets/image/menu/炒西兰花.jpg'
import img25 from '@/assets/image/menu/煎牛排.jpg'
import img26 from '@/assets/image/menu/玉米排骨汤.jpg'
import img27 from '@/assets/image/menu/番茄牛腩.jpg'
import img28 from '@/assets/image/menu/白萝卜鸡蛋汤.jpg'
import img29 from '@/assets/image/menu/红烧五花肉.jpg'
import img30 from '@/assets/image/menu/红烧基围虾.jpg'
import img31 from '@/assets/image/menu/红烧猪蹄.jpg'
import img32 from '@/assets/image/menu/红烧芋儿.jpg'
import img33 from '@/assets/image/menu/肉沫蒸茄子.jpg'
import img34 from '@/assets/image/menu/芦笋炒鸡蛋.jpg'
import img35 from '@/assets/image/menu/葱油拌面.jpg'
import img36 from '@/assets/image/menu/蒜苔炒腊肉.jpg'
import img37 from '@/assets/image/menu/蒜蓉烤生蚝.jpg'
import img38 from '@/assets/image/menu/蒜蓉生菜.jpg'
import img39 from '@/assets/image/menu/蒜蓉空心菜.jpg'
import img40 from '@/assets/image/menu/蘑菇鸡汤.jpg'
import img41 from '@/assets/image/menu/西红柿炒鸡蛋.jpg'
import img42 from '@/assets/image/menu/豆泡炒肉.jpg'
import img43 from '@/assets/image/menu/辣椒煎蛋.jpg'
import img44 from '@/assets/image/menu/辣炒腊鸭腿.jpg'
import img45 from '@/assets/image/menu/辣炒花甲.jpg'
import img46 from '@/assets/image/menu/辣炒鸡爪.jpg'
import img47 from '@/assets/image/menu/酸菜鱼.jpg'
import img48 from '@/assets/image/menu/香煎中翅.jpg'
import img49 from '@/assets/image/menu/香煎豆腐.jpg'
import img50 from '@/assets/image/menu/鲫鱼豆腐汤.jpg'
import img51 from '@/assets/image/menu/麻辣香锅.jpg'

export enum MenuTypeEnum {
  Meat = 'MEAT',
  Vegetable = 'VEGETABLE',
  Other = 'OTHER',
}

export const types = [
  { label: '肉类', value: MenuTypeEnum.Meat },
  { label: '蔬菜', value: MenuTypeEnum.Vegetable },
  { label: '其他', value: MenuTypeEnum.Other },
]

export const menu = [
  { name: '上海青炒香菇', img: img2, type: MenuTypeEnum.Vegetable },
  { name: '冒菜', img: img3, type: MenuTypeEnum.Meat },
  { name: '冬瓜蛤蜊汤', img: img4, type: MenuTypeEnum.Other },
  { name: '冬阴功汤', img: img5, type: MenuTypeEnum.Other },
  { name: '凉拌皮蛋', img: img6, type: MenuTypeEnum.Vegetable },
  { name: '卤鸭货', img: img7, type: MenuTypeEnum.Meat },
  { name: '口水鸡', img: img8, type: MenuTypeEnum.Meat },
  { name: '四季豆炒肉', img: img9, type: MenuTypeEnum.Vegetable },
  { name: '小龙虾', img: img10, type: MenuTypeEnum.Meat },
  { name: '山药炖乌鸡', img: img11, type: MenuTypeEnum.Meat },
  { name: '手撕鸡腿', img: img12, type: MenuTypeEnum.Meat },
  { name: '柠檬泡凤爪', img: img13, type: MenuTypeEnum.Meat },
  { name: '椰子鸡', img: img14, type: MenuTypeEnum.Meat },
  { name: '毛豆炒肉', img: img15, type: MenuTypeEnum.Vegetable },
  { name: '水蒸蛋', img: img16, type: MenuTypeEnum.Meat },
  { name: '泡椒鸡胗', img: img17, type: MenuTypeEnum.Meat },
  { name: '清炒秋葵', img: img18, type: MenuTypeEnum.Vegetable },
  { name: '清炒红萝卜丝', img: img19, type: MenuTypeEnum.Vegetable },
  { name: '清炒莴笋', img: img20, type: MenuTypeEnum.Vegetable },
  { name: '清蒸基围虾', img: img21, type: MenuTypeEnum.Meat },
  { name: '清蒸鲈鱼', img: img22, type: MenuTypeEnum.Meat },
  { name: '炒红苋菜', img: img23, type: MenuTypeEnum.Vegetable },
  { name: '炒西兰花', img: img24, type: MenuTypeEnum.Vegetable },
  { name: '煎牛排', img: img25, type: MenuTypeEnum.Meat },
  { name: '玉米排骨汤', img: img26, type: MenuTypeEnum.Other },
  { name: '番茄牛腩', img: img27, type: MenuTypeEnum.Meat },
  { name: '白萝卜鸡蛋汤', img: img28, type: MenuTypeEnum.Other },
  { name: '红烧五花肉', img: img29, type: MenuTypeEnum.Meat },
  { name: '红烧基围虾', img: img30, type: MenuTypeEnum.Meat },
  { name: '红烧猪蹄', img: img31, type: MenuTypeEnum.Meat },
  { name: '红烧芋儿', img: img32, type: MenuTypeEnum.Vegetable },
  { name: '肉沫蒸茄子', img: img33, type: MenuTypeEnum.Vegetable },
  { name: '芦笋炒鸡蛋', img: img34, type: MenuTypeEnum.Vegetable },
  { name: '葱油拌面', img: img35, type: MenuTypeEnum.Other },
  { name: '蒜苔炒腊肉', img: img36, type: MenuTypeEnum.Meat },
  { name: '蒜蓉烤生蚝', img: img37, type: MenuTypeEnum.Meat },
  { name: '蒜蓉生菜', img: img38, type: MenuTypeEnum.Vegetable },
  { name: '蒜蓉空心菜', img: img39, type: MenuTypeEnum.Vegetable },
  { name: '蘑菇鸡汤', img: img40, type: MenuTypeEnum.Meat },
  { name: '西红柿炒鸡蛋', img: img41, type: MenuTypeEnum.Meat },
  { name: '豆泡炒肉', img: img42, type: MenuTypeEnum.Meat },
  { name: '辣椒煎蛋', img: img43, type: MenuTypeEnum.Meat },
  { name: '辣炒腊鸭腿', img: img44, type: MenuTypeEnum.Meat },
  { name: '辣炒花甲', img: img45, type: MenuTypeEnum.Meat },
  { name: '辣炒鸡爪', img: img46, type: MenuTypeEnum.Meat },
  { name: '酸菜鱼', img: img47, type: MenuTypeEnum.Meat },
  { name: '香煎中翅', img: img48, type: MenuTypeEnum.Meat },
  { name: '香煎豆腐', img: img49, type: MenuTypeEnum.Vegetable },
  { name: '鲫鱼豆腐汤', img: img50, type: MenuTypeEnum.Other },
  { name: '麻辣香锅', img: img51, type: MenuTypeEnum.Meat },
]
