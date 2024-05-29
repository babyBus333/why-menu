import { useSetState } from 'ahooks'
import AddSvg from '@/assets/svg/add.svg?react'
import CloseSvg from '@/assets/svg/close.svg?react'
import Header from './components/header'
import styles from './index.module.less'
import { MenuTypeEnum, menu } from '../menu'
import ShopCar from './components/shop-car'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getMenuStore, setMenuStore } from './help'

const Home = () => {
  const [searchParams] = useSearchParams()
  const [state, setState] = useSetState({
    activeTab: MenuTypeEnum.Meat,
    showSearch: false,
    selectMenuNames: [] as string[],
    showShopCar: false,
  })

  const headerProps = {
    activeTab: state.activeTab,
    shopCount: state.selectMenuNames.length,
    tabChange(activeTab) {
      setState({ activeTab })
    },
    onShopCar(open: boolean) {
      setState({ showShopCar: open })
    },
  }

  const onAddMenu = (name: string) => {
    const newValue = [...state.selectMenuNames, name]
    setState({
      selectMenuNames: newValue,
    })
    setMenuStore(newValue)
  }

  const onRemoveMenu = (name: string) => {
    const newValue = state.selectMenuNames.filter((item) => item !== name)
    setState({
      selectMenuNames: newValue,
      showShopCar: newValue.length ? state.showShopCar : false,
    })
    setMenuStore(newValue)
  }

  const shopCarProps = {
    open: state.showShopCar,
    selectMenuNames: state.selectMenuNames,
    onRemoveMenu,
    onShopCar(open: boolean) {
      setState({ showShopCar: open })
    },
  }

  const activeMenu = menu.filter((item) => item.type === state.activeTab)

  useEffect(() => {
    const urlValue = decodeURIComponent(searchParams.get('selectMenuNames') || '')
    const selectMenuNames = urlValue ? urlValue.split(',') : getMenuStore() || []
    setMenuStore(selectMenuNames)
    setState({ selectMenuNames })
  }, [])

  return (
    <div className={styles.home}>
      <Header {...headerProps} />
      <div className={styles['menu-box']}>
        {activeMenu.map((item) => (
          <div
            key={item.name}
            style={{ backgroundImage: `url(${item.img})` }}
            className={styles['menu-item']}
          >
            <div className={styles['menu-item-footer']}>
              <div className={styles['menu-item-title']}>{item.name}</div>
              {state.selectMenuNames.includes(item.name) ? (
                <CloseSvg onClick={() => onRemoveMenu(item.name)} className={styles.icon} />
              ) : (
                <AddSvg onClick={() => onAddMenu(item.name)} className={styles.icon} />
              )}
            </div>
          </div>
        ))}
      </div>
      <ShopCar {...shopCarProps} />
    </div>
  )
}
export default Home
