import Header from '../components/header'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

export default () => (
  <>
    <Header titlePre="プロフィール" />
    <div className={sharedStyles.layout}>
      <h1>プロフィール</h1>
    </div>
  </>
)
