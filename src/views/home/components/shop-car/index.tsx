import styles from './index.module.less'
import { Popup, Toast } from 'antd-mobile'
import { menu } from '@/views/menu'
import CloseSvg from '@/assets/svg/close.svg?react'
import copy from 'copy-to-clipboard'

type ShopCarProps = {
  selectMenuNames: string[]
  onRemoveMenu: (value: string) => void
  open: boolean
  onShopCar: (open: boolean) => void
}

const ShopCar = ({ open, onShopCar, selectMenuNames, onRemoveMenu }: ShopCarProps) => {
  //   const [state, setState] = useSetState({
  //     tab: MenuTypeEnum.Meat,
  //   })

  const activeMenu = menu.filter((item) => selectMenuNames.includes(item.name))
  const onCopyUrl = () => {
    const url = `${window.location.origin}?selectMenuNames=${encodeURIComponent(
      selectMenuNames.join(','),
    )}`
    copy(url)
    Toast.show({ content: '复制成功' })
  }
  const onCopyText = () => {
    const text = selectMenuNames.join('、')
    copy(text)
    Toast.show({ content: '复制成功' })
  }

  return (
    <Popup
      visible={open}
      onMaskClick={() => {
        onShopCar(false)
      }}
      position="right"
      // bodyStyle={{ position: 'relative' }}
    >
      <>
        <div className={styles['shop-car-container']}>
          <div className={styles.content}>
            {activeMenu.map((item) => (
              <div
                key={item.name}
                style={{ backgroundImage: `url(${item.img})` }}
                className={styles['menu-item']}
              >
                <div className={styles['menu-item-footer']}>
                  <div className={styles['menu-item-title']}>{item.name}</div>
                  <CloseSvg onClick={() => onRemoveMenu(item.name)} className={styles.icon} />
                </div>
              </div>
            ))}
          </div>
        </div>{' '}
        <div className={styles.footer}>
          <div className={styles.button} onClick={onCopyUrl}>
            分享链接
          </div>
          <div className={styles.button} onClick={onCopyText}>
            生成文字
          </div>
        </div>
      </>
    </Popup>
  )
}

export default ShopCar
