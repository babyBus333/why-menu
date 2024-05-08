import { useSetState } from 'ahooks'
import Header from './components/header'
import styles from './index.module.less'
import { MenuTypeEnum, menu } from '../menu'

const Home = () => {
  const [state, setState] = useSetState({
    activeTab: MenuTypeEnum.Meat,
  })

  const headerProps = {
    activeTab: state.activeTab,
    tabChange(activeTab) {
      setState({ activeTab })
    },
  }

  const activeMenu = menu.filter((item) => item.type === state.activeTab)
  return (
    <div className={styles.home}>
      <Header {...headerProps} />
      <div className={styles['menu-box']}>
        {activeMenu.map((item) => (
          <div
            key={item.id}
            style={{ backgroundImage: `url(${item.img})` }}
            className={styles['menu-item']}
          >
            <div className={styles['menu-item-footer']}>
              <div className={styles['menu-item-title']}>{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home
