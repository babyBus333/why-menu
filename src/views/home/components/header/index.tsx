import { MenuTypeEnum, types } from '@/views/menu'
import styles from './index.module.less'
import Cat from '@/assets/image/cat.jpeg'
import classNames from 'classnames'
// import { useSetState } from 'ahooks'
import Search from '@/assets/svg/search.svg?react'

type HeaderProps = {
  activeTab: MenuTypeEnum
  tabChange: (tab: MenuTypeEnum) => void
}

const Header = ({ activeTab, tabChange }: HeaderProps) => {
  //   const [state, setState] = useSetState({
  //     tab: MenuTypeEnum.Meat,
  //   })
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={Cat} alt="" />
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
      <Search className={styles.search} />
    </div>
  )
}

export default Header
