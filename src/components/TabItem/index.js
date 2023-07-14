import './index.css'

const TabItem = props => {
  const {eachTabItem, cItems, tabIdDup} = props
  let stylEele = ''
  let styleHr = ''
  if (eachTabItem.tabId === `${tabIdDup}`) {
    stylEele = 'style-hr'
    styleHr = 'tab-items-hr'
  }

  const cAppItems = () => {
    cItems(eachTabItem.tabId)
  }

  return (
    <div>
      <p className={`tab-items ${stylEele}`} onClick={cAppItems}>
        {eachTabItem.displayText}{' '}
      </p>
      <hr className={`${styleHr}`} />
    </div>
  )
}

export default TabItem
