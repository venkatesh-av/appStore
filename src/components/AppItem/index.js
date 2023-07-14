import './index.css'

const AppItem = props => {
  const {eachAppItem} = props

  return (
    <div className="AppItem-container">
      <img
        src={eachAppItem.imageUrl}
        alt={eachAppItem.appName}
        className="appItem-img"
      />
      <p className="appItem-name">{eachAppItem.appName}</p>
    </div>
  )
}

export default AppItem
