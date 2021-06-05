import Header from '../components/header'

import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="プロフィール" />
    <div className={sharedStyles.layout}>
      <h1>プロフィール</h1>
      <img src="/prof.png" alt="プロフィール画像" />
      <h2>ろい</h2>
      <div className="explanation">
        <p>
          HR業界で営業を経験し、現在はサーバーサイドエンジニアをやっています。マイペースに更新。
        </p>
      </div>
    </div>
  </>
)
