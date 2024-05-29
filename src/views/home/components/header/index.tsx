import { MenuTypeEnum, types } from '@/views/menu'
import styles from './index.module.less'
import Cat from '@/assets/image/cat.jpg'
import classNames from 'classnames'
// import { useSetState } from 'ahooks'
import ShopSvg from '@/assets/svg/shop.svg?react'
import { Toast } from 'antd-mobile'

type HeaderProps = {
  activeTab: MenuTypeEnum
  shopCount: number
  tabChange: (tab: MenuTypeEnum) => void
  onShopCar: (open: boolean) => void
}

const Header = ({ activeTab, shopCount, tabChange, onShopCar }: HeaderProps) => {
  //   const [state, setState] = useSetState({
  //     tab: MenuTypeEnum.Meat,
  //   })
  const handleShopCar = () => {
    if (shopCount) {
      onShopCar(true)
    } else {
      Toast.show({
        content: 'bro 先选择餐单',
        position: 'top',
      })
    }
  }

  return (
    <div className={styles.header}>
      <img className={styles.logo} src={Cat} alt="" />
      <>
        <div className={styles['tab-box']}>
          {types.map((item) => (
            <div
              className={classNames(styles.tab, {
                [styles['tab-active']]: item.value === activeTab,
              })}
              key={item.value}
              onClick={() => tabChange(item.value)}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className={styles['shop-box']} onClick={handleShopCar}>
          <ShopSvg className={styles.shop}></ShopSvg>
          <div className={styles['shop-count']}>{shopCount || ''}</div>
        </div>
      </>
    </div>
  )
}

export default Header
