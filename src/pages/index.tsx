import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="ホーム" />
    <div className={sharedStyles.layout}>
      <h1>凡人のメモとログ</h1>
    </div>
  </>
)
